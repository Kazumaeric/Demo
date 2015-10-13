function fixHeader(){
  var _header = $('.d-header');
  var _poster = $('#main-poster01');
  var _contents = $('.contents');


  $(window).on('scroll', function(e){
    var _top = $(this).scrollTop();
    var pw = _poster.width();
    var ph = _poster.height();

    if(ph < _top){
      _header.addClass('fixed');
      _contents.css({
        "margin-top": (_header.height())
      });
    }else{
      _header.removeClass('fixed');
      _contents.css({
        "margin-top": 0
      });
    }
  });

  // $(window).on('resize', function(e){
  //   pw = _poster.width();
  //   ph = _poster.height();
  // });
}


function archiveList(){
  var max = $('.archive-list li').size();
  $('.archive-list').width(max * 237);
}


function topMovie(){
  if($.cookie('top_movie')){
  }else{
    $('.yt-trigger').colorbox({
      open: true
    });

    var date = new Date();
    date.setTime(date.getTime() + (60*60*1000));
    $.cookie('top_movie', 1,
    {
      expires: date
    });
  }
}


$(function(){
  fixHeader();
  archiveList();
  topMovie();

  var scl = 0;
  $('.archive-list-wrap').mousewheel(function(e, mov) {
    $(this).scrollLeft($(this).scrollLeft() - mov * 50);

    if(scl == $(this).scrollLeft()){
    }else{
      scl = $(this).scrollLeft();
      return false;
    }
  });


});