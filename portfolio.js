// function for slidess

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



let now = new Date().toJSON();
let mimie = Date.now();
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
let current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
// document.querySelector("#date").innerHTML = current_date;

// function for hamburger
//    function myFunction() {
//     let nav  = document.getElementById("navbar");
//     let hamburger  = document.querySelector(".hamburger");
//     if (nav.style.display === "none") {
//       hamburger.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }

function myFunction() {
  let hamburger = document.getElementById("navbar");
  // if (x.className.indexOf("w3-show") == -1) {
  //   x.className += " w3-show";
  // } else {
  //   x.className = x.className.replace(" w3-show", "");
  // }
}

//   let icons = document.querySelector(".skills_icons");

//   function iconia(){
//    let x = document.createElement("p");
//    x = `<p class="text-center text-light">This is Js oo</p>`
// icons.appendChild(x);
//   }

//   icons.addEventListener("mouseover", iconia)
