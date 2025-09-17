// sht.js - 色花堂去广告（精简保守版）
(function () {
    try {
        if (!$response) {
            $done({});
            return;
        }

        const headers = $response.headers || {};
        const ct = (headers['Content-Type'] || headers['content-type'] || "").toLowerCase();
        if (!ct.includes("text/html")) {
            $done({ body: $response.body });
            return;
        }

        let body = $response.body || "";
        let totalRemoved = 0;

        function remove(regex, name) {
            const before = body.length;
            body = body.replace(regex, "");
            if (body.length !== before) {
                totalRemoved++;
                console.log(`sht: removed ${name}`);
            }
        }

        // 只删除常见广告容器，不动链接/文字
        remove(/<div\s+class=["']n5_tbys\s+cl["'][\s\S]*?<\/div>/gi, "顶部广告条");
        remove(/<div\s+class=["']show-text\s+cl["'][\s\S]*?<\/div>/gi, "广告文字区");
        remove(/<div\s+class=["']n5_jujiao["'][\s\S]*?<\/div>/gi, "焦点图广告");

        console.log(`sht: finished. totalRemoved=${totalRemoved}`);
        $done({ body });
    } catch (err) {
        console.log("sht fatal: " + err);
        $done({});
    }
})();