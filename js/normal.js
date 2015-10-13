/*

common.js

*/

function globalMenu(){
  var _trigger = $('.header-btn-menu a');
  var _box = $('.navi');

  _trigger.on('click', function(e){
    e.preventDefault();
    _box.slideToggle(300);
  });
}

function setAnchor(){
  $("a.page-link[href^=#]").click(function(e){
    $("html,body").stop(true,true);

    var topPos = $(window).scrollTop();
    var Hash = $(this.hash);
    var HashOffset = $(Hash).offset().top;

    var speed = Math.abs(($(Hash).offset().top - topPos));

    $("html,body").stop(true,true).animate({
      scrollTop: HashOffset
    }, 300);
    e.preventDefault();
  });
}

function scrollToById(id,s){
  var i = "#"+id;
  var o = $(i).offset().top,
    s = s ? s : Math.abs(o - $(window).scrollTop());

  $("html, body").stop(true,true).animate({
    scrollTop: o
  }, s);
}

function togglePagetop(){
  $(window).on('scroll', function(){
    var _top = $(this).scrollTop();

    if(300 < _top){
      $('.footer-page_top').fadeIn();
    }else{
      $('.footer-page_top').fadeOut();
    }
  }).trigger('scroll');
}

$(function(){
  globalMenu();
  setAnchor();
  togglePagetop();
});
