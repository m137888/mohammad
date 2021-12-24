<?php

error_reporting(0);
ini_set('display_errors', 0);

$server = "localhost";
$username = "root";
$password = "";
$dbname="takhalof";

$connect = mysqli_connect($server,$username,$password,$dbname) or die('خطا در اتصال به پايگاه داده');
