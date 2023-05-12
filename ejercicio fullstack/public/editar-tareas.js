async function editarTarea(id) {
  const inputTareas = document.getElementById("tareas").value;
  const inputDescTareas = document.getElementById("desc-tareas").value;
  let response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(getTarea(inputTareas, inputDescTareas)),
    headers: { "Content-Type": "application/json" },
  });
  let data = response.json();
  return data;
}
