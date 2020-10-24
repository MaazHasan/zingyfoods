var btn;

window.onload = function () {
  btn = document.getElementById("back-to-top");
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};
