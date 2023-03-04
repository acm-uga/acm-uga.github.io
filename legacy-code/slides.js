
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  //check if n is above range
  if (n >= slides.length) {slideIndex = 0}
  //check if n is below range
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function render() { 
  showSlides(slideIndex);
}


