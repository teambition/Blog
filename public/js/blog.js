$(function(){
//date flow
arts=$('#post>article');
var left=0,right=0;
for(var i=0;i<arts.length;i++){
  if(left<=right){
    arts[i].className='left';
    left+=arts[i].offsetHeight;
  }
  else{
    arts[i].className='right';
    right+=arts[i].offsetHeight;
  }
}
title=$('.brand');
logo=$('.navbar .teambition-font')
/*function navHeight(rate,h){
  var height=(100-h*rate)+'px';
  var bg=(-15-h*2/5*rate)+'px';
  var logoFontSize=(32-10*rate)+'px';
  var titleFontSize=(16-4*rate)+'px';
  bg='15px '+bg;
  title.css({
    'height':height,
    'font-size':titleFontSize,
    'line-height':height,
    'background-position':bg
  });
  logo.css({
    'font-size': logoFontSize
  })
}*/
function navControl(){
  var h=50;
  var top=$(window).scrollTop();
  if(top>h)title.addClass('small');
  else title.removeClass('small');
  //if(top>h)return navHeight(1,h);
  //if(top<0)return navHeight(0,h);
  //var rate = Math.sin(1.*top/h*Math.PI/2);
  //navHeight(rate,h);
}
//navHeight(0,58);
$(window).scroll(navControl);
});
