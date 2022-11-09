
/**
    首页文章标题, 禁止点击跳转
*/
function disablePostTitleLink(){
  $(".post-title a").attr("href", "javascript:;");
}

function disablePostConverLink(){
  $("#post .post-cover").attr("href", "javascript:;");
  $("#post .post-cover").attr("target", "_self");
}


disablePostTitleLink();
disablePostConverLink();