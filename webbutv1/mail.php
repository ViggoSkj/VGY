<?php
include("envLoader.php");

function sendEmail($to, $subject, $html) {
    $apiKey = envValue("EMAIL_API_SECRET");
    $url = "https://api.viggoskj.com";
    $content = json_encode(
        [
            "api_secret" => $apiKey,
            "to" => $to,
            "html" => $html,
            "subject" => $subject,
        ]
    );
    
    
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_2TLS);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
            array("Content-type: application/json"));
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    
    $json_response = curl_exec($curl);
    
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    
    if ( $status != 201 && false) {
        die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
    }
    
    
    curl_close($curl);
}