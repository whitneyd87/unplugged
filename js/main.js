function hrExpand() {
   var windowWidth = $(window).width();
   $('hr').width(windowWidth).css('margin-left', function(){
     return '-' + ($(this).offset().left) + 'px';
   });
}