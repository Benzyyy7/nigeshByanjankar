<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Your email address where you want to receive the submissions
  $to = "your_email@example.com";

  // Email subject
  $subject = "New Form Submission";

  // Email message
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";

  // Send email
  mail($to, $subject, $body);

  // You can redirect the user to a thank you page or display a success message
  header("Location: thank_you.html");
} else {
  // Handle invalid requests
  echo "Invalid request";
}
?>
