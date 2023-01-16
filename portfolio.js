// function for slidess

const d = new Date();
const hello = d.getFullYear();

document.querySelector(".footer-date")
.innerHTML = hello;


let mySlides = 0;
showSlides();

function showSlides() {
  let i;
  let slider = document.getElementsByClassName("Slides");

  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }

  mySlides++;
  if (mySlides > slider.length) {
    mySlides = 1;
  }

  slider[mySlides - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// function for project slides

let carousel = 0;
projectSlides();

function projectSlides() {
  let i;
  let pslides = document.getElementsByClassName("project-slides");

  for (i = 0; i < pslides.length; i++) {
   
  //  console.log (pslides.length );
   pslides[i].style.display = "none";
  }

  carousel++;
  
  if (carousel > pslides.length) {
    carousel = 1;
  }

  pslides[ carousel - 1].style.display = "block";
  setTimeout(projectSlides, 5000); // Change image every 2 seconds
}






// const d = new Date();
// const hello = d.getFullYear();

// document.getElementByClass("footer-date").innerHTML = d.getFullYear();
