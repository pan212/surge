// sehuatang-debug.js
(function () {
    try {
        if (!$response) {
            console.log("sehuatang-debug: no $response object");
            $done({});
            return;
        }

        // 有些响应可能没有 body（比如重定向），要容错处理
        const body = $response.body || "";
        // 输出 body 长度
        console.log("sehuatang-debug: url -> " + ($request && $request.url ? $request.url : "unknown"));
        console.log("sehuatang-debug: response body length -> " + body.length);

        // 还可以输出 content-type（如果可用）以便判断是不是 HTML
        const ct = $response.headers && ($response.headers['Content-Type'] || $response.headers['content-type']);
        console.log("sehuatang-debug: content-type -> " + (ct || "unknown"));

        // 不修改响应，原样返回
        $done({ body: body });
    } catch (e) {
        console.log("sehuatang-debug error: " + e);
        $done({});
    }
})();