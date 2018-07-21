var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img1 = document.getElementById('myImg1');

// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img1.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal

// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var slides = document.getElementsByClassName("mySlides");

function openFullscreen() {
  
index = slideIndex;
img = slides[slideIndex-1].childNodes[3].attributes[1].textContent;
  modal.style.display = "block";
    modalImg.src = img;
    captionText.innerHTML = this.alt;
   
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

function slidePlus(n) {

  slideIndex = slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
   img = slides[slideIndex-1].childNodes[3].attributes[1].textContent;
  modalImg.src = img;

}


