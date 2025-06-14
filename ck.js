/**
 * Surge 脚本：Pornhub 推荐页 Cookie 抓取
 *
 * 【Script 配置】
 * [Script]
 * Pornhub Cookie 抓取 = type=http-request,pattern=^https:\/\/cn\.pornhub\.com\/recommended,script-path=https://github.com/pan212/surge/raw/refs/heads/main/ck.js
 * 
 * 【MITM 配置】
 * [MITM]
 * hostname = cn.pornhub.com
 * 
 * 🚀 使用方法：
 * 1. 启动 Surge，确保配置中包含上面的 Script 和 MITM
 * 2. 使用 Safari 打开 https://cn.pornhub.com/recommended
 * 3. 系统弹出通知「Cookie 抓取成功」，并自动复制到剪贴板
 * 4. 可在 Surge 控制台中查看完整 Cookie 日志
 */

if ($request.url.includes("/recommended")) {
  const cookieHeader = $request.headers["Cookie"] || $request.headers["cookie"];

  if (cookieHeader) {
    const message = "🍪 Cookie 抓取成功，已复制到剪贴板";
    $clipboard.write(cookieHeader); // 自动复制
    $notification.post("📡 Pornhub Cookie", "✅ 成功", message);
    console.log("🍪 Cookie:", cookieHeader);
  } else {
    $notification.post("📡 Pornhub Cookie", "❌ 失败", "请求中没有发现 Cookie");
    console.log("❌ 未检测到 Cookie 字段");
  }
}
