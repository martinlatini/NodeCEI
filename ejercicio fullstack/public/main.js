const container = document.getElementById("container");
const btnDelete = document.getElementsByTagName("button");

const options = {
  method: "GET",
  body: JSON.stringify(),
  headers: {
    "Content-Type": "application/json",
  },
};

async function getApi(options) {
  let response = await fetch("http://localhost:3000", options);
  let data = await response.json();
  return data;
}

let array = getApi(options);

array.then((result) => {
  for (let i = 0; i < result.length; i++) {
    const btn = document.createElement("button");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const par = document.createElement("p");
    const element = result[i];
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
    const btnDelete = document.getElementsByClassName("btn-delete");
    const indexOfBtn = btnDelete.length - 1;
    btnDelete[indexOfBtn].setAttribute("id", `${indexOfBtn}`);

    for (let j = 0; j < btnDelete.length; j++) {
      const value = btnDelete[j].getAttribute("id");
      const element = btnDelete[j];
    }
  }
});

function deleteTarea(item) {
  return fetch(`http://localhost:3000/tasks/${item}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
