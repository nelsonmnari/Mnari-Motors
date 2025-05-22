document.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    alert("Enter key was pressed!");
  }
});

toyota = document.querySelector(".toyota");
bmw = document.querySelector(".bmw");
tesla = document.querySelector(".tesla");
lambo = document.querySelector(".lambo");
dodge = document.querySelector(".dodge");
benz = document.querySelector(".benz");
ford = document.querySelector(".ford");
posche = document.querySelector(".posche");

ford.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/ford.html";
  window.open(href, "_blank");
});
posche.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/tesla.html";
  window.open(href, "_blank");
});

toyota.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/toyota.html";
  window.open(href, "_blank");
});

bmw.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/bmw.html";
  window.open(href, "_blank");
});

tesla.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/tesla.html";
  window.open(href, "_blank");
});

lambo.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/lambo.html";
  window.open(href, "_blank");
});

dodge.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/dodge.html";
  window.open(href, "_blank");
});

benz.addEventListener("click", function () {
  href = "http://127.0.0.1:5500/benz.html";
  window.open(href, "_blank");
});
