const loader = () => {
  document.querySelector(".jm-loadingpage").classList.add("fade-out");
};

const fadeOut = () => {
  setInterval(loader, 2000);
};
window.onload = fadeOut();

// $(document).ready(function () {
//   $(".jm-loadingpage").fadeOut("slow");
// });