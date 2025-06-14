/**
 * 📡 Surge 脚本：Pornhub 推荐页 Cookie 抓取（输出清晰包裹）
 *
 * 功能说明：
 * - 提取推荐页请求中的 Cookie
 * - 使用 `<<<COOKIE>>>` 包裹完整内容，防止复制错
 * - 自动复制到剪贴板 + 弹出通知 + 控制台输出
 *
 * Surge 配置：
 * [Script]
 * Pornhub Cookie 抓取 = type=http-request,pattern=^https:\/\/cn\.pornhub\.com\/recommended,script-path=https://yourdomain.com/ph_cookie.js
 *
 * [MITM]
 * hostname = cn.pornhub.com
 */

if ($request.url.includes("/recommended")) {
  const rawCookie = $request.headers["Cookie"] || $request.headers["cookie"];
  
  if (rawCookie) {
    const wrapped = `<<<===== 🍪 Cookie =====>>>\n${rawCookie}\n<<<===== 🍪 Cookie =====>>>`;

    $clipboard.write(rawCookie); // 剪贴板仍使用原始 Cookie（便于直接粘贴）
    $notification.post("📡 Pornhub Cookie", "✅ 已复制，注意边界标记", wrapped);
    console.log(wrapped);
  } else {
    $notification.post("📡 Cookie 抓取失败", "", "未检测到 Cookie 字段");
    console.log("❌ 未检测到 Cookie");
  }
}

$done({});
