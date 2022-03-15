const boton = document.getElementById("button");

var interruptor = false;

const accion = () => {
  const menuDesplegable = document.getElementById("despliega");
  // const visualizar = document.getElementById("view-off");

  if (interruptor === false) {
    menuDesplegable.classList.add("mostrar-large");
    menuDesplegable.classList.remove("mostrar-small");

    // visualizar.classList.add("view-on");
    return (interruptor = true);
  } else {
    menuDesplegable.classList.remove("mostrar-large");
    menuDesplegable.classList.add("mostrar-small");
    // visualizar.classList.remove("view-on");
    return (interruptor = false);
  }
};

const creaLista = () => {
  const container = document.createElement("ul");
  container.className = "opciones";

  const list = document.createElement("li");
  list.className = "view-on";

  container.appendChild(list);

  return container;
};

const mountNode = document.getElementById("despliega-on");

const agregaNodo = () => {
  const nuevoNodo = creaLista();
  mountNode.appendChild(nuevoNodo);
};

boton.addEventListener("click", accion);
s
boton.addEventListener("click", agregaNodo);
