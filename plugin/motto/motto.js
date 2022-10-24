/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
/*mingyan.push("{'index':913,'content':'有人说：真正的爱情，背后没有秘密。说这话的人，既不明白爱情，也不明白秘密。</br> - </br>《北京乐与路》'}");*/
mingyan.push("{'index':1212,'content':'Calm down yourself, Keep productive </br> - </br> <a href=\"/20221024/download-page/\" style=\"\">Download</a>'}");
mingyan.push("{'index':1212,'content':'Calm down yourself, Keep productive </br> - </br> <a href=\"/20221024/download-page/\" style=\"\">Download</a>'}");
mingyan.push("{'index':1212,'content':'Calm down yourself, Keep productive </br> - </br> <a href=\"/20221024/download-page/\" style=\"\">Download</a>'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  // return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
  return "<a href='#' target='_blank'></a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}