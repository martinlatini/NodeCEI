const submit = document.getElementById("btn");

function getTarea(name, descripcion) {
  let obj = { name, descripcion };
  return obj;
}
const post = async () => {
  try {
    const inputTareas = document.getElementById("tareas").value;
    const inputDescTareas = document.getElementById("desc-tareas").value;
    await fetch("http://localhost:3000/new-task/", {
      method: "POST",
      body: JSON.stringify(getTarea(inputTareas, inputDescTareas)),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener("click", post);
