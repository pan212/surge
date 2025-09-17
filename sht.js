// sht.js - 色花堂去广告（容错 + 日志 + 统计）
(function () {
    try {
        if (!$response) {
            console.log("sht: no $response");
            $done({});
            return;
        }

        const headers = $response.headers || {};
        const ct = (headers['Content-Type'] || headers['content-type'] || "").toLowerCase();

        // 只处理 HTML
        if (!ct.includes("text/html")) {
            // 如果你希望也处理 text/plain 或者 application/xhtml+xml，可以在这里放行
            $done({ body: $response.body });
            return;
        }

        let body = $response.body || "";
        let totalRemoved = 0;

        // 辅助：统计并删除函数
        function removeAndCount(regex, name) {
            const before = body.length;
            const matches = body.match(regex);
            const count = matches ? matches.length : 0;
            body = body.replace(regex, "");
            totalRemoved += count;
            if (count > 0) console.log(`sht: removed ${count} occurrence(s) of ${name}`);
            return count;
        }

        try {
            // 1) 删除顶部广告 logo 区块 <div class="n5_tbys cl"> ... </div>
            removeAndCount(/<div\s+class=["']n5_tbys\s+cl["'][\s\S]*?<\/div>/gi, "n5_tbys cl");

            // 2) 删除广告文字列表 <div class="show-text cl"> ... </div>
            removeAndCount(/<div\s+class=["']show-text\s+cl["'][\s\S]*?<\/div>/gi, "show-text cl");

            // 3) 删除轮播广告区域 <div class="n5_jujiao"> ... </div>
            removeAndCount(/<div\s+class=["']n5_jujiao["'][\s\S]*?<\/div>/gi, "n5_jujiao");

            // 4) 删除单独的幻灯片 <li><a ...><img src="...gif"...></a></li> 之类（只匹配包含 gif 的 img 链接）
            removeAndCount(/<li>[\s\S]*?<img[^>]*src=["'][^"']*\.gif[^"']*["'][\s\S]*?<\/li>/gi, "gif carousel item");

            // 5) 删除 <font color="..."> 内明显红色广告文本（只删除包含 <font color 大红/暗红 的链接片段）
            //    这条比较谨慎，只匹配 <a>...</a> 内完全由 <font> 包裹的情况
            removeAndCount(/<a[^>]*>\s*<font\s+color=["']#?(ff0000|cc0033|990000|ff0066|cc0000)["'][\s\S]*?<\/font>\s*<\/a>/gi, "redeye font links");

            // （可选/保守）6) 如果你以后确认需要，可以在这里添加更多针对性删除规则

        } catch (e) {
            console.log("sht: regex replace error -> " + e);
        }

        console.log(`sht: finished. totalRemoved = ${totalRemoved}. new length = ${body.length}`);

        // 返回修改后的 body（保留原 headers）
        $done({ body });
    } catch (err) {
        console.log("sht fatal: " + err);
        $done({});
    }
})();