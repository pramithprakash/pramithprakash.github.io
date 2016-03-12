function login(){
  $('header').addClass('expanded');
}
$('[role="menu-open"]').on('click',function(){
  $('body,.menu-offcanvas').addClass('open');
});
$('[role="menu-close"]').on('click',function(){
  $('.menu-offcanvas').removeClass('open');
  setTimeout(function(){
    $('body').removeClass('open');
  },500);  
});