var idname = null;
var idtime = null;
var idaddress = null;
var idtask = null;
var id = null;
var idpage = null;

var tasks = [
  {keyid: 0, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 1, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 2, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 3, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 4, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 5, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 7, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 8, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 9, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 4, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 5, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 7, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 8, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 9, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 7, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 8, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 9, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
];

var tasksCompleted = [
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 7, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 8, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 9, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
];

function showTasks(page, id_page){
  idpage = page;
  document.getElementById("list").innerHTML = "";

  for (var i = (page - 1) * 5; i < page * 5; i++) {
    str_name = "name";
    str_time = "time";
    str_address = "address";
    str_task = "task"

    str_name = str_name + i; 
    str_time = str_time + i; 
    str_address = str_address + i;
    str_task = str_task + i;

    istr_name = "iname";
    istr_time = "itime";
    istr_address = "iaddress";
    istr_task = "itask"

    istr_name = istr_name + i; 
    istr_time = istr_time + i; 
    istr_address = istr_address + i;
    istr_task = istr_task + i;

    if (tasks[i] != null) {
      var span2 = document.createElement('span');
      span2.id = str_name;

      var node2 = tasks[i]['name'];
      var title2 = document.createTextNode(node2);
      span2.appendChild(title2);

      var para1 = document.createElement('p');
      para1.id = str_time;
      
      var node1 = tasks[i]['time'];
      var title1 = document.createTextNode(node1);
      para1.appendChild(title1);

      var para3 = document.createElement('p');
      para3.id = str_address;

      var node3 = tasks[i]['address'];
      var title3 = document.createTextNode(node3);
      para3.appendChild(title3);

      var span1 = document.createElement('span');
      span1.appendChild(span2);
      span1.appendChild(para1);
      span1.appendChild(para3);
      span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
      span1.className = "option";

      var a = document.createElement('a');
      var linkText = document.createTextNode("Hoàn Thành");
      a.appendChild(linkText);
      a.href = "#";
      
      var a1 = document.createElement('a');
      var linkText1 = document.createTextNode("Xoá");
      a1.appendChild(linkText1);
      a1.setAttribute("onclick", "removeTask(" + i + ")");

      var div1 = document.createElement('div');
      div1.appendChild(a);
      div1.appendChild(a1);
      div1.className = "dropup-content";

      var btn = document.createElement('button');
      btn.innerHTML = "<strong>&vellip;</strong>";
      btn.className = "dropbtn";
      
      var div = document.createElement('div');
      div.appendChild(btn);
      div.appendChild(div1);
      div.className = "dropup";

      var span = document.createElement('span');
      span.appendChild(span1);
      span.appendChild(div);
      span.className = "option1";
      span.id = str_task;

      document.getElementById("list").appendChild(span);
    }
  }
  markPage(id_page);

  pageNumber();
}

function showDetail(name, time, address, task, num){
  idname = name;
  idtime = time;
  idaddress = address;
  idtask = task;
  id = num;

  var ds = document.getElementById("ds");
  var detail = document.getElementById("detail");

  var detail1 = document.getElementById("detail1");
  var detail2 = document.getElementById("detail2");
  var detail3 = document.getElementById("detail3");

  var dis_ds = window.getComputedStyle(ds).display;
  var dis_detail1 = window.getComputedStyle(detail1).display;
  
  if (dis_ds === "block") {
    ds.style.display = "none";
    detail.style.display = "block";

    detail1.style.display = "block";
    detail2.style.display = "none";
    detail3.style.display = "none";
  } else if (dis_detail1 === "none") {
    detail1.style.display = "block";
    detail2.style.display = "none";
    detail3.style.display = "none";
  }

  if (dis_detail1 === "none") {
    detail1.style.display = "block";
    detail2.style.display = "none";
    detail3.style.display = "none";
  } else {
    ds.style.display = "none";
    detail.style.display = "block";

    detail1.style.display = "block";
    detail2.style.display = "none";
    detail3.style.display = "none";
  }

  var id_name = document.getElementById(name);
  var text  = id_name.textContent || id_name.innerText;

  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").value = text;

  var id_time = document.getElementById(time);
  var textTime = id_time.textContent || id_time.innerText;

  document.getElementById("time-detail").innerHTML = textTime;
  document.getElementById("time-edit").value = textTime;


  var id_address = document.getElementById(address);
  var textAddress = id_address.textContent || id_address.innerText;

  document.getElementById("address-detail").innerHTML = textAddress;
  document.getElementById("address-edit").value = textAddress;

  var ipage = "ipage" + idpage;
  showTasksSide(idpage, ipage);
}


function showTasksSide(page, id_page){
  idpage = page;
  document.getElementById("showList").innerHTML = "";

  for (var i = (page - 1) * 5; i < page * 5; i++) {
    str_name = "name";
    str_time = "time";
    str_address = "address";
    str_task = "task"

    str_name = str_name + i; 
    str_time = str_time + i; 
    str_address = str_address + i;
    str_task = str_task + i;

    istr_name = "iname";
    istr_time = "itime";
    istr_address = "iaddress";
    istr_task = "itask"

    istr_name = istr_name + i; 
    istr_time = istr_time + i; 
    istr_address = istr_address + i;
    istr_task = istr_task + i;

    if (tasks[i] != null) {
      var span2 = document.createElement('span');
      span2.id = str_name;

      var node2 = tasks[i]['name'];
      var title2 = document.createTextNode(node2);
      span2.appendChild(title2);

      var para1 = document.createElement('p');
      para1.id = str_time;
      
      var node1 = tasks[i]['time'];
      var title1 = document.createTextNode(node1);
      para1.appendChild(title1);

      var para3 = document.createElement('p');
      para3.id = str_address;

      var node3 = tasks[i]['address'];
      var title3 = document.createTextNode(node3);
      para3.appendChild(title3);

      var span1 = document.createElement('span');
      span1.appendChild(span2);
      span1.appendChild(para1);
      span1.appendChild(para3);
      span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
      span1.className = "option";

      var a = document.createElement('a');
      var linkText = document.createTextNode("Hoàn Thành");
      a.appendChild(linkText);
      a.href = "#";
      
      var a1 = document.createElement('a');
      var linkText1 = document.createTextNode("Xoá");
      a1.appendChild(linkText1);
      a1.setAttribute("onclick", "removeTask(" + i + ")");

      var div1 = document.createElement('div');
      div1.appendChild(a);
      div1.appendChild(a1);
      div1.className = "dropup-content";

      var btn = document.createElement('button');
      btn.innerHTML = "<strong>&vellip;</strong>";
      btn.className = "dropbtn";
      
      var div = document.createElement('div');
      div.appendChild(btn);
      div.appendChild(div1);
      div.className = "dropup";

      var span = document.createElement('span');
      span.appendChild(span1);
      span.appendChild(div);
      span.className = "option1";
      span.id = str_task;

      document.getElementById("showList").appendChild(span);
    }

    markPage(id_page);

    pageNumber();
  }
}

function showTasksCompleted(page, id_page){
  idpage = page;
  document.getElementById("list0").innerHTML = "";

  for (var i = (page - 1) * 5; i < page * 5; i++) {
    str_name = "name";
    str_time = "time";
    str_address = "address";
    str_task = "task"

    str_name = str_name + i; 
    str_time = str_time + i; 
    str_address = str_address + i;
    str_task = str_task + i;

    istr_name = "iname";
    istr_time = "itime";
    istr_address = "iaddress";
    istr_task = "itask"

    istr_name = istr_name + i; 
    istr_time = istr_time + i; 
    istr_address = istr_address + i;
    istr_task = istr_task + i;

    if (tasksCompleted[i] != null) {
      var span2 = document.createElement('span');
      span2.id = str_name;

      var node2 = tasksCompleted[i]['name'];
      var title2 = document.createTextNode(node2);
      span2.appendChild(title2);

      var para1 = document.createElement('p');
      para1.id = str_time;
      
      var node1 = tasksCompleted[i]['time'];
      var title1 = document.createTextNode(node1);
      para1.appendChild(title1);

      var para3 = document.createElement('p');
      para3.id = str_address;

      var node3 = tasksCompleted[i]['address'];
      var title3 = document.createTextNode(node3);
      para3.appendChild(title3);

      var span1 = document.createElement('span');
      span1.appendChild(span2);
      span1.appendChild(para1);
      span1.appendChild(para3);
      span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
      span1.className = "option";

      var a = document.createElement('a');
      var linkText = document.createTextNode("Hoàn Thành");
      a.appendChild(linkText);
      a.href = "#";
      
      var a1 = document.createElement('a');
      var linkText1 = document.createTextNode("Xoá");
      a1.appendChild(linkText1);
      a1.setAttribute("onclick", "removeTask(" + i + ")");

      var div1 = document.createElement('div');
      div1.appendChild(a);
      div1.appendChild(a1);
      div1.className = "dropup-content";

      var btn = document.createElement('button');
      btn.innerHTML = "<strong>&vellip;</strong>";
      btn.className = "dropbtn";
      
      var div = document.createElement('div');
      div.appendChild(btn);
      div.appendChild(div1);
      div.className = "dropup";

      var span = document.createElement('span');
      span.appendChild(span1);
      span.appendChild(div);
      span.className = "option1";
      span.id = str_task;

      document.getElementById("list0").appendChild(span);
    }

    markPage(id_page);

    pageNumber();
  }
}

function editBtn(){
  var id_detail2 = document.getElementById("detail2");
  var id_detail1 = document.getElementById("detail1");

  id_detail2.style.display = "block";
  id_detail1.style.display = "none";

}

function close1(){
  var ds = document.getElementById("ds");
  var detail = document.getElementById("detail");
  
  ds.style.display = "block";
  detail.style.display = "none";

  showTasks(idpage, "page" + idpage)
}

function saveEdit(){
  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");

  id_ds.style.display = "block";
  id_detail.style.display = "none";
  
  var id_name_edit = document.getElementById("name-edit").value;
  var id_time_edit = document.getElementById("time-edit").value;
  var id_address_edit = document.getElementById("address-edit").value;

  tasks[id]['name'] = id_name_edit;
  tasks[id]['time'] = id_time_edit;
  tasks[id]['address'] = id_address_edit;

  showTasks(idpage, "page" + idpage);

  document.getElementById("txt").innerHTML = "Sửa thành công";

  var noti = document.getElementById("notification");
  noti.style.display = "block";

  setTimeout(function(){
    noti.style.display = "none";
  }, 1500);
}

function createBtn(){
  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");
  var id_detail3 = document.getElementById("detail3");
  var id_detail1 = document.getElementById("detail1");
  var id_detail2 = document.getElementById("detail2");

  id_ds.style.display = "none";
  id_detail.style.display = "block";
  id_detail3.style.display = "block";
  id_detail1.style.display = "none";
  id_detail2.style.display = "none";

  document.getElementById("name-add").value = "";
  document.getElementById("time-add").value = "";
  document.getElementById("address-add").value = "";
}

function addBtn1(){
  var node2 = document.getElementById("name-add").value;
  
  var node1 = document.getElementById("time-add").value;
 
  var node3 = document.getElementById("address-add").value;
  
  tasks.unshift({keyid: 69, name: node2, time: node1, address: node3})

  showTasks(1, "page1");

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";

  document.getElementById("txt").innerHTML = "Thêm thành công";

  var noti = document.getElementById("notification");
  noti.style.display = "block";

  setTimeout(function(){
    noti.style.display = "none";
  }, 1500);
}

function removeTask(index = null){
  if (index == null) {
    index = id;
  }

  for (var i = 0; i < tasks.length; i++) {
    if (i === index) {
      tasks.splice(i, 1);
    }
  }

  var id_ds = document.getElementById("ds");
  var disx = window.getComputedStyle(id_ds).display;

  if (disx === "none") {
    close1();
  } 

  showTasks(idpage, "page" + idpage);

  document.getElementById("txt").innerHTML = "Xóa thành công";

  var noti = document.getElementById("notification");
  noti.style.display = "block";

  setTimeout(function(){
    noti.style.display = "none";
  }, 1500);
}

function markPage(page){
  for (var i = 1; i <= 5; i++) {
    var pageid = "page" + i;
    document.getElementById(pageid).style.backgroundColor = "white";
    document.getElementById(pageid).style.color = "black";

    var ipage = "ipage" + i;
    document.getElementById(ipage).style.backgroundColor = "white";
    document.getElementById(ipage).style.color = "black";
  }
  document.getElementById(page).style.backgroundColor = " rgb(10, 120, 209)";
  document.getElementById(page).style.color = "white";
}

function pageNumber(){
  if (tasks.length > 25){
    document.getElementById("page3").innerHTML = "...";
    document.getElementById("ipage3").innerHTML = "...";

    document.getElementById("page4").innerHTML = Math.floor((tasks.length / 5));
    document.getElementById("ipage4").innerHTML = Math.floor((tasks.length / 5));
    
    document.getElementById("page5").innerHTML = Math.floor((tasks.length / 5)) + 1;
    document.getElementById("ipage5").innerHTML = Math.floor((tasks.length / 5)) + 1;
  } 
  
  var nextPage = parseInt(idpage) + 1;

  document.getElementById("page0").setAttribute("onclick", "showTasks(document.getElementById('" + "page" + (idpage - 1) + "').textContent, '" + "page" + (idpage - 1) + "')");
  document.getElementById("page6").setAttribute("onclick", "showTasks(document.getElementById('" + "page" + nextPage + "').textContent, '" + "page" + nextPage   + "')");

  document.getElementById("ipage0").setAttribute("onclick", "showTasksSide(document.getElementById('" + "ipage" + (idpage - 1) + "').textContent, '" + "ipage" + (idpage - 1) + "')");
  document.getElementById("ipage6").setAttribute("onclick", "showTasksSide(document.getElementById('" + "ipage" + nextPage + "').textContent, '" + "ipage" + nextPage   + "')");
}

showTasks(1, "page1");

showTasksCompleted(1, "page1");

pageNumber();