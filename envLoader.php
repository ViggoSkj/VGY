<?php

$envFile = fopen(".env", "r") or die("could not open file");
$envContent = fread($envFile, filesize(".env"));
fclose($envFile);

function envParser($text) {
    $rows = explode("\n", $text);
    print_r($rows);
}

envParser($envContent);