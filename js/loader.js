const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});