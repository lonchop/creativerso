const boton = document.getElementById("button");

var interruptor = false;

const accion = () => {
  const menuDesplegable = document.getElementById("despliega");
  const bordeWhite = document.getElementById("navbar");
  const view = document.getElementById("list");

  if (interruptor === false) {
    menuDesplegable.classList.remove("colapso-off");
    menuDesplegable.classList.add("colapso-on");
    view.classList.replace("view-off", "view-on");
    bordeWhite.classList.add("active");

    return (interruptor = true);

  } else {
    menuDesplegable.classList.remove("colapso-on");
    menuDesplegable.classList.add("colapso-off");
    view.classList.replace("view-on", "view-off");
    bordeWhite.classList.remove("active");

    return (interruptor = false);
  }
};

boton.addEventListener("click", accion);
