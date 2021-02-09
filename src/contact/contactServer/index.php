<?php
// The message
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


// $msg = $_POST['fields.phoneNumber'];
$subject = $_POST;


mail('piotr.sitarek.05@gmail.com', $subject, "Somebody`s watching You!");
?>