// sht.js - 色花堂去广告（激进版）
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

        function removeAndCount(regex, name) {
            const matches = body.match(regex);
            const count = matches ? matches.length : 0;
            if (count > 0) {
                totalRemoved += count;
                console.log(`sht: removed ${count} ${name}`);
                body = body.replace(regex, "");
            }
        }

        // 删除顶部广告条
        removeAndCount(/<div\s+class=["']n5_tbys\s+cl["'][\s\S]*?<\/div>/gi, "顶部广告条");

        // 删除文字广告列表
        removeAndCount(/<div\s+class=["']show-text\s+cl["'][\s\S]*?<\/div>/gi, "文字广告区");

        // 删除焦点图轮播广告
        removeAndCount(/<div\s+class=["']n5_jujiao["'][\s\S]*?<\/div>/gi, "焦点图广告");

        // 删除单独的 GIF 动画广告轮播项
        removeAndCount(/<li>[\s\S]*?<img[^>]*src=["'][^"']*\.gif[^"']*["'][\s\S]*?<\/li>/gi, "GIF 广告");

        // 删除空白占位
        removeAndCount(/<div\s+class=["']h10["'][\s\S]*?<\/div>/gi, "空白占位");

        console.log(`sht: finished, totalRemoved = ${totalRemoved}, new length = ${body.length}`);
        $done({ body });
    } catch (err) {
        console.log("sht fatal: " + err);
        $done({});
    }
})();