WidgetMetadata = {
    id: "Pornhub",
    title: "Pornhub",
    version: "6.0.2",
    requiredVersion: "0.0.1",
    description: "在线观看Pornhub",
    author: "海带",
    site: "https://github.com/Madai-v/ForwardWidgets",
    detailCacheDuration: 600,
    modules: [
        {
            id: "favorites",
            title: "我的最爱",
            functionName: "getFavorites",
            cacheDuration: 120,
            params: [
                {
                    name: "username",
                    title: "用户名",
                    type: "input",
                    description: "你的Pornhub用户名",
                    value: "",
                    placeholders: [
                        {
                            title: "示例用户",
                            value: "watchadog"
                        }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "收藏列表页码",
                    value: "1"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "视频排序方式",
                    value: "default",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "default"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                }
            ]
        },
        {
            id: "searchUser",
            title: "优选艺人",
            functionName: "getUserUploads",
            cacheDuration: 120,
            params: [
                {
                    name: "username",
                    title: "艺人名称",
                    type: "enumeration",
                    description: "Pornhub艺人名称",
                    belongTo: {
                        paramName: "sort_by",
                        value: ["default", "views", "rating"],
                    },
                    enumOptions: [{ 'title': 'HongKongDoll', 'value': 'HongKongDoll' }, { 'title': '798DS', 'value': '798DS' }, { 'title': 'aiwanxiongxiong', 'value': 'aiwanxiongxiong' }, { 'title': 'andmlove', 'value': 'andmlove' }, { 'title': 'ano ano chan', 'value': 'ano ano chan' }, { 'title': 'bibi Fluffy', 'value': 'bibi Fluffy' }, { 'title': 'CandyKissVip', 'value': 'CandyKissVip' }, { 'title': 'Chinese Bunny', 'value': 'Chinese Bunny' }, { 'title': 'DemiFairyTW', 'value': 'DemiFairyTW' }, { 'title': 'Elle Lee', 'value': 'Elle Lee' }, { 'title': 'Eve', 'value': 'Eve' }, { 'title': 'fortunecutie', 'value': 'fortunecutie' }, { 'title': 'LIs Evans', 'value': 'LIs Evans' }, { 'title': 'loliiiiipop99', 'value': 'loliiiiipop99' }, { 'title': 'Makissse', 'value': 'Makissse' }, { 'title': 'nan12138', 'value': 'nan12138' }, { 'title': 'Nana_taipei', 'value': 'Nana_taipei' }, { 'title': 'Nuomibaby', 'value': 'Nuomibaby' }, { 'title': 'papaxmama', 'value': 'papaxmama' }, { 'title': 'Qiobnxingcaiii', 'value': 'Qiobnxingcaiii' }, { 'title': 'SakuraCandy', 'value': 'SakuraCandy' }, { 'title': 'sskok16', 'value': 'sskok16' }, { 'title': 'SSR Peach', 'value': 'SSR Peach' }, { 'title': 'thelittlejuicer', 'value': 'thelittlejuicer' }, { 'title': 'TLMS_SVJ', 'value': 'TLMS_SVJ' }, { 'title': 'twtutu', 'value': 'twtutu' }, { 'title': 'Vita Won', 'value': 'Vita Won' }, { 'title': 'Yuqiao Chen', 'value': 'Yuqiao Chen' }, { 'title': 'YuzuKitty', 'value': 'YuzuKitty' }]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "视频排序方式",
                    value: "default",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "default"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "艺人视频页码",
                    value: "1"
                }
            ]
        },
        {
            id: "premiumArtists",
            title: "搜索艺人",
            functionName: "getUserUploads",
            cacheDuration: 600,
            params: [
                {
                    name: "username",
                    title: "艺人名称",
                    type: "input",
                    description: "Pornhub艺人名称",
                    value: "",
                    placeholders: [
                        {
                            title: "示例",
                            value: "Chinese Bunny"
                        }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "艺人视频页码",
                    value: "1"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "视频排序方式",
                    value: "default",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "default"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                }
            ]
        },
        {
            id: "hotVideos",  // 热门视频模块
            title: "热门视频",
            functionName: "getHotVideos",
            cacheDuration: 120,
            params: [
                {
                    name: "cc",
                    title: "热门视频",
                    type: "enumeration",
                    description: "选择显示热门视频的国家",
                    enumOptions: [
                        { title: "全球", value: "world" },
                        { title: "美国", value: "US" },
                        { title: "日本", value: "JP" },
                        { title: "韩国", value: "KR" },
                        // 可以继续添加其他国家
                    ],
                    value: "world"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "热门视频页码",
                    value: "1"
                }
            ]
        }

    ]
};

// 通用工具函数 - 减少代码冗余
// 将时间格式（如"7:34"）转换为秒数
function convertDurationToSeconds(duration) {
    if (!duration) return 0;
    var parts = duration.split(':').map(function (part) { return parseInt(part, 10); });
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 1 && !isNaN(parts[0])) return parts[0];
    return 0;
}

// 清理URL中的换行符和首尾空格
function trimUrl(url) {
    return url ? url.replace(/\r?\n|\r/g, "").trim() : "";
}

// 从元素中提取viewkey - 减少重复代码
function extractViewkey($, element) {
    var $element = $(element);
    // 尝试多种可能的属性
    var viewkey = $element.attr('data-video-vkey') || $element.attr('data-id') || $element.attr('id');

    // 如果没有直接属性，尝试从链接中提取
    if (!viewkey) {
        var linkElement = $element.find('a[href*="viewkey="]');
        if (linkElement.length) {
            var href = linkElement.attr('href');
            var keyMatch = href.match(/viewkey=([^&]+)/);
            if (keyMatch && keyMatch[1]) {
                viewkey = keyMatch[1];
            }
        }
    }

    // 清理viewkey，移除可能的前缀
    return viewkey ? viewkey.replace(/^(video|vkey|v|vfavouriteVideo)_/, "") : null;
}

// 提取视频预览URL - 优先data-webm，其次data-mediabook
function extractPreviewUrl($, element, viewkey) {
    var $element = $(element);
    var previewUrl = null;

    // 1. 首先尝试从a标签获取data-webm
    var previewLinkElement = $element.find('a.js-videoPreview, a.webm-videoPreview, a[data-webm]');
    if (previewLinkElement.length) {
        previewUrl = previewLinkElement.attr('data-webm');
        if (previewUrl) {
            return trimUrl(previewUrl);
        }
    }

    // 2. 尝试从img标签获取data-webm
    var thumbElement = $element.find('img.thumb, img.js-videoThumb, img[data-thumb]');
    if (thumbElement.length) {
        previewUrl = thumbElement.attr('data-webm');
        if (previewUrl) {
            return trimUrl(previewUrl);
        }

        // 3. 降级到data-mediabook
        previewUrl = thumbElement.attr('data-mediabook');
        if (previewUrl) {
            return trimUrl(previewUrl);
        }
    }

    return "";
}

// 提取视频的播放量、收藏量和上传日期
function extractVideoStats($, element) {
    var $element = $(element);
    var views = 0;
    var favorites = 0;
    var uploadDate = "";

    // 提取播放量
    var viewsElement = $element.find('.views, .videoDetailsBlock .views, .videoViews');
    if (viewsElement.length) {
        var viewsText = viewsElement.text().trim();
        // 提取数字部分，处理如"1.5K"、"2.3M"等格式
        var viewsMatch = viewsText.match(/(\d+(?:\.\d+)?)\s*([KMB])?/i);
        if (viewsMatch) {
            var viewsNum = parseFloat(viewsMatch[1]);
            var unit = viewsMatch[2] ? viewsMatch[2].toUpperCase() : "";

            if (unit === 'K') viewsNum *= 1000;
            else if (unit === 'M') viewsNum *= 1000000;
            else if (unit === 'B') viewsNum *= 1000000000;

            views = Math.round(viewsNum);
        }
    }

    // 提取收藏量
    var favElement = $element.find('.favorites, .videoDetailsBlock .favorites, .favoritesCounter');
    if (favElement.length) {
        var favText = favElement.text().trim();
        // 提取数字部分，处理如"1.5K"、"2.3M"等格式
        var favMatch = favText.match(/(\d+(?:\.\d+)?)\s*([KMB])?/i);
        if (favMatch) {
            var favNum = parseFloat(favMatch[1]);
            var unit = favMatch[2] ? favMatch[2].toUpperCase() : "";

            if (unit === 'K') favNum *= 1000;
            else if (unit === 'M') favNum *= 1000000;
            else if (unit === 'B') favNum *= 1000000000;

            favorites = Math.round(favNum);
        }
    }

    // 提取上传日期
    var dateElement = $element.find('.added, .videoDetailsBlock .added, .uploadDate');
    if (dateElement.length) {
        uploadDate = dateElement.text().trim();
    }

    return { views: views, favorites: favorites, uploadDate: uploadDate };
}

// 从视频元素提取通用信息 - 减少代码冗余
function extractVideoInfo($, element, viewkey) {
    var $element = $(element);

    // 提取视频标题
    var titleElement = $element.find('.title a, .videoTitle a, a.title');
    var title = titleElement.length ? (titleElement.attr('title') || titleElement.text().trim()) : "未知标题";

    // 提取缩略图URL
    var thumbElement = $element.find('img.thumb, img.js-videoThumb, img[data-thumb]');
    var thumbnailUrl = "";
    if (thumbElement.length) {
        thumbnailUrl = thumbElement.attr('src') || thumbElement.attr('data-mediumthumb') || thumbElement.attr('data-thumb') || "";
        thumbnailUrl = trimUrl(thumbnailUrl);
    }

    // 提取视频预览URL
    var previewUrl = extractPreviewUrl($, element, viewkey);

    // 提取视频时长
    var durationElement = $element.find('.duration, .videoDuration');
    var durationText = durationElement.length ? durationElement.text().trim() : "未知时长";
    var duration = convertDurationToSeconds(durationText);

    // 提取上传者信息
    var uploaderElement = $element.find('.usernameBadgesWrapper a, .usernameWrap a');
    var uploader = uploaderElement.length ? uploaderElement.text().trim() : "未知上传者";

    // 提取视频统计信息（播放量、收藏量、上传日期）
    var stats = extractVideoStats($, element);

    // 构建视频详情页URL
    var link = "/view_video.php?viewkey=" + viewkey;

    // 整合所有信息并输出单条日志
    var videoData = {
        id: viewkey,
        type: "link",
        title: title,
        coverUrl: thumbnailUrl,
        previewUrl: previewUrl,
        duration: duration,
        durationText: durationText,
        uploader: uploader,
        link: link,
        views: stats.views,
        favorites: stats.favorites,
        uploadDate: stats.uploadDate
    };

    console.log("视频信息: " + JSON.stringify(videoData));

    return videoData;
}

// 从HTML中提取m3u8链接
function extractM3u8FromHtml(html) {
    try {
        // 方法1: mediaDefinitions
        let match = html.match(/"mediaDefinitions"\s*:\s*(\[.+?\])/);
        if (match) {
            try {
                let defs = JSON.parse(match[1].replace(/'/g, '"').replace(/,\s*]/g, ']'));
                let hlsItems = defs.filter(item => item && item.format === 'hls' && item.videoUrl);
                if (hlsItems.length > 0) {
                    hlsItems.sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));
                    let formats = hlsItems.map(i => ({
                        url: i.videoUrl,
                        format: (i.quality ? i.quality + 'p' : ''),
                        ext: 'm3u8',
                        type: 'hls'
                    }));
                    return {
                        videoUrl: hlsItems[0].videoUrl,
                        quality: (hlsItems[0].quality ? hlsItems[0].quality + 'p' : ''),
                        formats
                    };
                }
            } catch { }
        }

        // 方法2: flashvars
        match = html.match(/var\s+flashvars_\d+\s*=\s*({.+?});/);
        if (match) {
            try {
                let flashvars = JSON.parse(match[1]);
                let hlsItems = flashvars.mediaDefinitions?.filter(item => item && item.format === 'hls' && item.videoUrl) || [];
                if (hlsItems.length > 0) {
                    hlsItems.sort((a, b) => (parseInt(b.quality) || 0) - (parseInt(a.quality) || 0));
                    let formats = hlsItems.map(i => ({
                        url: i.videoUrl,
                        format: (i.quality ? i.quality + 'p' : ''),
                        ext: 'm3u8',
                        type: 'hls'
                    }));
                    return {
                        videoUrl: hlsItems[0].videoUrl,
                        quality: (hlsItems[0].quality ? hlsItems[0].quality + 'p' : ''),
                        formats
                    };
                }
            } catch { }
        }

        return null;
    } catch (error) {
        console.log("从HTML提取m3u8链接失败: " + error.message);
        return null;
    }
}

// 获取视频m3u8播放链接
async function getVideoM3u8Link(viewkey) {
    try {
        // 统一请求头
        var headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "https://cn.pornhub.com/",
            "Host": "cn.pornhub.com"
        };

        const cnUrl = "https://cn.pornhub.com/view_video.php?viewkey=" + viewkey;
        const cnResponse = await Widget.http.get(cnUrl, { headers });

        if (cnResponse && cnResponse.data) {
            var m3u8Data = extractM3u8FromHtml(cnResponse.data);
            if (m3u8Data) {
                m3u8Data.source = 'cn';
                return m3u8Data;
            }
        }

        throw new Error("无法从 cn.pornhub.com 获取视频播放链接");
    } catch (error) {
        console.log("getVideoM3u8Link error: " + error.message);
        throw error;
    }
}


// 检测页面分页信息
function detectPagination(htmlContent, requestedPage) {
    // 初始化页码
    var page = Math.max(1, Number(requestedPage) || 1);
    var maxPage = 1;

    // 检测分页控件是否存在
    var hasPagination = htmlContent.includes('class="pagination3 paginationGated"') ||
        htmlContent.includes('id="moreDataBtn"');

    if (hasPagination) {
        // 尝试从moreDataBtn的onclick参数中提取最大页码
        var btnMatch = htmlContent.match(/loadMoreData\('.*?',\s*'(\d+)',\s*'(\d+)'\)/);
        if (btnMatch && btnMatch.length >= 3) {
            maxPage = Math.max(parseInt(btnMatch[1]), parseInt(btnMatch[2]));
        } else {
            // 尝试从分页链接中提取最大页码
            var pageLinks = htmlContent.match(/href="[^"]*page=(\d+)/g) || [];
            var pageNumbers = [];
            for (var i = 0; i < pageLinks.length; i++) {
                var match = pageLinks[i].match(/page=(\d+)/);
                pageNumbers.push(match ? parseInt(match[1]) : 0);
            }
            if (pageNumbers.length > 0) {
                maxPage = Math.max.apply(null, pageNumbers.concat([1]));
            }
        }
    }

    // 限制请求的页码不超过最大页码
    page = Math.min(page, maxPage);

    console.log("分页信息: " + JSON.stringify({ page: page, maxPage: maxPage, hasPagination: hasPagination }));

    return { page: page, maxPage: maxPage, hasPagination: hasPagination };
}

// 根据排序方式获取对应的URL参数
function getSortParam(sort_by) {
    switch (sort_by) {
        case 'views':
            return 'o=mv'; // 按播放量排序
        case 'rating':
            return 'o=tr'; // 按评分排序
        default:
            return ''; // 默认排序（最新发布）
    }
}

// 获取收藏列表视频
function getFavorites(params) {
    return new Promise(function (resolve, reject) {
        try {
            console.log("开始获取收藏列表: " + JSON.stringify(params));
            // 参数验证
            if (!params.username) {
                console.log("错误: 未提供用户名");
                reject(new Error("请提供用户名"));
                return;
            }

            // 构建基础URL
            var baseUrl = "https://cn.pornhub.com/users/" + params.username + "/videos/favorites";

            // 添加排序参数
            var sortParam = getSortParam(params.sort_by);
            if (sortParam) {
                baseUrl += "?" + sortParam;
            }

            console.log("基础URL: " + baseUrl);

            // 首次请求（用于检测分页）
            Widget.http.get(baseUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                    "Referer": "https://cn.pornhub.com/"
                }
            }).then(function (firstPageResponse) {
                // 检查响应
                if (!firstPageResponse || !firstPageResponse.data) {
                    console.log("错误: 获取收藏列表失败，无响应或响应无数据");
                    reject(new Error("获取收藏列表失败，请检查网络连接或用户名是否正确"));
                    return;
                }

                // 检查是否有地区限制
                if (firstPageResponse.data.includes("As you may know, your elected officials") ||
                    firstPageResponse.data.includes("Trust and Safety measures")) {
                    console.log("错误: 检测到地区限制");
                    reject(new Error("无法访问Pornhub，可能存在地区限制"));
                    return;
                }

                // 检查是否是空收藏列表
                if (firstPageResponse.data.includes("没有收藏视频") ||
                    firstPageResponse.data.includes("No videos found") ||
                    firstPageResponse.data.includes("empty-list")) {
                    console.log("收藏列表为空");
                    resolve([]); // 返回空数组表示没有收藏视频
                    return;
                }

                // 检测分页信息
                var pagination = detectPagination(firstPageResponse.data, params.page);
                var page = pagination.page;

                // 构建最终URL
                var fullUrl = baseUrl;
                if (page > 1) {
                    // 如果已有排序参数，使用&连接页码参数，否则使用?
                    fullUrl += (sortParam ? '&' : '?') + "page=" + page;
                }

                console.log("最终请求URL: " + fullUrl);

                // 如果不是第1页，需要重新请求
                var responsePromise;
                if (page > 1) {
                    responsePromise = Widget.http.get(fullUrl, {
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                            "Referer": "https://cn.pornhub.com/"
                        }
                    });
                } else {
                    responsePromise = Promise.resolve(firstPageResponse);
                }

                return responsePromise;
            }).then(function (response) {
                if (!response || !response.data) {
                    console.log("错误: 获取页面失败");
                    reject(new Error("获取收藏列表页面失败"));
                    return;
                }

                // 解析HTML
                var $ = Widget.html.load(response.data);

                // 提取视频列表
                var videos = [];
                var processedViewkeys = {}; // 用于去重

                // 尝试多种选择器找到视频项
                var videoItems = $("#videoFavoritesListSection .pcVideoListItem");
                if (!videoItems.length) {
                    videoItems = $("li.pcVideoListItem[id^=\"vfavouriteVideo\"]");
                }
                if (!videoItems.length) {
                    videoItems = $("li.pcVideoListItem, div.videoblock, div.videoBox");
                }

                console.log("找到 " + videoItems.length + " 个视频项");

                // 如果找不到任何视频项
                if (videoItems.length === 0) {
                    var errorMessage = "未找到任何收藏视频项。";
                    if (response.data.includes("登录") || response.data.includes("Login") ||
                        response.data.includes("sign in") || response.data.includes("注册")) {
                        errorMessage += " 这通常需要登录才能查看收藏列表。";
                    } else {
                        errorMessage += " 请确认用户名是否正确，或页面结构是否已变化。";
                    }
                    reject(new Error(errorMessage));
                    return;
                }

                // 处理每个视频项
                videoItems.each(function (index, element) {
                    try {
                        // 提取viewkey
                        var viewkey = extractViewkey($, element);
                        if (!viewkey) {
                            return; // 跳过无效项
                        }

                        // 检查是否已处理过该viewkey，避免重复添加
                        if (processedViewkeys[viewkey]) {
                            return;
                        }

                        // 提取视频信息
                        var videoInfo = extractVideoInfo($, element, viewkey);

                        // 添加到结果数组
                        videos.push(videoInfo);

                        // 添加到已处理集合
                        processedViewkeys[viewkey] = true;

                    } catch (error) {
                        console.log("处理视频项时出错: " + error.message);
                    }
                });

                console.log("成功提取 " + videos.length + " 个收藏视频");

                resolve(videos);
            }).catch(function (error) {
                console.log("获取收藏列表失败: " + error.message);
                reject(error);
            });
        } catch (error) {
            console.log("获取收藏列表失败: " + error.message);
            reject(error);
        }
    });
}

// 获取用户上传的视频
function getUserUploads(params) {
    return new Promise(function (resolve, reject) {
        try {
            console.log("开始获取艺人上传视频: " + JSON.stringify(params));

            // 参数验证
            if (!params.username) {
                console.log("错误: 未提供艺人名称");
                reject(new Error("请提供艺人名称"));
                return;
            }

            // 构建基础URL - 固定使用model格式
            var baseUrl = "https://cn.pornhub.com/model/" + params.username + "/videos";

            // 添加排序参数
            var sortParam = getSortParam(params.sort_by);
            if (sortParam) {
                baseUrl += "?" + sortParam;
            }

            console.log("基础URL: " + baseUrl);

            // 首次请求（用于检测分页）
            Widget.http.get(baseUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                    "Referer": "https://cn.pornhub.com/"
                }
            }).then(function (firstPageResponse) {
                // 检查响应
                if (!firstPageResponse || !firstPageResponse.data) {
                    console.log("错误: 获取艺人上传视频失败，无响应或响应无数据");
                    reject(new Error("获取艺人上传视频失败，请检查网络连接或艺人名称是否正确"));
                    return;
                }

                // 检查是否有地区限制
                if (firstPageResponse.data.includes("As you may know, your elected officials") ||
                    firstPageResponse.data.includes("Trust and Safety measures")) {
                    console.log("错误: 检测到地区限制");
                    reject(new Error("无法访问Pornhub，可能存在地区限制"));
                    return;
                }

                // 检测分页信息
                var pagination = detectPagination(firstPageResponse.data, params.page);
                var page = pagination.page;

                // 构建最终URL
                var fullUrl = baseUrl;
                if (page > 1) {
                    // 如果已有排序参数，使用&连接页码参数，否则使用?
                    fullUrl += (sortParam ? '&' : '?') + "page=" + page;
                }

                console.log("最终请求URL: " + fullUrl);

                // 如果不是第1页，需要重新请求
                var responsePromise;
                if (page > 1) {
                    responsePromise = Widget.http.get(fullUrl, {
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                            "Referer": "https://cn.pornhub.com/"
                        }
                    });
                } else {
                    responsePromise = Promise.resolve(firstPageResponse);
                }

                return responsePromise;
            }).then(function (response) {
                if (!response || !response.data) {
                    console.log("错误: 获取页面失败");
                    reject(new Error("获取艺人上传视频页面失败"));
                    return;
                }

                // 解析HTML
                var $ = Widget.html.load(response.data);

                // 确认页面标题包含用户名
                var pageTitle = $("title").text();
                if (!pageTitle.includes(params.username)) {
                    console.log("警告：页面标题 \"" + pageTitle + "\" 可能不包含艺人名称 \"" + params.username + "\"");
                }
                var videos = [];
                var processedViewkeys = {};
                var allVideoItems = $(".videoblock, .videoBox, .pcVideoListItem");
                var videoItems = allVideoItems.filter(function () {
                    return !$(this).closest('#headerMenuContainer').length;
                });
                console.log("找到 " + videoItems.length + " 个视频项（排除headerMenuContainer后）");
                if (!videoItems.length) {
                    allVideoItems = $("[data-video-vkey], [data-id], a[href*='viewkey=']").closest("li, div.videoblock, div.videoBox");
                    videoItems = allVideoItems.filter(function () {
                        return !$(this).closest('#headerMenuContainer').length;
                    });
                    console.log("使用备选选择器找到 " + videoItems.length + " 个视频项");
                }
                if (!videoItems.length) {
                    console.log("未找到任何视频项。可能是页面结构已变化或该艺人未上传视频。");
                    resolve([]);
                    return;
                }
                videoItems.each(function (index, element) {
                    try {
                        var viewkey = extractViewkey($, element);
                        if (!viewkey) {
                            return;
                        }
                        if (processedViewkeys[viewkey]) {
                            return;
                        }
                        var videoInfo = extractVideoInfo($, element, viewkey);
                        videos.push(videoInfo);
                        processedViewkeys[viewkey] = true;

                    } catch (error) {
                        console.log("处理视频项时出错: " + error.message);
                    }
                });

                console.log("成功提取 " + videos.length + " 个艺人上传视频");

                resolve(videos);
            }).catch(function (error) {
                console.log("获取艺人上传视频失败: " + error.message);
                reject(error);
            });
        } catch (error) {
            console.log("获取艺人上传视频失败: " + error.message);
            reject(error);
        }
    });
}

function getHotVideos(params) {
    return new Promise(function (resolve, reject) {
        try {
            console.log("开始获取热门视频: " + JSON.stringify(params));
            // 参数验证
            if (!params.cc) {
                console.log("错误: 未提供国家代码");
                reject(new Error("请提供国家代码"));
                return;
            }

            // 构建基础URL
            var baseUrl = "https://cn.pornhub.com/video?o=ht&cc=" + params.cc + "&page=" + params.page;

            console.log("基础URL: " + baseUrl);

            // 请求热门视频页面
            Widget.http.get(baseUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                    "Referer": "https://cn.pornhub.com/"
                }
            }).then(function (response) {
                if (!response || !response.data) {
                    console.log("错误: 获取热门视频失败，无响应或响应无数据");
                    reject(new Error("获取热门视频失败"));
                    return;
                }

                // 假设响应是字典类型，包含一个`videos`字段
                var data = response.data;
                var videos = data.videos || [];  // 获取视频数组

                if (videos.length === 0) {
                    reject(new Error("未找到任何热门视频项"));
                    return;
                }

                // 处理每个视频项
                var processedViewkeys = {}; // 用于去重
                var videoItems = [];

                videos.forEach(function (item) {
                    try {
                        var viewkey = item.viewkey;
                        if (!viewkey || processedViewkeys[viewkey]) {
                            return; // 跳过无效项或已处理的项
                        }

                        // 提取视频信息
                        var videoInfo = {
                            id: viewkey,
                            title: item.title,
                            thumbnailUrl: item.thumbnailUrl,
                            previewUrl: item.previewUrl,
                            link: "https://cn.pornhub.com/view_video.php?viewkey=" + viewkey
                        };

                        // 添加到视频数组
                        videoItems.push(videoInfo);

                        // 标记为已处理
                        processedViewkeys[viewkey] = true;

                    } catch (error) {
                        console.log("处理视频项时出错: " + error.message);
                    }
                });

                console.log("成功提取 " + videoItems.length + " 个热门视频");

                resolve(videoItems);
            }).catch(function (error) {
                console.log("获取热门视频失败: " + error.message);
                reject(error);
            });
        } catch (error) {
            console.log("获取热门视频失败: " + error.message);
            reject(error);
        }
    });
}




// 加载视频详情函数
async function loadDetail(link) {
    try {
        console.log(`开始加载视频详情: ${link}`);

        // 1. 提取 viewkey
        const viewkeyMatch = link.match(/viewkey=([^&]+)/);
        if (!viewkeyMatch || !viewkeyMatch[1]) {
            console.log(`错误: 无效的视频链接 ${link}`);
            throw new Error("无效的视频链接");
        }
        const viewkey = viewkeyMatch[1];

        // 2. 构建详情页链接并获取HTML
        const fullVideoUrl = `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;
        const response = await Widget.http.get(fullVideoUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });
        const htmlContent = response.data;
        const $ = Widget.html.load(htmlContent);

        // 3. 获取主视频m3u8播放链接
        const m3u8Data = await getVideoM3u8Link(viewkey);
        if (!m3u8Data || !m3u8Data.videoUrl) {
            console.log(`错误: 无法获取视频播放链接`);
            throw new Error("无法获取视频播放链接");
        }

        // 4. 推荐视频区块采集，限制最多10条
        const recommendedVideos = [];
        const recommendedItems = $(".videos.underplayer-thumbs.fixedSizeThumbsVideosListing li[data-video-vkey]");
        recommendedItems.slice(0, 10).each(function (i, element) {
            const $element = $(element);
            const vkey = extractViewkey($, element);
            if (!vkey) return;
            // 极简字段采集
            const title = $element.find('.title').text().trim() || $element.find('a[title]').attr('title') || '';
            const img = $element.find('img');
            const coverUrl = img.attr('src') || img.attr('data-thumb') || img.attr('data-src') || '';
            const previewUrl = img.attr('data-mediabook') || img.attr('data-preview') || img.attr('data-webm') || '';
            const durationText = $element.find('.duration, .videoDuration').text().trim();
            recommendedVideos.push({
                id: vkey,
                type: "link",
                title: title,
                coverUrl: coverUrl,
                previewUrl: previewUrl,
                durationText: durationText,
                link: `https://cn.pornhub.com/view_video.php?viewkey=${vkey}`
            });
        });
        console.log("推荐区块采集数量:", recommendedVideos.length);

        // 5. 返回 ForwardWidget 规范详情对象
        const result = {
            id: viewkey,
            type: "detail",
            videoUrl: m3u8Data.videoUrl,
            customHeaders: {
                "Referer": fullVideoUrl,
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            },
            quality: m3u8Data.quality,
            title: "视频播放",
            duration: 0,
            formats: m3u8Data.formats,
            childItems: recommendedVideos
        };

        console.log(`视频详情加载成功: ${JSON.stringify({ id: result.id, quality: result.quality, recommendCount: recommendedVideos.length })}`);
        return result;
    } catch (error) {
        console.log(`loadDetail 执行失败: ${error.message}`);
        throw error;
    }
}


module.exports = {
    metadata: WidgetMetadata,
    getFavorites: getFavorites,
    getUserUploads: getUserUploads,
    getHotVideos: getHotVideos,
    loadDetail: loadDetail
};
