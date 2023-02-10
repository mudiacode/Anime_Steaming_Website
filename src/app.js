// Hamburger Menu
const hamburger_menu = document.querySelector("#hamburger");
const hamburger_btn = document.querySelector("#hamburger-btn");
// const hamburger_menu_width = document.querySelector(".hamburger-mobile")

// Search Toggle
const search_menu = document.querySelector("#search-menu");
const search_btn = document.querySelector("#search-btn");

// Remove display none class on click (hamburger)
hamburger_btn.addEventListener("click", (e) => {
  hamburger_menu.classList.toggle("menu-toggle");
});

// Remove display none class on click (hamburger)
search_btn.addEventListener("click", (e) => {
  search_menu.classList.toggle("search-toggle");
});
