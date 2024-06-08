# 根据深巷有喵的Surge配置修改
# 日期：2024-06-07
# 版本：1.1
# 配置作者：https://github.com/Rabbit-Spec/Surge
# 适用版本：iOS/macOS的Surge 5

[General]
# > 日志级别
loglevel = notify
show-error-page-for-reject = true
# > 允许Wi-Fi访问
allow-wifi-access = false
# > All Hybrid 网络并发
all-hybrid = false
# > IPv6 支持（默认关闭）
ipv6 = false
# > 测试超时（秒）
test-timeout = 5
# > Internet 测试 URL
internet-test-url = http://www.baidu.com
# > 代理测速 URL
proxy-test-url = http://www.google.com/generate_204
# > GeoIP数据库
geoip-maxmind-url = https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb
# > 排除简单主机名
exclude-simple-hostnames = true
# > DNS 服务器
dns-server = 223.5.5.5, 119.29.29.29
encrypted-dns-server = quic://dns.alidns.com
hijack-dns = 8.8.8.8:53, 8.8.4.4:53
# > 从 /etc/hosts 读取 DNS 记录
read-etc-hosts = true
# > 远程控制器
http-api-web-dashboard = true
use-default-policy-if-wifi-not-primary = false
# > 跳过代理
skip-proxy = 192.168.0.0/24, 10.0.0.0/8, 172.16.0.0/12, 127.0.0.1, localhost, *.local
# > Always Real IP
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com*.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.battlenet.com.cn, *.battlenet.com, *.blzstatic.cn, *.battle.net
# > Surge VIF
# tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
# tun-included-routes = 192.168.1.12/32
# > 禁用 GEOIP 自动更新
disable-geoip-db-auto-update = true

[Replica]
# > 隐藏 Apple 请求
hide-apple-request = false
# > 隐藏崩溃追踪器请求
hide-crash-reporter-request = true
# > 隐藏 UDP 会话
hide-udp = false
# > 关键词过滤器
keyword-filter-type = false

[Proxy]
🌐 全球直连 = direct

[Proxy Group]
# > 策略组（下面的节点信息需与外部节点对应，若删除了外部节点里的节点，那么在策略组里也要删除。）
✈️ 节点选择 = select, 🚀 我的节点, 🇺🇲 美国节点, 🇭🇰 香港节点,  🇨🇳 台湾节点, 🇸🇬 新加坡节点
📲 电报信息 = smart, no-alert=0, hidden=0, include-all-proxies=0, include-other-group="🇺🇲 美国节点"
🎥 奈飞视频 = select, ✈️ 节点选择, 🇺🇲 美国节点, 🇸🇬 新加坡节点
📹 油管视频 = smart, no-alert=0, hidden=0, include-all-proxies=0, include-other-group="🇺🇲 美国节点"
🍿 国外媒体 = smart, no-alert=0, hidden=0, include-all-proxies=0, include-other-group="✈️ 节点选择,🇺🇲 美国节点, 🇭🇰 香港节点" 
🍔 国内媒体 = select, 🌐 全球直连
🍟 OpenAI = select, ✈️ 节点选择, 🇺🇲 美国节点, 🇸🇬 新加坡节点
Ⓜ️ 微软服务 = select, 🌐 全球直连, 🇺🇲 美国节点, 🇭🇰 香港节点,  🇨🇳 台湾节点, 🇸🇬 新加坡节点
谷歌服务 = select, 🇭🇰 香港节点,  🇺🇲 美国节点, 🇭🇰 香港节点,  🇨🇳 台湾节点, 🇸🇬 新加坡节点
🍎 苹果服务 = select, 🌐 全球直连,  🇺🇲 美国节点, 🇭🇰 香港节点,  🇨🇳 台湾节点, 🇸🇬 新加坡节点

# > 外部节点
🚀 我的节点 = select, policy-path=替换你的订阅, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0
🇺🇲 美国节点 = smart, include-other-group=🚀 我的节点, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0, policy-regex-filter=(🇺🇸)|(美)|(States)|(US)
🇭🇰 香港节点 = smart, include-other-group=🚀 我的节点, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0, policy-regex-filter=(🇭🇰)|(港)|(Hong)|(HK)
🇨🇳 台湾节点 = smart, include-other-group=🚀 我的节点, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0, policy-regex-filter=(🇨🇳)|(台)|(Tai)|(TW)
🇸🇬 新加坡节点 = smart, include-other-group=🚀 我的节点, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0, policy-regex-filter=(🇸🇬)|(新)|(Singapore)|(SG)

[Rule]
# 防止应用循环请求
IP-CIDR,0.0.0.0/32,REJECT,no-resolve
# > 苹果服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Apple/Apple_All_No_Resolve.list,🍎 苹果服务
# > OpenAI
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/OpenAI/OpenAI_Resolve.list,🍟 OpenAI
# > 微软服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Microsoft/Microsoft.list,Ⓜ️ 微软服务
# > 谷歌服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Google/Google_Resolve.list,谷歌服务
# > 社交平台
RULE-SET,https://raw.githubusercontent.com/VirgilClyne/GetSomeFries/main/ruleset/ASN.Telegram.list,📲 电报信息
# > 流媒体
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/YouTube/YouTube.list,📹 油管视频
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list,🎥 奈飞视频
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBili/BiliBili.list,🍔 国内媒体
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaMedia/ChinaMedia.list,🍔 国内媒体
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/GlobalMedia/GlobalMedia_All_No_Resolve.list,🍿 国外媒体
# > Proxy
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Proxy/Proxy_All_No_Resolve.list,✈️ 节点选择
# > 局域网地址
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Lan/Lan.list,🌐 全球直连
# > China ASN
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaASN/ChinaASN_Resolve.list,🌐 全球直连
# > China 补全
RULE-SET,https://raw.githubusercontent.com/Blankwonder/surge-list/master/cn.list,🌐 全球直连
# > DNS 查询失败走 Final 规则
FINAL,✈️ 节点选择,dns-failed
