const submit = document.getElementById("btn");
const container = document.getElementById("container");
const btnDelete = document.getElementsByTagName("button");

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

    const options = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    };
    document.getElementById("tareas").value = "";
    document.getElementById("desc-tareas").value = "";

    let array = getApi(options);

    array.then((result) => {
      create(result);
    });
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener("click", post);

function deleteTarea(item) {
  return fetch(`http://localhost:3000/tasks/${item}`, {
    method: "DELETE",
  });
}

async function getApi(options) {
  let response = await fetch("http://localhost:3000", options);
  let data = await response.json();
  return data;
}

function create(result) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const par = document.createElement("p");
  const btn = document.createElement("button");
  const btnEdit = document.createElement("button");
  const element = result[result.length - 1];

  h1.append(document.createTextNode(element.tarea));
  div.append(h1);
  h1.classList.add("tarea");
  par.append(document.createTextNode(element.descTarea));
  div.append(par);
  par.classList.add("desc-tarea");
  container.append(div);
  div.classList.add("card");
  btn.append(document.createTextNode("Eliminar tarea"));
  div.append(btn);
  btn.classList.add("btn-delete");
  btnEdit.append(document.createTextNode("editar tarea"));
  div.append(btnEdit);
  btnEdit.classList.add("btn-edit");

  const btnDelete = document.getElementsByClassName("btn-delete");
  const indexOfBtn = btnDelete.length - 1;
  btnDelete[indexOfBtn].setAttribute("id", `${indexOfBtn}`);
  div.setAttribute("id", `div-${indexOfBtn}`);
  btn.addEventListener("click", () => {
    deleteTarea(indexOfBtn);
    const divID = document.getElementById(`div-${indexOfBtn}`);
    divID.remove();
  });

  const btnsEdit = document.getElementsByClassName("btn-edit");
  btnsEdit[indexOfBtn].setAttribute("id", `${indexOfBtn}`);
  btnEdit.addEventListener("click", () => {
    window.location.href = "http://localhost:3000/files/edit-task.html";
  });
}
