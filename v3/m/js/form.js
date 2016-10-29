$(document).ready(function(){
			
						   
						   $('#contactForm #submit').click(function(){$('#contactForm #formProgress').hide();$('#contactForm #formProgress').html('Sending&hellip;');$('#contactForm #formProgress').fadeIn();$('#contactForm .formError').html('');$('#contactForm .formError').hide();var isFocus=0;var isError=0;var name=$('#contactForm #name').val();var email=$('#contactForm #email').val();var subject=$('#contactForm #subject').val();var message=$('#contactForm #message').val();if(name==''){$('#contactForm #errorName').show().html('This is a required field.');$('#contactForm #name').focus();isFocus=1;isError=1;}
if(email==''){$('#contactForm #errorEmail').show().html('This is a required field.');if(isFocus==0){$('#contactForm #email').focus();isFocus=1;}
isError=1;}else{var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(reg.test(email)==false){$('#contactForm #errorEmail').show().html('Invalid email address.');if(isFocus==0){$('#contactForm #email').focus();isFocus=1;}
isError=1;}}
if(message==''){$('#contactForm #errorMessage').show().html('This is a required field.');if(isFocus==0){$('#contactForm #message').focus();isFocus=1;}
isError=1;}
if(isError==1){$('#contactForm #formProgress').html('');$('#contactForm #formProgress').hide();return false;}
$.ajaxSetup({cache:false});var dataString='name='+name+'&email='+email+'&subject='+subject+'&message='+message;$.ajax({type:"POST",url:"php/submit-form-ajax.php",data:dataString,success:function(msg){if(msg=='Mail sent'){$('#contactForm #formProgress').html('Message sent.').delay(2000).fadeOut(3000);$('#contactForm #subject').val('');$('#contactForm #message').val('');}else{$('#contactForm #formProgress').html('');alert('There was an error sending your email. Please try again.');}},error:function(ob,errStr){$('#contactForm #formProgress').html('');alert('There was an error sending your email. Please try again.');}});return false;});});