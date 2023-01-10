<?php
function DbConnector(){
    $servername = "localhost:3308";
    $username = "lcms_admin";
    $password = "Abc123456@#";
    $database = "vnpt_tvs";

    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn){
        echo ("Kết nối ko thành công!");
        exit;
    }
    $conn->query("SET NAMES 'utf8'"); 
    $conn->query("SET CHARACTER SET utf8");

    return $conn;
}