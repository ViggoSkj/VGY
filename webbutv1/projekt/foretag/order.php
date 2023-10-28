<?php
include "email.php";

$json = json_decode(file_get_contents("php://input"), true);
$name = $json["name"];
$lastname = $json["lastname"];
$email = $json["email"];
$postTown = $json["postTown"];
$postnumber = $json["postnumber"];
$address = $json["address"];
$cart = $json["cart"];

// checks if all values are provided
if (
    empty($name) || empty($lastname) || empty($email) ||
    empty($postTown) || empty($postnumber)|| empty($address)
) {
    echo "not all fields provided";
    http_response_code(400);
    exit();
}

// Prevents XSS
forEach([ $name, $lastname, $email, $postTown, $postnumber, $address ] as $value) {
    for ($i = 0; $i < strlen($value); $i++) {
        if (strpos("abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ1234567890 -_,.@", $value[$i]) === false) {
            echo strpos("abcdefghijklmnopqrstuvwxyzåäöABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ1234567890 -_,.@", $value[$i]).",.,.";
            echo $value."-".$i."   ";
            echo "invalid values";
            http_response_code(400);
            exit();
        }
    }
}   

sendEmail("viggosg@varmdogymnasium.se", "product bästelning", 
    "<p>".json_encode(file_get_contents("php://input"))."</p>"
);