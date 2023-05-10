const submit = document.getElementById("submit");
const inputTareas = document.getElementById("tareas").value;
const inputDescTareas = document.getElementById("desc-tareas").value;

function getTarea(name, descripcion) {
  let tarea = name;
  let descTarea = descripcion;
  let obj = { tarea, descTarea };
  return obj;
}

submit.addEventListener("click", getTarea(inputTareas, inputDescTareas));
