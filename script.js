var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var lines = document.getElementById("line");
var line1 = document.getElementById("line1");
var closemenu = document.getElementById("close");

hamburger.addEventListener("click", function(){
    menu.style.display = "block";
    setTimeout(function(){
        lines.classList.add("liniesus");
        line1.classList.add("liniejos");
        lines.style.display = "block";
        line1.style.display = "block";
    }, 1150);
    menu.classList.add("animatie");
});

closemenu.addEventListener("click", function(){
    lines.style.display = "none";
    line1.style.display = "none";
    menu.style.display = "none";
});

