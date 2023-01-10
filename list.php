<?php 
error_reporting(-1);
ini_set('display_errors', 'On');

include_once(__DIR__."/helpers/PaginationHelper.php");
include_once(__DIR__."/helpers/DbConnector.php");
include_once(__DIR__."/helpers/TaskModel.php");

session_start();

$conn = DbConnector();

$totalAll = countTask();

if ($_SESSION['lim'] === null) {
    $_SESSION['lim'] = 2;
    $currentPage = 1;
} else {
    if (isset($_POST['submit'])) {
        if (!empty($_POST['limit'])) {    
            $_SESSION['lim'] = $_POST['limit'];
            $currentPage = 1;
            $_GET['page'] = 1;
        }
    } else {
        if (isset($_GET['page']) && !empty($_GET['page'])) {
            $currentPage = $_GET['page'];
        } else {
            $currentPage = 1;
        }
    }
}

if ($totalAll % $_SESSION['lim'] == 0) {
    $totalPage = $totalAll / $_SESSION['lim'];
} else {
    $totalPage = (int)($totalAll / $_SESSION['lim']) + 1;
}

if (isset($_POST['button'])) {
    if ($_POST['page'] <= $totalPage) {
        $link = 'list.php?page='.$_POST['page'];
        header('location:'.$link);
    }
}

$offset = ($currentPage - 1) * $_SESSION['lim'];
    
$sql = "SELECT * FROM todo_list ORDER BY id LIMIT {$_SESSION['lim']} OFFSET $offset";

$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $tasks[] = $row; 
}

$p2 = (!isset($_GET['page']) || $_GET['page'] >= $totalPage - 1 || $_GET['page'] <= 2 || $totalPage <= 6) ? 2 : (($_GET['page'] == 5 && $totalPage <= 7) ? 3 : $_GET['page'] - 1);
$p3 = (!isset($_GET['page']) || $_GET['page'] >= $totalPage - 1 || $_GET['page'] <= 3 || $totalPage <= 6) ? 3 : (($_GET['page'] == 5 && $totalPage <= 7) ? 4 : $_GET['page']);
$p4 = (!isset($_GET['page']) || $_GET['page'] >= $totalPage - 1 || $_GET['page'] < 4 || $totalPage <= 6) ? 4 : (($_GET['page'] == 5 && $totalPage <= 7) ? 5 : $_GET['page'] + 1);

$sql0 = "SELECT COUNT(id) as sum FROM todo_completed_list";
$result0 = mysqli_query($conn, $sql0);
$row0 = mysqli_fetch_assoc($result0);
$total = $row0['sum'];

$sql2 = "SELECT * FROM todo_completed_list ORDER BY id";

$result2 = mysqli_query($conn, $sql2);

while ($row2 = mysqli_fetch_assoc($result2)) {
    $tasksCompleted[] = $row2;
}

$style = "";

function showDetail(){
    $style = "display:block";  
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List</title>
    <link rel="stylesheet" href="style1.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manrope">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <nav class="navbar">
         <div class="logo">Minh's To-Do List</div>
    </nav>

    <h2 id="result"></h2>
    <div id="content">
        <span class="title" id="title">
            <span class="list">Danh sách</span>
            <div class="tabs">
                <a class="tab <?php echo ($_GET['tab'] == 1 || !isset($_GET['tab'])) ? 'mark-tab' : '' ?>" id="tab1" href="list.php?tab=1">Đang làm</a>
                <a class="tab <?php echo ($_GET['tab'] == 2) ? 'mark-tab' : '' ?>" id="tab2" href="list.php?tab=2">Đã hoàn thành</a>
            </div>
            <button class="btn" type="button" onclick="createBtn()">
                <strong>Tạo mới <i class="fa fa-plus"></i></strong>
            </button>
        </span>
        <div class="body <?php echo ($_GET['tab'] == 2) ? 'hide' : '' ?>" align="center" id="ds">
            <div class="mn" id="list">
                <?php 
                    foreach ($tasks as $task):
                ?>
                <span class="option1" id="task_<?php echo $task['id'] ?>">
                    <span onclick="showDetail('name_<?php echo $task['id'] ?>', 'time_<?php echo $task['id'] ?>', 'address_<?php echo $task['id'] ?>', 'task_<?php echo $task['id'] ?>', <?php echo $task['id'] ?>)" class="option">
                        <span id="name_<?php echo $task['id'] ?>"><?php echo $task['name'] ?></span>
                        <p id="time_<?php echo $task['id'] ?>"><?php echo $task['time'] ?></p>
                        <p id="address_<?php echo $task['id'] ?>"><?php echo $task['address'] ?></p>
                    </span>
                    <div class="dropup">
                        <button class="dropbtn"><strong>⋮</strong></button>
                        <div class="dropup-content"><a onclick="completeTask('name_<?php echo $task['id'] ?>', 'time_<?php echo $task['id'] ?>', 'address_<?php echo $task['id'] ?>', 'task_<?php echo $task['id'] ?>', <?php echo $task['id'] ?>)">Hoàn Thành</a><a onclick="removeTask(<?php echo $task['id'] ?>)">Xoá</a></div>
                    </div>
                </span>
                <?php 
                    endforeach;
                ?>
            </div>
            <div id="pag"> 
                
                <?php echo PaginationPrevious($totalPage, $_GET['page']); ?>

                <?php echo PaginationOne($totalPage); ?>
            
                <?php echo PaginationTwo($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationThree($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationFour($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationFive($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationSix($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationSeven($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationEight($totalPage, $_GET['page']); ?>
            
                <?php echo PaginationNine($totalPage, $_GET['page']); ?>
                
                <a>
                    Nhập số trang
                </a>

                <a>
                    <form action="" method="post">
                        <input type="text" name="page" id="page" size="5px">
                        <button type="submit" name="button" value="button">Button</button>
                    </form>
                </a>

                <a>
                    <form action="" method="post">
                        <select name="limit">
                            <option value="" disabled selected>Choose</option>
                            <option value=3>3</option>
                            <option value=5>5</option>
                            <option value=8>8</option>
                            <option value=10>10</option>
                        </select>
                        
                        <input type="submit" name="submit" value="Choose">
                    </form>
                </a>
                
            </div>
        </div>

        <div class="body <?php echo ($_GET['tab'] == 1 || !isset($_GET['tab'])) ? 'hide' : '' ?>" align="center" id="ds0">
            <div class="mn0" id="list0">
                <?php 
                    foreach ($tasksCompleted as $taskCompleted):
                ?>
                <span class="option1" id="task_<?php echo $taskCompleted['id'] ?>">
                    <span onclick="showDetail('name_<?php echo $taskCompleted['id'] ?>', 'time_<?php echo $taskCompleted['id'] ?>', 'address_<?php echo $taskCompleted['id'] ?>', 'task_<?php echo $taskCompleted['id'] ?>', <?php echo $taskCompleted['id'] ?>)" class="option">
                        <span id="name_<?php echo $taskCompleted['id'] ?>"><?php echo $taskCompleted['name'] ?></span>
                        <p id="time_<?php echo $taskCompleted['id'] ?>"><?php echo $taskCompleted['time'] ?></p>
                        <p id="address_<?php echo $taskCompleted['id'] ?>"><?php echo $taskCompleted['address'] ?></p>
                    </span>
                    <div class="dropup">
                        <button class="dropbtn"><strong>⋮</strong></button>
                        <div class="dropup-content"><a onclick="completeTask('name_<?php echo $taskCompleted['id'] ?>', 'time_<?php echo $taskCompleted['id'] ?>', 'address_<?php echo $taskCompleted['id'] ?>', 'task_<?php echo $taskCompleted['id'] ?>', <?php echo $taskCompleted['id'] ?>)">Hoàn Thành</a><a onclick="removeTask(<?php echo $taskCompleted['id'] ?>)">Xoá</a></div>
                    </div>
                </span>
                <?php 
                    endforeach;
                ?>
            </div>
        </div>

        <div class="notification" id="notification">
            <p id="txt"></p>
        </div>
    </div>

    <div id="detail" style="<?php echo $style ?>">
        <div>
            <table>
                <tr>
                    <td>
                        <span class="title1">
                            <span class="list1">Danh sách</span>
                            <div class="tabs">
                                <button class="tab" id="tab3" onclick="openTasks('ds1', 'ipage1', 3)">Đang làm</button>
                                <button class="tab" id="tab4" onclick="openTasks('ds2', 'pageid1', 4)">Đã hoàn thành</button>
                            </div>
                            <button class="btn" type="button" onclick="createBtn()">
                                <strong>Tạo mới <i class="fa fa-plus"></i></strong>
                            </button>
                        </span>
                        <form class="body" id="ds1">
                            <div id="showList">
                            
                            </div>
                            <div id="pag">
                                <a id="ipage0">&laquo;</a>
                                <a id="ipage1" onclick="showTasksSide(document.getElementById('ipage1').textContent, this.id)">1</a>
                                <a id="ipage2" onclick="showTasksSide(document.getElementById('ipage2').textContent, this.id)">2</a>
                                <a id="ipage3" onclick="showTasksSide(document.getElementById('ipage3').textContent, this.id)">3</a>
                                <a id="ipage4" onclick="showTasksSide(document.getElementById('ipage4').textContent, this.id)">4</a>
                                <a id="ipage5" onclick="showTasksSide(document.getElementById('ipage5').textContent, this.id)">5</a>
                                <a id="ipage6">&raquo;</a>
                            </div>
                        </form>
                        
                        <form class="body" id="ds2">
                            <div id="showList1">
                            
                            </div>
                            <div id="pag">
                                <a id="pageid0">&laquo;</a>
                                <a id="pageid1" onclick="showTasksCompletedSide(document.getElementById('pageid1').textContent, this.id)">1</a>
                                <a id="pageid2" onclick="showTasksCompletedSide(document.getElementById('pageid2').textContent, this.id)">2</a>
                                <a id="pageid3" onclick="showTasksCompletedSide(document.getElementById('pageid3').textContent, this.id)">3</a>
                                <a id="pageid4" onclick="showTasksCompletedSide(document.getElementById('pageid4').textContent, this.id)">4</a>
                                <a id="pageid5" onclick="showTasksCompletedSide(document.getElementById('pageid5').textContent, this.id)">5</a>
                                <a id="pageid6">&raquo;</a>
                            </div>
                        </form>
                    </td>
                    <td>
                        <div>
                            <form id="detail1">
                                <div class="detail1">
                                    <ul>
                                        <span class="close" onclick="close1()">&times;</span>
                                        <p>Chi tiết công việc</p>

                                        <span>Tên công việc:</span>
                                        <p id="name-detail">
                                            
                                        </p>

                                        <span>Thời gian:</span>
                                        <p id="time-detail">
                                                
                                        </p>

                                        <span>Địa điểm:</span>
                                        <p id="address-detail">
                                                
                                        </p>
                                        <div class="editbtn">
                                            <nobr>
                                                <button onclick="editBtn()" type="button">
                                                    <strong>Sửa</strong>
                                                </button>
                                                <button>
                                                    <strong>Đóng</strong>
                                                </button>
                                                <button onclick="removeTask()" type="button">
                                                    <strong>Xóa</strong>
                                                </button>
                                            </nobr>
                                        </div>    
                    
                                    </ul>
                                </div>
                            </form>

                            <form id="detail2">
                                <div class="detail2">
                                    <ul>
                                        <span onclick="close1()">&times;</span>
                                        <p>Chi tiết công việc</p>
                                        <li>
                                            Tên công việc : 
                                            <textarea id="name-edit" cols="37" rows="5">Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy</textarea>
                                        </li>
                                                
                                        <li>
                                            Thời gian : 
                                            <input type="text" class="input" id="time-edit" >
                                        </li>
                                        <li>
                                            Địa điểm :
                                            <input type="text" class="input" id="address-edit">
                                        </li>
                                        <li>
                                            <div class="editbtn">
                                                <nobr>
                                                    <button onclick="saveEdit()" type="button">
                                                        <strong>Lưu</strong>
                                                    </button>
                                                    <button>
                                                        <strong>Đóng</strong>
                                                    </button>
                                                </nobr>    
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </form>

                            <form id="detail3">
                                <div class="detail2">
                                    <ul>
                                        <span onclick="close1()">&times;</span>
                                        <p>Chi tiết công việc</p>
                                        <li>
                                            Tên công việc : 
                                            <textarea id="name-add" cols="37" rows="5"></textarea>
                                        </li>
                                                
                                        <li>
                                            Thời gian : 
                                            <input type="text" class="input" id="time-add">
                                        </li>
                                        <li>
                                            Địa điểm :
                                            <input type="text" class="input" id="address-add">
                                        </li>
                                        <li>
                                            <div class="editbtn">
                                                <nobr>
                                                    <button onclick="addBtn1()" type="button">
                                                        <strong>Thêm</strong>
                                                    </button>
                                                    <button>
                                                        <strong>Đóng</strong>
                                                    </button>
                                                </nobr>    
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </form>     
                        </div>  
                    </td>
                </tr>
            </table>       
        </div>
    </div>
</body>

</html>