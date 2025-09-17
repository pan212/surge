// sht.js - 色花堂去广告（中等强度）
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
        let removedCount = 0;

        function remove(regex, name) {
            const matches = body.match(regex);
            const count = matches ? matches.length : 0;
            if (count > 0) {
                removedCount += count;
                console.log(`sht: removed ${count} ${name}`);
                body = body.replace(regex, "");
            }
        }

        // 1) 顶部横幅广告
        remove(/<div\s+class=["']n5_tbys\s+cl["'][\s\S]*?<\/div>/gi, "顶部广告条");

        // 2) 广告文字列表（只删除包含明显博彩/成人关键词的 item）
        remove(/<div\s+class=["']item["'][\s\S]*?(PG电子|亚博|澳门|成人|博彩|百家乐|色播|抖音|凤凰国际|开元棋牌|麻豆直播)[\s\S]*?<\/div>/gi, "文字广告 item");

        // 3) 焦点图广告轮播
        remove(/<div\s+class=["']n5_jujiao["'][\s\S]*?<\/div>/gi, "焦点图广告");

        // 4) gif 图片轮播广告
        remove(/<li>[\s\S]*?<img[^>]*src=["'][^"']*\.gif[^"']*["'][\s\S]*?<\/li>/gi, "gif 广告");

        // 5) 空白占位
        remove(/<div\s+class=["']h10["'][\s\S]*?<\/div>/gi, "空白占位");

        console.log(`sht: finished, total removed = ${removedCount}`);
        $done({ body });
    } catch (err) {
        console.log("sht fatal: " + err);
        $done({});
    }
})();