const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -25;

    grande.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });

    punto[i].classList.add("activo");
  });
});

// const grandeDos = document.querySelector(".grande-2");
// const puntoDos = document.querySelectorAll(".punto-2");

// puntoDos.forEach((cadaPunto, i) => {
//   puntoDos[i].addEventListener("touchstart", () => {
//     let posicion = i;
//     let operacion = posicion * -33.33;

//     grandeDos.style.transform = `translateX(${operacion}%)`;

//     puntoDos.forEach((cadaPunto, i) => {
//       puntoDos[i].classList.remove("activo-2");
//     });

//     puntoDos[i].classList.add("activo-2");
//   });
// });
