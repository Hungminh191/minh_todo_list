var idselected = null;

function showDetail(id) {
  idselected = id;
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");
  
  x.style.display = "none";
  y.style.display = "block";
    
  var z = document.getElementById(id);
  var text  = z.textContent || z.innerText;
  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;
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
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
  
  var z = document.getElementById("name-edit").value;
  document.getElementById(idselected).innerHTML = z;
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
  a1.href = "#";

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
  span.setAttribute("onclick", "showDetail()");
  
  var element = document.getElementById("list");
  var child = document.getElementById("task1");
  // element.appendChild(span);
  element.insertBefore(span, child);

  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "block";
  y.style.display = "none";
}
