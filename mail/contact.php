<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$myemail = "info1@mydivinecare.com";
$to = $myemail; // Change this email to your //
$subject = "$m_subject:  $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\nName: $name\nEmail: $email\nSubject: $m_subject\n\nMessage: $message";
$headers = "From: $myemail\r\n";
$headers .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $headers))
  http_response_code(500);
?>
