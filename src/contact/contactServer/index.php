<?php
// The message
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


// $msg = $_POST['fields.phoneNumber'];
$subject = $_POST;



// Send
// mail('piotr.sitarek.05@gmail.com', $subject, $message);

mail('piotr.sitarek@netia-zamowienia.pl', $subject, "Dzwoń");
?>