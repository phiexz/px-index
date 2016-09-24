<?php
  require_once("../config.php");
  
  if (isset($_POST['reportName'])) {
    $name = strip_tags($_POST['reportName']);
    $email = strip_tags($_POST['reportEmail']);
    $type = $_POST['reportType'];
    $subject = strip_tags($_POST['reportSubject']);
    $message = strip_tags($_POST['reportMessage']);

    $to1      = ReportEmail;
    $subject1 = headerMessage.' - '.$subject;
    $message1 = 'From: '.$name.'
Email: '.$email.'
Type: '.$type.'
Message:
'.$message;

    $to2      = $email;
    $subject2 = '<DO NOT REPLY> :: storage.phiexz.com';
    $message2 = 'Hello '.$name.',
you have sent a '.$type.' to http://storage.phiexz.com

Subject : '.$subject.'
'.$message.'


----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

Thank you for contact us. i\'ll respon your '.$type.' as soon as possible

Regards,
Andika Edo.

----------------------------------------------------------------------------------------------------------------
Please do not reply to this email.
----------------------------------------------------------------------------------------------------------------
http://storage.phiexz.com
';


    //generate email and send!
    mail($to1,$subject1,$message1);
    mail($to2,$subject2,$message2);
  }
?>