function showDetail(id) {
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");
  
  x.style.display = "none";
  y.style.display = "block";
    
  var z = document.getElementById(id);
  var text  = z.textContent || z.innerText;
  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;
}

function myFunction1() {
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "none";
  y.style.display = "block";
  
  var z = document.getElementById("name1");
  var text  = z.textContent || z.innerText;
  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;
}

function myFunction2() {
  var x = document.getElementById("ds");
  var y = document.getElementById("detail");

  x.style.display = "none";
  y.style.display = "block";
  
  var z = document.getElementById("name2");
  var text  = z.textContent || z.innerText;
  document.getElementById("name-detail").innerHTML = text;
  document.getElementById("name-edit").innerHTML = text;
}

function editBtn(){
  var x = document.getElementById("detail2");
  var y = document.getElementById("detail1");
  x.style.display = "block";
  y.style.display = "none";
}

function close(){
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
  alert(z);
  document.getElementById("names").innerHTML = "sddsvsdvsdvsdvv";
}
