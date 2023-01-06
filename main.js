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
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {keyid: 10, name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {keyid: 6, name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},  
];

function showHideElement(id_el, state){
  var el_id = document.getElementById(id_el);
  el_id.style.display = state;
}

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
      a.setAttribute("onclick", "completeTask(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
      
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

  var dis_content = window.getComputedStyle(content).display;
  var dis_detail1 = window.getComputedStyle(detail1).display;
  
  if (dis_content === "block") {
    showHideElement("content", "none");
    showHideElement("detail", "block");

    showHideElement("detail1", "block");
    showHideElement("detail2", "none");
    showHideElement("detail3", "none");
  } else if (dis_detail1 === "none") {
    showHideElement("detail1", "block");
    showHideElement("detail2", "none");
    showHideElement("detail3", "none");
  }

  if (dis_detail1 === "none") {
    showHideElement("detail1", "block");
    showHideElement("detail2", "none");
    showHideElement("detail3", "none");
  } else {
    showHideElement("content", "none");
    showHideElement("detail", "block");

    showHideElement("detail1", "block");
    showHideElement("detail2", "none");
    showHideElement("detail3", "none");
  }

  var id_name = document.getElementById(name);
  var text = id_name.textContent || id_name.innerText;

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
  var pageid = "pageid" + idpage;

  showTasksSide(idpage, ipage);

  showTasksCompletedSide(idpage, ipage);

  if (name.charAt(0) != "i") {
    openTasks("ds1", ipage, 3);
  } else {
    openTasks("ds2", pageid, 4);
  } 
}

// function showTasksSide(page, id_page){
//   idpage = page;
//   document.getElementById("showList").innerHTML = "";

//   for (var i = (page - 1) * 5; i < page * 5; i++) {
//     str_name = "name";
//     str_time = "time";
//     str_address = "address";
//     str_task = "task"

//     str_name = str_name + i; 
//     str_time = str_time + i; 
//     str_address = str_address + i;
//     str_task = str_task + i;

//     if (tasks[i] != null) {
//       var span2 = document.createElement('span');
//       span2.id = str_name;

//       var node2 = tasks[i]['name'];
//       var title2 = document.createTextNode(node2);
//       span2.appendChild(title2);

//       var para1 = document.createElement('p');
//       para1.id = str_time;
      
//       var node1 = tasks[i]['time'];
//       var title1 = document.createTextNode(node1);
//       para1.appendChild(title1);

//       var para3 = document.createElement('p');
//       para3.id = str_address;

//       var node3 = tasks[i]['address'];
//       var title3 = document.createTextNode(node3);
//       para3.appendChild(title3);

//       var span1 = document.createElement('span');
//       span1.appendChild(span2);
//       span1.appendChild(para1);
//       span1.appendChild(para3);
//       span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
//       span1.className = "option";

//       var a = document.createElement('a');
//       var linkText = document.createTextNode("Hoàn Thành");
//       a.appendChild(linkText);
//       a.href = "#";
      
//       var a1 = document.createElement('a');
//       var linkText1 = document.createTextNode("Xoá");
//       a1.appendChild(linkText1);
//       a1.setAttribute("onclick", "removeTask(" + i + ")");

//       var div1 = document.createElement('div');
//       div1.appendChild(a);
//       div1.appendChild(a1);
//       div1.className = "dropup-content";

//       var btn = document.createElement('button');
//       btn.innerHTML = "<strong>&vellip;</strong>";
//       btn.className = "dropbtn";
      
//       var div = document.createElement('div');
//       div.appendChild(btn);
//       div.appendChild(div1);
//       div.className = "dropup";

//       var span = document.createElement('span');
//       span.appendChild(span1);
//       span.appendChild(div);
//       span.className = "option1";
//       span.id = str_task;

//       document.getElementById("showList").appendChild(span);
//     }
//   }

//   markPage(id_page);

//   pageNumber();
// }

// function showTasksCompleted(page, id_page){
//   idpage = page;
//   document.getElementById("list0").innerHTML = "";

//   for (var i = (page - 1) * 5; i < page * 5; i++) {
//     str_name = "iname";
//     str_time = "itime";
//     str_address = "iaddress";
//     str_task = "itask"

//     str_name = str_name + i; 
//     str_time = str_time + i; 
//     str_address = str_address + i;
//     str_task = str_task + i;

//     if (tasksCompleted[i] != null) {
//       var span2 = document.createElement('span');
//       span2.id = str_name;

//       var node2 = tasksCompleted[i]['name'];
//       var title2 = document.createTextNode(node2);
//       span2.appendChild(title2);

//       var para1 = document.createElement('p');
//       para1.id = str_time;
      
//       var node1 = tasksCompleted[i]['time'];
//       var title1 = document.createTextNode(node1);
//       para1.appendChild(title1);

//       var para3 = document.createElement('p');
//       para3.id = str_address;

//       var node3 = tasksCompleted[i]['address'];
//       var title3 = document.createTextNode(node3);
//       para3.appendChild(title3);

//       var span1 = document.createElement('span');
//       span1.appendChild(span2);
//       span1.appendChild(para1);
//       span1.appendChild(para3);
//       span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
//       span1.className = "option";
      
//       var a1 = document.createElement('a');
//       var linkText1 = document.createTextNode("Xoá");
//       a1.appendChild(linkText1);
//       a1.setAttribute("onclick", "removeTaskCompleted(" + i + ")");

//       var div1 = document.createElement('div');
//       div1.appendChild(a1);
//       div1.className = "dropup-content";

//       var btn = document.createElement('button');
//       btn.innerHTML = "<strong>&vellip;</strong>";
//       btn.className = "dropbtn";
      
//       var div = document.createElement('div');
//       div.appendChild(btn);
//       div.appendChild(div1);
//       div.className = "dropup";

//       var span = document.createElement('span');
//       span.appendChild(span1);
//       span.appendChild(div);
//       span.className = "option1";
//       span.id = str_task;

//       document.getElementById("list0").appendChild(span);
//     }

//     markPage(id_page);

//     pageNumber();
//   }
// }

// function showTasksCompletedSide(page, id_page){
//   idpage = page;
//   document.getElementById("showList1").innerHTML = "";

//   for (var i = (page - 1) * 5; i < page * 5; i++) {
//     str_name = "iname";
//     str_time = "itime";
//     str_address = "iaddress";
//     str_task = "itask"

//     str_name = str_name + i; 
//     str_time = str_time + i; 
//     str_address = str_address + i;
//     str_task = str_task + i;

//     if (tasksCompleted[i] != null) {
//       var span2 = document.createElement('span');
//       span2.id = str_name;

//       var node2 = tasksCompleted[i]['name'];
//       var title2 = document.createTextNode(node2);
//       span2.appendChild(title2);

//       var para1 = document.createElement('p');
//       para1.id = str_time;
      
//       var node1 = tasksCompleted[i]['time'];
//       var title1 = document.createTextNode(node1);
//       para1.appendChild(title1);

//       var para3 = document.createElement('p');
//       para3.id = str_address;

//       var node3 = tasksCompleted[i]['address'];
//       var title3 = document.createTextNode(node3);
//       para3.appendChild(title3);

//       var span1 = document.createElement('span');
//       span1.appendChild(span2);
//       span1.appendChild(para1);
//       span1.appendChild(para3);
//       span1.setAttribute("onclick", "showDetail(" + "'" + str_name + "', '" + str_time + "', '" + str_address + "', '" + str_task + "', " + i + ")");
//       span1.className = "option";
      
//       var a1 = document.createElement('a');
//       var linkText1 = document.createTextNode("Xoá");
//       a1.appendChild(linkText1);
//       a1.setAttribute("onclick", "removeTaskCompleted(" + i + ")");

//       var div1 = document.createElement('div');
//       div1.appendChild(a1);
//       div1.className = "dropup-content";

//       var btn = document.createElement('button');
//       btn.innerHTML = "<strong>&vellip;</strong>";
//       btn.className = "dropbtn";
      
//       var div = document.createElement('div');
//       div.appendChild(btn);
//       div.appendChild(div1);
//       div.className = "dropup";

//       var span = document.createElement('span');
//       span.appendChild(span1);
//       span.appendChild(div);
//       span.className = "option1";
//       span.id = str_task;

//       document.getElementById("showList1").appendChild(span);
//     }

//     markPage(id_page);

//     pageNumber();
//   }
// }

function editBtn(){
  showHideElement("detail2", "block");
  showHideElement("detail1", "none");
}

function close1(){
  showHideElement("content", "block");
  showHideElement("detail", "none");

  showTasks(idpage, "page" + idpage);
  openTasks("ds", 'page1', 1);
}

function saveEdit(){
  showHideElement("content", "block");
  showHideElement("detail", "none");
  
  var id_name_edit = document.getElementById("name-edit").value;
  var id_time_edit = document.getElementById("time-edit").value;
  var id_address_edit = document.getElementById("address-edit").value;

  tasks[id]['name'] = id_name_edit;
  tasks[id]['time'] = id_time_edit;
  tasks[id]['address'] = id_address_edit;

  showTasks(idpage, "page" + idpage);

  openTasks("ds", "page1", 1);

  pageNumber();

  document.getElementById("txt").innerHTML = "Sửa thành công";

  var noti = document.getElementById("notification");
  noti.style.display = "block";

  setTimeout(function(){
    noti.style.display = "none";
  }, 1500);
}

function createBtn(){
  showHideElement("content", "none");
  showHideElement("detail", "block");
  showHideElement("detail3", "block");
  showHideElement("detail1", "none");
  showHideElement("detail2", "none");

  document.getElementById("name-add").value = "";
  document.getElementById("time-add").value = "";
  document.getElementById("address-add").value = "";

  var dis_content = window.getComputedStyle(content).display;
  var dis_detail1 = window.getComputedStyle(detail1).display;
  
  // if (dis_content === "block") {
  //   openTasks();
  // }
}

function addBtn1(){
  var node2 = document.getElementById("name-add").value;
  
  var node1 = document.getElementById("time-add").value;
 
  var node3 = document.getElementById("address-add").value;
  
  tasks.unshift({keyid: 69, name: node2, time: node1, address: node3});

  showTasks(1, "page1");

  showHideElement("ds", "block");
  showHideElement("detail", "none");

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

function removeTaskCompleted(index = null){
  if (index == null) {
    index = id;
  }

  for (var i = 0; i < tasksCompleted.length; i++) {
    if (i === index) {
      tasksCompleted.splice(i, 1);
    }
  }

  var id_ds = document.getElementById("ds0");
  var disx = window.getComputedStyle(id_ds).display;

  if (disx === "none") {
    close1();
  } 

  showTasksCompleted(idpage, "idpage" + idpage);

  // document.getElementById("txt").innerHTML = "Xóa thành công";

  // var noti = document.getElementById("notification");
  // noti.style.display = "block";

  // setTimeout(function(){
  //   noti.style.display = "none";
  // }, 1500);
}

function markPage(page){
  for (var i = 1; i <= 5; i++) {
    var pageid = "page" + i;
    document.getElementById(pageid).style.backgroundColor = "white";
    document.getElementById(pageid).style.color = "black";

    var ipage = "ipage" + i;
    document.getElementById(ipage).style.backgroundColor = "white";
    document.getElementById(ipage).style.color = "black";

    var idpage = "idpage" + i;
    document.getElementById(idpage).style.backgroundColor = "white";
    document.getElementById(idpage).style.color = "black";
    
    var idpage = "pageid" + i;
    document.getElementById(idpage).style.backgroundColor = "white";
    document.getElementById(idpage).style.color = "black";
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

  document.getElementById("idpage0").setAttribute("onclick", "showTasksSide(document.getElementById('" + "idpage" + (idpage - 1) + "').textContent, '" + "idpage" + (idpage - 1) + "')");
  document.getElementById("idpage6").setAttribute("onclick", "showTasksSide(document.getElementById('" + "idpage" + nextPage + "').textContent, '" + "idpage" + nextPage   + "')");

  document.getElementById("pageid0").setAttribute("onclick", "showTasksSide(document.getElementById('" + "pageid" + (idpage - 1) + "').textContent, '" + "pageid" + (idpage - 1) + "')");
  document.getElementById("pageid6").setAttribute("onclick", "showTasksSide(document.getElementById('" + "pageid" + nextPage + "').textContent, '" + "pageid" + nextPage   + "')");
}

function completeTask(name, time, address, task, num){
  var id_name = document.getElementById(name);
  var text = id_name.textContent || id_name.innerText;

  var id_time = document.getElementById(time);
  var textTime = id_time.textContent || id_time.innerText;

  var id_address = document.getElementById(address);
  var textAddress = id_address.textContent || id_address.innerText;

  tasksCompleted.unshift({keyid: 69, name: text, time: textTime, address: textAddress});

  removeTask(num);

  showTasksCompleted(1, "idpage1");
}

function openTasks(ds, page, number){
  var body = document.getElementsByClassName("body");
  for (var i = 0; i < body.length; i++){
    body[i].style.display = "none";
  }

  document.getElementById(ds).style.display = "block";

  for (var i = 1; i <= 4; i++) {
    var idtab = "tab" + i;

    var unmark = document.getElementById(idtab);
    unmark.classList.remove("mark-tab");
  }

  var idmark = "tab" + number;
  var mark = document.getElementById(idmark);
  mark.classList.add("mark-tab");

  console.log(page);
  markPage(page);
}

showTasksCompleted(1, "idpage1");

showTasks(1, "page1");

openTasks("ds", 'page1', 1);

pageNumber();