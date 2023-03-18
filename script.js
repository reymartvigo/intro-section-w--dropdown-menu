let open = document.getElementById("open-menu");
let close = document.getElementById("close-menu");
let mobileNav = document.getElementById("mobileNav");
let up = document.querySelectorAll("#up");
let down = document.querySelectorAll("#down");
let expandedNav = document.querySelectorAll("#sub");

open.addEventListener("click", () => {
  open.style.display = "none";
  mobileNav.style.display = "flex";
});

close.addEventListener("click", () => {
  open.style.display = "flex";
  mobileNav.style.display = "none";
});

for (let i = 0; i < down.length; i++) {
  down[i].addEventListener("click", () => {
    down[i].style.display = "none";
    up[i].style.display = "flex";
    expandedNav[i].style.display = "flex";
  });
}

for (let i = 0; i < up.length; i++) {
  up[i].addEventListener("click", () => {
    down[i].style.display = "flex";
    up[i].style.display = "none";
    expandedNav[i].style.display = "none";
  });
}
