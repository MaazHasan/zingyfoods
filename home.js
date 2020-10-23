var btn;

window.onload = function () {
  btn = document.getElementById("back-to-top");
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  console.log("Button", btn.classl);
  if (window.pageYOffset > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};
