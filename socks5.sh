#!/bin/bash
# 一键部署 Shadowsocks 2022 / AEAD 节点 + 自动生成 Surge Beta 配置和扫码订阅
# 适用于 Debian / Ubuntu

set -e

# ========== 1. 安装依赖 ==========
echo "安装依赖..."
apt update
apt install -y wget unzip curl gnupg software-properties-common qrencode shadowsocks-libev

# ========== 2. 生成随机端口和密码 ==========
SS_PORT=$((RANDOM%55535+10000))       # 生成 10000~65535 随机端口
SS_PASSWORD=$(openssl rand -base64 12) # 生成随机密码

# ========== 3. 选择加密方式 ==========
echo "请选择加密方式:"
echo "1) aes-256-gcm"
echo "2) 2022-blake3-aes-256-gcm"
read -p "输入序号（默认1）: " SS_METHOD_CHOICE
SS_METHOD_CHOICE=${SS_METHOD_CHOICE:-1}

if [[ "$SS_METHOD_CHOICE" == "2" ]]; then
    SS_METHOD="2022-blake3-aes-256-gcm"
    read -p "请输入 Identity 参数（可留空）: " SS_IDENTITY
else
    SS_METHOD="aes-256-gcm"
    SS_IDENTITY=""
fi

# ========== 4. 创建配置文件 ==========
SS_CONFIG_FILE="/etc/shadowsocks-libev/config.json"
echo "生成 Shadowsocks 配置文件 $SS_CONFIG_FILE ..."
cat > $SS_CONFIG_FILE <<EOF
{
    "server":"0.0.0.0",
    "server_port":$SS_PORT,
    "password":"$SS_PASSWORD",
    "method":"$SS_METHOD",
    "mode":"tcp_and_udp",
    "fast_open":true
EOF

if [[ -n "$SS_IDENTITY" ]]; then
    echo "    ,\"identity\":\"$SS_IDENTITY\"" >> $SS_CONFIG_FILE
fi

echo "}" >> $SS_CONFIG_FILE

# ========== 5. 启动 Shadowsocks ==========
systemctl enable shadowsocks-libev
systemctl restart shadowsocks-libev

# ========== 6. 获取公网 IP ==========
PUBLIC_IP=$(curl -s https://ifconfig.me)

# ========== 7. 生成 ss:// URL ==========
if [[ "$SS_METHOD" == "aes-256-gcm" ]]; then
    SS_URI="ss://$(echo -n "$SS_METHOD:$SS_PASSWORD@$PUBLIC_IP:$SS_PORT" | base64 -w0)"
else
    SS_URI="ss://$SS_METHOD:$SS_PASSWORD@$PUBLIC_IP:$SS_PORT"
    if [[ -n "$SS_IDENTITY" ]]; then
        SS_URI="$SS_URI?identity=$SS_IDENTITY"
    fi
fi

# 输出节点信息
echo -e "\n====================================="
echo "Shadowsocks 节点已启动！"
echo "IP: $PUBLIC_IP"
echo "端口: $SS_PORT"
echo "密码: $SS_PASSWORD"
echo "加密方式: $SS_METHOD"
if [[ -n "$SS_IDENTITY" ]]; then
    echo "Identity: $SS_IDENTITY"
fi
echo -e "\nSurge Beta 可用 ss:// URL:\n$SS_URI"

# ========== 8. 生成 Surge 配置模板 ==========
SURGE_CONFIG=~/surge_ss_config.conf
cat > $SURGE_CONFIG <<EOF
[Proxy]
MySS = ss, $PUBLIC_IP, $SS_PORT, encrypt-method=$SS_METHOD, password=$SS_PASSWORD, udp-relay=true
# 如果是 Shadowsocks 2022 协议并配置了 Identity，可改为：
# MySS = ss, $PUBLIC_IP, $SS_PORT, encrypt-method=$SS_METHOD, password=$SS_PASSWORD, udp-relay=true, identity=$SS_IDENTITY

[Rule]
# 内网/局域网直连
IP-CIDR,192.168.6.0/24,DIRECT

# 国内网站直连
DOMAIN-SUFFIX,cn,DIRECT
DOMAIN-SUFFIX,com.cn,DIRECT
DOMAIN-SUFFIX,gov.cn,DIRECT
DOMAIN-SUFFIX,edu.cn,DIRECT

# 其他流量走 Shadowsocks 节点
FINAL,MySS
EOF

echo -e "\nSurge 配置模板已生成: $SURGE_CONFIG"

# ========== 9. 生成二维码 ==========
echo -e "\n二维码（可扫码导入 Shadowrocket / Surge Beta）："
qrencode -t ansiutf8 "$SS_URI"

echo "====================================="