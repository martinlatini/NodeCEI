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
    create(result);
  }
});

function deleteTarea(item) {
  return fetch(`http://localhost:3000/tasks/${item}`, {
    method: "DELETE",
  });
}
