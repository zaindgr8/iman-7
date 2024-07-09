// main.js
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile_menu");
  const menuIcon = document.getElementById("menu_icon");

  if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
    mobileMenu.style.display = "block";
    menuIcon.className = "ti-close"; // Use a different icon for the close button
  } else {
    mobileMenu.style.display = "none";
    menuIcon.className = "ti-menu"; // Use the original menu icon
  }
}
