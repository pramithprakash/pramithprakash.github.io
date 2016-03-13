<?php
// Check for empty fields
if(empty($_POST['companyname'])  		||
   empty($_POST['email']) 		||
   empty($_POST['job']) 		||
   empty($_POST['details'])	||
   empty($_POST['firstname'])   ||
   empty($_POST['lastname'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$companyname = $_POST['companyname'];
$email_address = $_POST['email'];
$job = $_POST['phone'];
$details = $_POST['details'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
	
// Create the email and send the message
$to = 'rfp@megatronresearch.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $firstname $lastname";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nCompany Name: $companyname\n\nEmail: $email_address\n\nJob title - Position: $job\n\nProject details:\n$details";
$headers = "From: rfp@megatronresearch.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>