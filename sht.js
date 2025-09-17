let body = $response.body;

// 删除广告块：class="n5_tbys cl"
body = body.replace(/<div class="n5_tbys cl">[\s\S]*?<\/div>/g, "");

// 删除广告文字列表：class="show-text cl"
body = body.replace(/<div class="show-text cl">[\s\S]*?<\/div>/g, "");

// 删除广告轮播：class="n5_jujiao"
body = body.replace(/<div class="n5_jujiao">[\s\S]*?<\/div>/g, "");

// 删除隐藏的冗余 h10 div
body = body.replace(/<div class="h10"[^>]*><\/div>/g, "");

$done({ body });