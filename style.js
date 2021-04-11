const breadcrumb = document.querySelector(".nav-bar__breadcrumb");
const overlay = document.querySelector(".overlay");

breadcrumb.addEventListener("click", function (ev) {
   ev.currentTarget.classList.toggle("nav-bar__breadcrumb--cancel");
   overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", function () {
   breadcrumb.classList.toggle("nav-bar__breadcrumb--cancel");
   this.classList.toggle("hidden");
});
