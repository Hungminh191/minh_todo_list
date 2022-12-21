function showDetail(id) {
  console.log('13');
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
  console.log('10');
  var x = document.getElementById("detail2");
  x.style.display = "block";

  var y = document.getElementById("detail1");
  y.style.display = "none";
}

function close1(){
  console.log('12');
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
  // alert(z);
  document.getElementById("name").innerHTML = z;
}
