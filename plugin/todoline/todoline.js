
/**
    首页文章标题, 禁止点击跳转
*/
function disablePostTitleLink(){
  $(".post-title a").attr("href", "javascript:;");
}


disablePostTitleLink();