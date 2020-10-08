// Bokse til at vise mere tekst når men klikker 
let udvid = document.getElementsByClassName("udvid");
let i;

for (i = 0; i < udvid.length; i++) {
  udvid[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let tekst = this.nextElementSibling;
    if (tekst.style.display === "block") {
      tekst.style.display = "none";
    } else {
      tekst.style.display = "block";
    }
  });
}


// Modal til holdbeskrivelser
let openBtns = document.querySelectorAll('.modal-open');

openBtns.forEach(function(btn) {
  btn.onclick = function(){
    let modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});

let lukBtns = document.querySelectorAll('.modal-luk');

lukBtns.forEach(function(btn){
  btn.onclick = function(){
    let modal = (btn.closest('.modal').style.display = 'none');
  };
});

window.onclick = function(event){
  if(event.target.className === 'modal'){
    event.target.style.display = 'none';
  }
}


// Burgerbar til mobil versionen
function burgerBar() {
  let burgerBar = document.getElementById("mobileNav");
  if (burgerBar.style.display === "none") {
    burgerBar.style.display = "block";
  } else {
    burgerBar.style.display = "none";
  }
}



// Billed slider 

const tilbage  = document.querySelector('.tilbage');
const frem = document.querySelector('.frem');

const track = document.querySelector('.track');

let sliderWidth = document.querySelector('.slider-container').offsetWidth;

window.addEventListener('resize', function()  {
  sliderWidth = document.querySelector('.slider-container').offsetWidth;
})

let index = 0;

frem.addEventListener('click', function() {
  index++;
  tilbage.classList.add('show');
  track.style.transform = `translateX(-${index * sliderWidth}px)`;
  
  if (track.offsetWidth - (index * sliderWidth) < sliderWidth) {
    frem.classList.add('hide');
  }
})

tilbage.addEventListener('click', function() {
  index--;
  frem.classList.remove('hide');
  if (index === 0) {
    tilbage.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * sliderWidth}px)`;
}) 

