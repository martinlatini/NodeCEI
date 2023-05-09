const list = document.getElementById("list");
const listItem = document.createElement("li");

const options = {
  method: "GET",
  body: JSON.stringify(),
  headers: {
    "Content-Type": "application/json",
  },
};

let arrayTareas = async function getApi(options) {
  let response = await fetch("http://localhost:3000", options);
  let data = await response.json();
  return data;
};

let array = arrayTareas(options);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  element.then((result) => {
    list.append(result.tarea, listItem);
  });
}
/* 
let response = arr.then((result) => {
  list.append(result[0], listItem);
});
 */
