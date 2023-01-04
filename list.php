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

    <?php 
        $servername = "localhost:3308";
        $username = "lcms_admin";
        $password = "Abc123456@#";
        $database = "vnpt_tvs";

        $conn = mysqli_connect($servername, $username, $password, $database);
        if (!$conn){
            echo ("Kết nối ko thành công!");
        } else {
            echo ("Kết nối thành công");
        }

        $sql = "SELECT name FROM todo_list";

        $result = mysqli_query($conn, $sql);

        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row; 
        }

        foreach ($data as $value) {
            echo ($value['name']);
        }
    ?>

    <div id="content">
        <span class="title" id="title">
            <span class="list">Danh sách</span>
            <div class="tabs">
                <button class="tab" id="tab1" onclick="openTasks('ds', 'page1', 1)">Đang làm</button>
                <button class="tab" id="tab2" onclick="openTasks('ds0', 'idpage1', 2)">Đã hoàn thành</button>
            </div>
            <button class="btn" type="button" onclick="createBtn()">
                <strong>Tạo mới <i class="fa fa-plus"></i></strong>
            </button>
        </span>
        <form class="body" align="center" id="ds">
            <div class="mn" id="list">

            </div>

            <div id="pag">
                <a id="page0">&laquo;</a>
                <a id="page1" onclick="showTasks(document.getElementById('page1').textContent, this.id)">1</a>
                <a id="page2" onclick="showTasks(document.getElementById('page2').textContent, this.id)">2</a>
                <a id="page3" onclick="showTasks(document.getElementById('page3').textContent, this.id)">3</a>
                <a id="page4" onclick="showTasks(document.getElementById('page4').textContent, this.id)">4</a>
                <a id="page5" onclick="showTasks(document.getElementById('page5').textContent, this.id)">5</a>
                <a id="page6">&raquo;</a>
            </div>
        </form>

        <form class="body" align="center" id="ds0">
            <div class="mn0" id="list0">
                
            </div>

            <div id="pag">
                <a id="idpage0">&laquo;</a>
                <a id="idpage1" onclick="showTasksCompleted(document.getElementById('idpage1').textContent, this.id)">1</a>
                <a id="idpage2" onclick="showTasksCompleted(document.getElementById('idpage2').textContent, this.id)">2</a>
                <a id="idpage3" onclick="showTasksCompleted(document.getElementById('idpage3').textContent, this.id)">3</a>
                <a id="idpage4" onclick="showTasksCompleted(document.getElementById('idpage4').textContent, this.id)">4</a>
                <a id="idpage5" onclick="showTasksCompleted(document.getElementById('idpage5').textContent, this.id)">5</a>
                <a id="idpage6">&raquo;</a>
            </div>
        </form>

        <div class="notification" id="notification">
            <p id="txt"></p>
        </div>
    </div>

    <div id="detail">
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
<script src="main.js">
    const data = "<?php echo $x ?>";
    const result = document.getElementById("result");
    result.innerHTML = data;
</script>
</html>