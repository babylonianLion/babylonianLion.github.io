<?php
    if(isset($_POST['submit'])) 
    {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $formcontent="From: $name \n Message: $message";
        $recipient = "mbamiluka@gmail.com";
        $subject = "Contact Form";
        $mailheader = "From: $email \r\n";
        mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
        echo "Thank You " . $name . ". I'll be in touch within 12 hours";
    }
    
?>