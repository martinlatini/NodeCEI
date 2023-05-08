const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let arrTareas = [];

app.listen(3000, () => {
  console.log("server starting on port 3000");
});

app.get("/", (req, res) => {
  res.status(200).send(arrTareas);
});

app.use(bodyParser.json());

app.post("/new-task/", (req, res) => {
  const tarea = req.body.name;
  const descTarea = req.body.descripcion;
  const obj = { tarea, descTarea };
  arrTareas.push(obj);
  res.status(201).send(`Tarea creada con la tarea ${tarea}, ${descTarea}`);
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const actulizarNombre = req.body.name;
  const actualizarDescripcion = req.body.descripcion;
  const obj = { actulizarNombre, actualizarDescripcion };
  arrTareas.push(obj);
  res.status(200).send(`tarea ${id} actualizada`);
});

app.delete("/tasks/delete/:id", (req, res) => {
  const id = req.params.id;
  const indexID = arrTareas.indexOf(id);
  arrTareas.splice(indexID, 1);
  res.send(`Tarea ${id} eliminada con exito`);
});
