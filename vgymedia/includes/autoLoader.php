<?php
spl_autoload_register("autoLoader");

function autoLoader($className) {
    $classPath = classPath($className);
    $interfacePath = interfacePath($className);

    if (file_exists($classPath)) {
        include_once $classPath;
    } else if (file_exists($interfacePath)) {
        include_once $interfacePath;
    } else {
        return false;
    }
}


function classPath($name) {
    $url = $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
    $path = "classes/";
    $extension = ".class.php";

    if (strpos($url, "includes") !== false  || strpos($url, "classes") !== false || strpos($url, "interfaces") !== false) {
        $path = "../classes/";
    }
 
    $fullPath = $path.$name.$extension;

    return $fullPath;
}

function interfacePath($name) {
    $url = $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"];
    $path = "interfaces/";
    $extension = ".interface.php";

    if (strpos($url, "includes") !== false  || strpos($url, "classes") !== false || strpos($url, "interfaces") !== false) {
        $path = "../classes/";
    }
    
    
 
    $fullPath = $path.$name.$extension;

    return $fullPath;
}