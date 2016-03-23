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
$('.open-confirm').on('click',function(){
  $('.modal-popup').hide();
  $('body').addClass('open');
  $('#recharge-confirm').show();
});
$('#recharge-confirm').find('button').on('click',function(){
  $('.modal-popup').hide();
  $('body').addClass('open');
  $('#recharge-success').show();
});
$('#recharge-success').find('button').on('click',function(){
  $('.modal-popup').hide();
  $('body').addClass('open');
  $('#recharge-failed').show();
});
$('#recharge-failed').find('button').on('click',function(){
  $('body').removeClass('open');
  $('.modal-popup').hide();
});
$('.close-modal').on('click',function(){
  $('body').removeClass('open');
  $('.modal-popup').hide();
});
$('.style-select').find('select').on('change',function(){
  $(this).parent('.style-select').find('input').val($(this).val());
});
