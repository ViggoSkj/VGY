<?php
declare(strict_types = 1);
include "include/autoloader.inc.php";

if (!isset($_SESSION)) {
    session_start();
}