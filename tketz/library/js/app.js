function login(){
  $('header').addClass('expanded');
  $('.login-section').hide();
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

$('.logout').on('click',function(){
  $('.menu-offcanvas').removeClass('open');
  setTimeout(function(){
    $('body').removeClass('open');
    $('header').removeClass('expanded');
    $('.login-section').show();
  },500); 
});
