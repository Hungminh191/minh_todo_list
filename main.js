var idname = null;
var idtime = null;
var idaddress = null;
var idtask = null;
var id = null;

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
  {keyid: 11, name: "Viết tài liệu mô tả phiên bản nâng cấp concept LMS School", time: "19/12/2022", address: "360GP"}
];

for (var i = 0; i <= tasks.length; i++) {
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


  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  
  var span2 = document.createElement('span');
  span2.id = str_name;

  var node2 = tasks[i]['name'];
  var title2 = document.createTextNode(node2);
  console.log(title2);
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
  span1.appendChild(checkbox);
  span1.appendChild(span2);
  span1.appendChild(para1);
  span1.appendChild(para3);
  span1.setAttribute("onclick", "showDetail1(" + "'" + str_name + "'" + ", " + "'" + str_time + "'" + ", " + "'" + str_address + "'" + ", " + "'" + str_task + "'" + ", " + i + ")");
  span1.className = "option";

  var a = document.createElement('a');
  var linkText = document.createTextNode("Đóng");
  a.appendChild(linkText);
  a.href = "#";
  
  var a1 = document.createElement('a');
  var linkText1 = document.createTextNode("Xoá");
  a1.appendChild(linkText1);
  a1.setAttribute("onclick", "removeTask(" + "'" + str_task + "'" + ", " + "'" + istr_task + "'" + ")");

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



  
  var icheckbox = document.createElement('input');
  icheckbox.type = "checkbox";
  
  var ispan2 = document.createElement('span');
  ispan2.id = istr_name;

  var inode2 = tasks[i]['name'];
  var ititle2 = document.createTextNode(inode2);
  console.log(ititle2);
  ispan2.appendChild(ititle2);

  var ipara1 = document.createElement('p');
  ipara1.id = istr_time;
  
  var inode1 = tasks[i]['time'];
  var ititle1 = document.createTextNode(inode1);
  ipara1.appendChild(ititle1);

  var ipara3 = document.createElement('p');
  ipara3.id = istr_address;

  var inode3 = tasks[i]['address'];
  var ititle3 = document.createTextNode(inode3);
  ipara3.appendChild(ititle3);

  var ispan1 = document.createElement('span');
  ispan1.appendChild(icheckbox);
  ispan1.appendChild(ispan2);
  ispan1.appendChild(ipara1);
  ispan1.appendChild(ipara3);
  ispan1.setAttribute("onclick", "showDetail1(" + "'" + istr_name + "'" + ", " + "'" + istr_time + "'" + ", " + "'" + istr_address + "'" + ", " + "'" + istr_task + "'" + ", " + i + ")");
  ispan1.className = "option";

  var ia = document.createElement('a');
  var ilinkText = document.createTextNode("Đóng");
  ia.appendChild(ilinkText);
  ia.href = "#";
  
  var ia1 = document.createElement('a');
  var ilinkText1 = document.createTextNode("Xoá");
  ia1.appendChild(ilinkText1);
  ia1.setAttribute("onclick", "removeTask(" + "'" + str_task + "'" + ", " + "'" + istr_task + "'" + ")");

  var idiv1 = document.createElement('div');
  idiv1.appendChild(ia);
  idiv1.appendChild(ia1);
  idiv1.className = "dropup-content";

  var ibtn = document.createElement('button');
  ibtn.innerHTML = "<strong>&vellip;</strong>";
  ibtn.className = "dropbtn";
  
  var idiv = document.createElement('div');
  idiv.appendChild(ibtn);
  idiv.appendChild(idiv1);
  idiv.className = "dropup";

  var ispan = document.createElement('span');
  ispan.appendChild(ispan1);
  ispan.appendChild(idiv);
  ispan.className = "option1";
  ispan.id = istr_task;

  document.getElementById("showList").appendChild(ispan);
}

function showDetail(name, time, address, task, num) {
  idname = name;
  idtime = time;
  idaddress = address;
  idtask = task;
  id = num;

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

  if (disa === "none") {
    id_detail1.style.display = "block";
    id_detail2.style.display = "none";
    id_detail3.style.display = "none";
  } else {
    id_ds.style.display = "none";
    id_detail.style.display = "block";

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

  // var str;
  // str = "dot" + num;

  // var id_dot = document.getElementById(str);
  // id_dot.style.display = "block";

  // for (var i = 0; i < num; i++) {
  //   var str1 = "dot" + i;
  //   var id_dot1 = document.getElementById(str1);
  //   id_dot1.style.display = "none"; 
  // }

  // for (var i = num + 1; i <= tasks.length; i++) {
  //   var str1 = "dot" + i;
  //   var id_dot1 = document.getElementById(str1);
  //   id_dot1.style.display = "none"; 
  // }
}

function showDetail1(name, time, address, task, num){
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
  document.getElementById("name-edit").innerHTML = text;

  var id_time = document.getElementById(time);
  var textTime = id_time.textContent || id_time.innerText;

  document.getElementById("time-detail").innerHTML = textTime;
  document.getElementById("time-edit").value = textTime;


  var id_address = document.getElementById(address);
  var textAddress = id_address.textContent || id_address.innerText;

  document.getElementById("address-detail").innerHTML = textAddress;
  document.getElementById("address-edit").value = textAddress;

  // var id_showList = document.getElementById("showList");
  // id_showList.appendChild(id_ds);
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

  var str_name = "iname" + id;
  var str_time = "itime" + id;
  var str_address = "iaddress" + id;

  document.getElementById(str_name).innerHTML = id_name_edit;
  document.getElementById(str_time).innerHTML = id_time_edit;
  document.getElementById(str_address).innerHTML = id_address_edit;
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

function addBtn(){
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  
  var para = document.createElement('p');
  var node = document.getElementById("name-add").value;
  var title = document.createTextNode(node);
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
  a1.setAttribute("onclick", "removeTask('task0', 'itask0')");

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

  copyTask();

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
}

function copyTask(){
  
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
  a1.setAttribute("onclick", "removeTask('task0', 'itask0')");

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
  span.id = "itask0";
  
  var element = document.getElementById("showList");
  var child = document.getElementById("hide1");
  element.insertBefore(span, child.nextSibling);

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
}

function removeTask(id1 = null, id2 = null){
  if (id1 == null) {
    id1 = idtask;
    id2 = "i" + id1;
  }
  
  var element = document.getElementById(id1);
  var element1 = document.getElementById(id2);
  element.remove();
  element1.remove();

  var id_ds = document.getElementById("ds");
  var disx = window.getComputedStyle(id_ds).display;

  if (disx === "none") {
    close1();
  } 
}