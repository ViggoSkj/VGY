<?php

function envParser($text) {
    $rows = explode("\n", $text);
    $data = [];

    foreach ($rows as $row) {
        $var = explode("=", $row);
        if ($var[0] == "") continue;
        $var[1] = trim($var[1]);
        $var[1] = substr($var[1], 1, strlen($var[1])-2);
        $data[$var[0]] = $var[1];
    }

    return $data;
}

function envValue($name) {
    $envFile = fopen("../../.env", "r") or die("could not open file");
    $envContent = fread($envFile, filesize("../../.env"));
    fclose($envFile);
    $envData = envParser($envContent);
    if (isset($envData[$name])) {
        return $envData[$name];
    } else {
        return "";
    }
}

