<?php
include_once("DbConnector.php");
function countTask(){
    $conn = DbConnector();
    $sql1 = "SELECT COUNT(id) as total FROM todo_list";
    $result1 = mysqli_query($conn, $sql1);
    $row1 = mysqli_fetch_assoc($result1);
    $totalAll = $row1['total'];
    return $totalAll;
}

function getListTask($currentPage){
    
}