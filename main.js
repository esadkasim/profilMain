//loader
window.addEventListener("load", function () {
  document.querySelector(".loader-wrapper").style.display = "none";

  document.querySelector(".content").style.display = "block";
});
//autoType
var typed = new Typed("#auto-type", {
  strings: ["web site", "mobil app", "can help you in your data"],
  typeSpeed: 400,
  backSpeed: 150,
  loop: true,
});
//numSection2
let num = document.getElementsByClassName("num");
var section2 = document.getElementById("section2");

function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 200);
}
startCount(num[0]);
startCount(num[2]);
startCount(num[3]);
startCount(num[1]);
function startCountt(w) {
    let goal = w.dataset.goal;
    let countt = setInterval(() => {
        w.textContent++;
        if (w.textContent == goal) {
            clearInterval(countt);
        }
    }, 600);
}
let section = document.querySelector(".skill");
let spans = document.querySelectorAll("#progress span");
let adds = document.querySelectorAll("#add");
let goall
console.log(add.textContent+"ssssss");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    console.log("Reached Section Three55");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
     
    });

    
 
    startCountt(add[3]);
    startCountt(add[2]);
    startCountt(add[1]);
    
    




  
  }
};

function hideHelpBar() {
  document.getElementById("help-menu").style.display = "none";
}

let circle = document.getElementById("circle");
let actin = document.getElementById("actin");
console.log(actin);
circle.addEventListener("mouseover", (e) => {
  console.log("esadddd");
  actin.style.display = "block";
});
circle.addEventListener("mouseleave", (e) => {
  console.log("esadddd");
  actin.style.display = "none";
});

let icon = document.getElementById("help-icon");
let hide = document.getElementById("hide");
icon.addEventListener("mouseover", (e) => {
  hide.style.display = "block";
});
icon.addEventListener("mouseleave", (e) => {
  hide.style.display = "none";
});

let iconAside = document.getElementById("icon-aside");
let asideM = document.getElementById("aside-m");
let page = document.getElementById("page");
iconAside.addEventListener("click", (e) => {
  if (asideM.style.display == "block") {
    asideM.style.display = "none";
    page.style.opacity = "1";
  } else {
    asideM.style.display = "block";
    page.style.opacity = "0.45";
  }
});
$(document).ready(function() {
    $('[data-fancybox="profile"]').fancybox({
        // İsteğe bağlı ayarlar buraya eklenebilir
        loop: true,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'close'
        ],
        animationEffect: "fade",
        animationDuration: 800,
        transitionEffect: "fade",
        transitionDuration: 500
    });
});

