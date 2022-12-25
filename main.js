var idname = null;
var idtime = null;
var idaddress = null;
var idtask = null;

var tasks = [
  {name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"},
  {name: "Nghiên cứu đề thi, học hành tại C2 Giảng Võ, Nguyễn Tất Thành, Cấu Giấy", time: "13/12/2022", address: "97 NCT"},
  {name: "Gửi plan báo cáo hoàn thành nâng cấp EL cho TĐ", time: "16/12/2022", address: "57HTK"},
  {name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"}
];

document.getElementById("name").innerHTML = tasks[0]['name'];
document.getElementById("time").innerHTML = tasks[0]['time'];
document.getElementById("address").innerHTML = tasks[0]['address'];

for (var i = 1; i <= tasks.length; i++) {
  str_name = "name";
  str_time = "time";
  str_address = "address";

  str_name = str_name + i; 
  str_time = str_time + i; 
  str_address = str_address + i;
  
  document.getElementById(str_name).innerHTML = tasks[i]['name'];
  document.getElementById(str_time).innerHTML = tasks[i]['time'];
  document.getElementById(str_address).innerHTML = tasks[i]['address'];
  
}

function showDetail(name, time, address, task, num) {
  idname = name;
  idtime = time;
  idaddress = address;
  idtask = task;

  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");

  var id_detail1 = document.getElementById("detail1");
  var id_detail2 = document.getElementById("detail2");
  var id_detail3 = document.getElementById("detail3");

  var disx = window.getComputedStyle(id_ds).display;
  var disa = window.getComputedStyle(id_detail1).display;

  if (disx === "block") {
    id_ds.style.display = "none";
    id_detail.style.display = "block";

    id_detail1.style.display = "block";
    id_detail2.style.display = "none";
    id_detail3.style.display = "none";
  } else if (disa === "none") {
    id_detail1.style.display = "block";
    id_detail2.style.display = "none";
    id_detail3.style.display = "none";
  }

  var id_name = document.getElementById(name);
  var text  = id_name.textContent || id_name.innerText;

  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;

  var id_time = document.getElementById(time);
  var textTime = id_time.textContent || id_time.innerText;

  document.getElementById("time-detail").innerHTML = textTime;
  document.getElementById("time-edit").value = textTime;


  var id_address = document.getElementById(address);
  var textAddress = id_address.textContent || id_address.innerText;

  document.getElementById("address-detail").innerHTML = textAddress;
  document.getElementById("address-edit").value = textAddress;

  var str;
  str = "dot" + num;
  console.log(str);

  var id_dot = document.getElementById(str);
  id_dot.style.display = "block";

  for (var i = 0; i < num; i++) {
    var str1 = "dot" + i;
    var id_dot1 = document.getElementById(str1);
    id_dot1.style.display = "none"; 
  }

  for (var i = num + 1; i <= 12; i++) {
    var str1 = "dot" + i;
    var id_dot1 = document.getElementById(str1);
    id_dot1.style.display = "none"; 
  }
}

function editBtn(){
  var id_detail2 = document.getElementById("detail2");
  id_detail2.style.display = "block";

  var id_detail1 = document.getElementById("detail1");
  id_detail1.style.display = "none";
}

function close1(){
  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");
  
  id_ds.style.display = "block";
  id_detail.style.display = "none";
}

function saveEdit(){
  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");

  id_ds.style.display = "block";
  id_detail.style.display = "none";
  
  var id_name_edit = document.getElementById("name-edit").value;
  var id_time_edit = document.getElementById("time-edit").value;
  var id_address_edit = document.getElementById("address-edit").value;
  document.getElementById(idname).innerHTML = id_name_edit;
  document.getElementById(idtime).innerHTML = id_time_edit;
  document.getElementById(idaddress).innerHTML = id_address_edit;
}

function createBtn(){
  var id_ds = document.getElementById("ds");
  var id_detail = document.getElementById("detail");
  var id_detail3 = document.getElementById("detail3");
  var id_detail1 = document.getElementById("detail1");

  id_ds.style.display = "none";
  id_detail.style.display = "block";
  id_detail3.style.display = "block";
  id_detail1.style.display = "none";

  document.getElementById("name-add").value = "";
  document.getElementById("time-add").value = "";
  document.getElementById("address-add").value = "";
}

function addBtn(){
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  
  var para = document.createElement('p');
  var node = document.getElementById("name-add").value;
  var title = document.createTextNode(node);
  console.log(node);
  para.appendChild(title);
  
  var span1 = document.createElement('span');
  span1.appendChild(checkbox);
  span1.appendChild(para);

  var a = document.createElement('a');
  var linkText = document.createTextNode("Đóng");
  a.appendChild(linkText);
  a.href = "#";
  
  var a1 = document.createElement('a');
  var linkText1 = document.createTextNode("Xoá");
  a1.appendChild(linkText1);
  a1.setAttribute("onclick", "removeTask(task)");

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
  span.setAttribute("onclick", "showDetail(name)");
  
  var element = document.getElementById("list");
  var child = document.getElementById("task");
  element.insertBefore(span, child);

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
}

function addBtn1(){
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  
  var span2 = document.createElement('span');
  span2.id = "name0";

  var node2 = document.getElementById("name-add").value;
  var title2 = document.createTextNode(node2);
  span2.appendChild(title2);

  var para1 = document.createElement('p');
  para1.id = "time0";
  
  var node1 = document.getElementById("time-add").value;
  var title1 = document.createTextNode(node1);
  para1.appendChild(title1);

  var para3 = document.createElement('p');
  para3.id = "address0";

  var node3 = document.getElementById("address-add").value;
  var title3 = document.createTextNode(node3);
  para3.appendChild(title3);

  var span1 = document.createElement('span');
  span1.appendChild(checkbox);
  span1.appendChild(span2);
  span1.appendChild(para1);
  span1.appendChild(para3);
  span1.setAttribute("onclick", "showDetail('name0', 'time0', 'address0', 'task0')");
  span1.className = "option";

  var a = document.createElement('a');
  var linkText = document.createTextNode("Đóng");
  a.appendChild(linkText);
  a.href = "#";
  
  var a1 = document.createElement('a');
  var linkText1 = document.createTextNode("Xoá");
  a1.appendChild(linkText1);
  a1.setAttribute("onclick", "removeTask('task0')");

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
  span.id = "task0";
  
  
  var element = document.getElementById("list");
  var child = document.getElementById("hide");
  element.insertBefore(span, child.nextSibling);

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
}

function removeTask(id = null){
  if (id == null) {
    id = idtask;
  }
  console.log(id);
  const element = document.getElementById(id);
  element.remove();
}
