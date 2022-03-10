const loader = () => {
  document.querySelector(".loader-container").classList.add("fade-out");
};

const fadeOut = () => {
  setInterval(loader, 3000);
};
window.onload = fadeOut();
