let body = $response.body;

// 删除顶部广告 logo 区块
body = body.replace(/<div class="n5_tbys cl">[\s\S]*?<\/div>/g, "");

// 删除广告文字列表
body = body.replace(/<div class="show-text cl">[\s\S]*?<\/div>/g, "");

// 删除广告轮播
body = body.replace(/<div class="n5_jujiao">[\s\S]*?<\/div>/g, "");

$done({ body });