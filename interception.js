filterSelection("dialog1")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("dialog");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) 
      // w3AddClass(x[i], "show");
    var dialog = document.querySelector("." + c).innerHTML;
    var photo = document.querySelector("." + "p" + c).innerHTML;
    document.querySelector(".cont").innerHTML = dialog;
    document.querySelector(".main").innerHTML = photo;
    
     

  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace(" active", "");
    this.className += " active";
  });
}






var obj = document.getElementById('link');
var timerFIG = 3600; // Время в секундах, через которое появляется кнопка

var timer = setInterval("startTimer()",1000);
var tim = 1;
function startTimer() {
  if (btns[16].className == "btn active" && tim==1) {timerFIG=5; tim = 0;} else{}
if(timerFIG !== 1) {
timerFIG--;
} else {
clearInterval(timer);
obj.innerHTML = '<div class="heart"></div>'; // кнопка
document.querySelector(".main").innerHTML = document.querySelector(".pdialog18").innerHTML;
}}
  
