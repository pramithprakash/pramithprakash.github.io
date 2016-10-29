<?php 
session_start();
$errors = '';
	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || empty($_POST['letters_code'])) 							    {
		die('Error: Missing variables');

	}	print "ppp";
	echo $_SESSION['letters_code'];
	exit;
	if(empty($_SESSION['letters_code'] ) ||
	  strcasecmp($_SESSION['letters_code'], $_POST['letters_code']) != 0)
	{
	//Note: the captcha code is compared case insensitively.
	//if you want case sensitive match, update the check above to
	// strcmp()

		$errors .= "\n The captcha code does not match!";
	}
	
$to  = 'pramithprakash@gmail.com';


			// subject
				$subject = 'New Message -'.$_REQUEST['name']; 
			// message
			//$image = "http://www.pramithprakash.com/images/logo.jpg";
			$message = '<html><head><body style="background-color:#eeeeee; margin:10px;">
<table width="100%" border="0" cellpadding="0">
  <tr>
    <td align="center" valign="top" style="background-color:#fff; margin:0px;"><table width="572" border="0" cellspacing="0" cellpadding="0" style="font-size:12px; font-family: Arial, Helvetica, sans-serif; line-height:18px; color:#444444; ">
      <td align="center" valign="top">
        	<a href="http://www.pramithprakash.com/" target="_blank"><img src="http://www.pramithprakash.com/images/logo.png" alt="Logo"  border="0" style="padding:14px 0;"  /></a>
            </td>
      </tr>
      <tr>
        <td align="left" valign="top" style="background-color:#ffffff; padding:20px; border-right:0 solid #d6d6d6; border-bottom:0 solid #d6d6d6;"><p style="color:#000000; font-size:16px;font-family: Arial, Helvetica, sans-serif;"><strong>You have received an Message from '.$_POST['name'].'</strong></p>
          <table width="100%" border="0" cellspacing="2" cellpadding="4" style="font-size:12px;font-family: Arial, Helvetica, sans-serif;color:#333333">
            <tr>
              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Name</td>
              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['name'].'</strong></td>
              </tr>
			  <tr>
               <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Email</td>
              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['email'].'</strong></td>
            </tr>
			<tr>
               <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;">Message</td>
              <td align="left" valign="middle" style="border-bottom:1px solid #e2dfd9;"><strong>'.$_POST['message'].'</strong></td>
            </tr>
            </table>
          <p style="color:#333333;"> Thank you<br />
            <span style="color:#333333;"><strong>info@pramithprakash.com</strong></span><br />
          </p></td>
      </tr>
      <tr>
        <td align="left" valign="top" style=" text-align:center; color:#ffffff; background:#000000;font-size:11px; padding:15px 0px;">&copy; 2013 pramithprakash. All Rights Reserved.</td>
      </tr>
    </table></td>
  </tr>
</table>
</body></head>	</html>'

				;


			 $headers .= 'From: info@pramithprakash.com' . "\r\n";
			 $headers .= "MIME-Version: 1.0\r\n";
        	 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			 
			 
if(empty($errors))
	{ 
			 
			 
            if(mail($to, $subject, $message, $headers)){
			

			//print_r($message);exit;

			 $headers .= 'From: Admin pramithprakash <info@pramithprakash.com>' . "\r\n";

			 $headers .= "MIME-Version: 1.0\r\n";
			 
        	 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		 

	die('Mail sent');
} else {
	die('Error: Mail failed');
}
if(mail($to, $subject, $message, $headers))
{
	echo "mailsend"; exit;	
}
			
}
else{
echo $_SESSION['letters_code']; exit;	
}			
		
			
?>
