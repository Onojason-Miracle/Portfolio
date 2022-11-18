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
    let hamburger  = document.getElementById("navbar");
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
