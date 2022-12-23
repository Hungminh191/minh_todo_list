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

document.getElementById("name1").innerHTML = tasks[1]['name'];
document.getElementById("time1").innerHTML = tasks[1]['time'];
document.getElementById("address1").innerHTML = tasks[1]['address'];

document.getElementById("name2").innerHTML = tasks[2]['name'];
document.getElementById("time2").innerHTML = tasks[2]['time'];
document.getElementById("address2").innerHTML = tasks[2]['address'];

document.getElementById("name3").innerHTML = tasks[3]['name'];
document.getElementById("time3").innerHTML = tasks[3]['time'];
document.getElementById("address3").innerHTML = tasks[3]['address'];

document.getElementById("name4").innerHTML = tasks[4]['name'];
document.getElementById("time4").innerHTML = tasks[4]['time'];
document.getElementById("address4").innerHTML = tasks[4]['address'];

document.getElementById("name5").innerHTML = tasks[5]['name'];
document.getElementById("time5").innerHTML = tasks[5]['time'];
document.getElementById("address5").innerHTML = tasks[5]['address'];

document.getElementById("name6").innerHTML = tasks[6]['name'];
document.getElementById("time6").innerHTML = tasks[6]['time'];
document.getElementById("address6").innerHTML = tasks[6]['address'];

document.getElementById("name7").innerHTML = tasks[7]['name'];
document.getElementById("time7").innerHTML = tasks[7]['time'];
document.getElementById("address7").innerHTML = tasks[7]['address'];

document.getElementById("name8").innerHTML = tasks[8]['name'];
document.getElementById("time8").innerHTML = tasks[8]['time'];
document.getElementById("address8").innerHTML = tasks[8]['address'];

document.getElementById("name9").innerHTML = tasks[9]['name'];
document.getElementById("time9").innerHTML = tasks[9]['time'];
document.getElementById("address9").innerHTML = tasks[9]['address'];

document.getElementById("name10").innerHTML = tasks[10]['name'];
document.getElementById("time10").innerHTML = tasks[10]['time'];
document.getElementById("address10").innerHTML = tasks[10]['address'];

document.getElementById("name11").innerHTML = tasks[11]['name'];
document.getElementById("time11").innerHTML = tasks[11]['time'];
document.getElementById("address11").innerHTML = tasks[11]['address'];

function showDetail(name, time, address, task) {
  console.log('12');
  idname = name;
  idtime = time;
  idaddress = address;
  idtask = task;

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  var a = document.getElementById("detail1");
  var b = document.getElementById("detail2");
  var c = document.getElementById("detail3");

  var disx = window.getComputedStyle(x).display;
  var disa = window.getComputedStyle(a).display;

  if (disx === "block") {
    x.style.display = "none";
    y.style.display = "block";
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
  } else if (disa === "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
  }

  var z = document.getElementById(name);
  var text  = z.textContent || z.innerText;

  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;

  var t = document.getElementById(time);
  var textTime = t.textContent || t.innerText;

  document.getElementById("time-detail").innerHTML = textTime;
  document.getElementById("time-edit").value = textTime;


  var v = document.getElementById(address);
  var textAddress = v.textContent || v.innerText;

  document.getElementById("address-detail").innerHTML = textAddress;
  document.getElementById("address-edit").value = textAddress;
}

function editBtn(){
  var x = document.getElementById("detail2");
  x.style.display = "block";

  var y = document.getElementById("detail1");
  y.style.display = "none";
}

function close1(){
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");
  
  x.style.display = "block";
  y.style.display = "none";
}

function saveEdit(){
  console.log('11');
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
  
  var z = document.getElementById("name-edit").value;
  var t = document.getElementById("time-edit").value;
  var v = document.getElementById("address-edit").value;
  // console.log(t);
  document.getElementById(idname).innerHTML = z;
  document.getElementById(idtime).innerHTML = t;
  document.getElementById(idaddress).innerHTML = v;
}

function createBtn(){
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");
  var z = document.getElementById("detail3");
  var t = document.getElementById("detail1");

  x.style.display = "none";
  y.style.display = "block";
  z.style.display = "block";
  t.style.display = "none";
}

function addBtn(){
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  
  var para = document.createElement('p');
  // var node = document.createTextNode("Họp dự án");
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
  // element.appendChild(span);
  element.insertBefore(span, child);

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