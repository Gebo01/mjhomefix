function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const logo = document.querySelector("h1");
  const icon = document.querySelector(".mobile-menu-icon");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    logo.style.display = "none";
    icon.style.display = "none";
  } else {
    logo.style.display = "block";
    icon.style.display = "flex";
  }
}

