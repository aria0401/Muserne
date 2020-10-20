window.addEventListener("load", sidenVises);

function sidenVises() {
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  document.querySelector("#menu").classList.toggle("hidden");

  const hiddenMenu = document.querySelector("#menu").classList.contains("hidden");

  if (hiddenMenu == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "✗";
  }
}
