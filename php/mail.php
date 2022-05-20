
<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "agdc101@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>

<html>
    <head>
        <link rel='stylesheet' href='../css/index.css'>
    </head>
    <body>
        <div class='phpDiv'>
            <p>Thank you! I'll get back to very shortly!</p>
            <a id='returnBtn' href="../index.html">Return To Home Page</a>
        </div>
    </body>
</html>