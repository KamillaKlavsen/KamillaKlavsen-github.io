// Burger bar til navigationen
function myFunction() {
    let burger = document.getElementById("sider");
    if (burger.style.display === "block") {
      burger.style.display = "none";
    } else {
      burger.style.display = "block";
    }
}

/* Modal til kunstner */

// Get the modal
var bandModalId = document.getElementById("bandModalId");

// Get the button that opens the modal
var btn = document.getElementById("bands");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  bandModalId.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  bandModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bandModalId) {
    bandModalId.style.display = "none";
  }
}

/*NOTE TO SELF - ID's kan kun bruges ÉN gang pr. HTML fil,
derfor er der så meget js til modaler, selvom det er det samme content*/

//SECOND MODAL

var bandModalId2 = document.getElementById("bandModalId2");
var btn = document.getElementById("bands2");
var span = document.getElementsByClassName("close")[1];
btn.onclick = function() {
  bandModalId2.style.display = "block";
}
span.onclick = function() {
  bandModalId2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == bandModalId2) {
    bandModalId2.style.display = "none";
  }
}

//FORTSÆTTES TEORETISK TIL DE SIDSTE 25 BANDS

//WORDPRESS - BILLEDER TIL MODAL
//DETTE ER EN PRØVE - VIRKER IKKE 


// *** BEGIN global variables ***
// these variables' values depend on the WordPress instance - independent from the (web)app's execution

// const apiUrl = 'http://kamkla1.dreamhosters.com/wp-json/wp/v2/';
// const apiKey = '4VThLkb5UooxJsBKmA1lHaNdyTHEMiI6';
// const postOptionsId = 20;


// these variables hold information depending on the app's execution


// let appOptions; // app options object from WP 


// these variables refer to DOM elements; 'static' containers - invariable between executions of the app


// const bandImage = document.querySelector('#bandImage');


// *** END global variables ***

// *** BEGIN execution ***
// initPage();
// *** END execution ***


// errorMessage(msg) - displays error message

// function errorMessage(msg) {
//     console.log(msg);
// }


// ****************
// WE START HERE vv
// initPage() - initialises the page

// function initPage() {

//     // get hero image from WP
//     getOptionsFromWP();
// }

// function getOptionsFromWP() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // all good
//             try {
//                 appOptions = JSON.parse(this.responseText);
//                 bandImage.src = appOptions.acf.band_image;
//             } catch (error) {
//                 errorMessage(`Error parsing JSON: ${error}`);
//             }
//         }
//         if (this.readyState == 4 && this.status > 400) {
//             errorMessage(`An error has occured while getting the data. Please try again later!`);
//         }
//     }
//     xhttp.open('GET', `${apiUrl}posts/${postOptionsId}`, true);
//     console.log(this);
//     xhttp.setRequestHeader('Authorization', `Bearer ${apiKey}`);
//     xhttp.send();
// }
