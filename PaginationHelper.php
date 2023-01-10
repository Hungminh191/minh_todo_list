<?php
function PaginationPrevious($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {

    return "<a href=list.php?page=".(($page != 2) ? (($page == 1) ? $page : $page - 1) : 1).">&laquo;</a>";
}

function PaginationOne($totalRecord, $page = 1) {
    
    $active = (!isset($page) || $page == 1) ? 'class=active' : '';

    return "<a ".$active." href='list.php'>1</a>";
}

function PaginationTwo($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
   
    $hide = ($page <= 3 || $page >= $totalRecord - 1 || $totalRecord <= 6) ? 'class=hide' : '';

    return "<a ".$hide.">...</a>";
}

function PaginationThree($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $p2 = (!isset($page) || $page >= $totalRecord - 1 || $page <= 2 || $totalRecord <= 6) ? 2 : (($page == 5 && $totalRecord <= 7) ? 3 : $page - 1);

    $active = ($page == $p2) ? 'class=active ' : '';

    $hide = ($totalRecord <= 3) ? 'hide' : '';

    return "<a ".$active.$hide." href=list.php?page=".$p2.">".$p2."</a>";
}

function PaginationFour($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $p3 = (!isset($page) || $page >= $totalRecord - 1 || $page <= 3 || $totalRecord <= 6) ? 3 : (($page == 5 && $totalRecord <= 7) ? 4 : $page);

    $active = ($page == $p3) ? 'class=active ' : '';

    $hide = ($totalRecord <= 4) ? 'hide' : '';

    return "<a ".$active.$hide." href=list.php?page=".$p3.">".$p3."</a>";
}

function PaginationFive($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $p4 = (!isset($page) || $page >= $totalRecord - 1 || $page < 4 || $totalRecord <= 6) ? 4 : (($page == 5 && $totalRecord <= 7) ? 5 : $page + 1);

    $active = ($page == $p4) ? 'class=active ' : '';

    $hide = (($page == $totalRecord - 2 && $totalRecord > 7) || $totalRecord <= 5) ? 'hide' : '';

    return "<a ".$active.$hide." href=list.php?page=".$p4.">".$p4."</a>";
}

function PaginationSix($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $hide = ($page == $totalRecord - 2 || $page == $totalRecord - 3 || $totalRecord <= 6) ? 'class=hide' : '';

    return "<a ".$hide.">...</a>";
}

function PaginationSeven($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $active = ($page == $totalRecord - 1) ? 'class=active ' : '';

    $hide = ($totalRecord <= 2) ? 'hide' : '';

    return "<a ".$active.$hide." href=list.php?page=".($totalRecord - 1).">".($totalRecord -1)."</a>";
}

function PaginationEight($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $active = ($page == $totalRecord) ? 'class=active' : '';

    return "<a ".$active." href=list.php?page=".$totalRecord.">".$totalRecord."</a>";
}

function PaginationNine($totalRecord, $page, $currentPage = 1, $baseUrl = "#") {
    $active = ((isset($page)) ? (($page == $totalRecord) ? $page : $page + 1 ) : 2);

    return "<a href=list.php?page=".$active.">&raquo;</a>";
}
?>