const header = document.getElementById("header");

const cambiarNav = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      console.log("hola");
      const nav = document.getElementById("navbar");
      nav.classList.add("large-navbar");
      nav.classList.remove("small-navbar");
    } else {
      const nav = document.getElementById("navbar");
      nav.classList.add("small-navbar");
      nav.classList.remove("large-navbar");
      console.log("chao");
    }
  });
};

const observador = new IntersectionObserver(cambiarNav, {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
});

observador.observe(header);
