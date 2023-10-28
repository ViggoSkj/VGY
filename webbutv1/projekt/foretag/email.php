<?php

function sendEmail($to, $subject, $html) {
    $url = "https://api.viggoskj.com";
    $content = json_encode(
        [
            "api_secret" => "4d78f4db-5b94-4287-9b6a-47c4e6686f81",
            "to" => $to,
            "html" => $html,
            "subject" => $subject,
            ]
        );
        
        
    echo "sending";
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_2TLS);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER,
            array("Content-type: application/json"));
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $content);
    
    $json_response = curl_exec($curl);
    print_r($json_response);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    if ( $status != 201) {
        die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
    }
    
    curl_close($curl);
}