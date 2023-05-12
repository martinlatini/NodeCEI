import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("/files/", express.static("public"));

let arrTareas = [];

app.listen(3000, () => {
  console.log("server starting on port 3000");
});

app.get("/", (req, res) => {
  res.status(200).send(arrTareas);
});

app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id) || arrTareas[id] === undefined) {
    res.status(400).send("el id de la tarea no es un numero o no existe.");
    return;
  }

  const tarea = arrTareas[id];
  res.status(200).send(tarea);
});

app.post("/new-task/", (req, res) => {
  const tarea = req.body.name;
  const descTarea = req.body.descripcion;
  const obj = { tarea, descTarea };
  if (tarea) {
    arrTareas.push(obj);
    res
      .status(201)
      .send(`Tarea ${tarea} creada, con la descripcion:${descTarea}`);
  } else {
    res.status(400).send("es obligatorio indicar una tarea");
  }
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id) || arrTareas[id] === undefined) {
    res.status(400).send("el id de la tarea no es un numero o no existe.");
    return;
  }
  const tarea = req.body.name;
  if (!tarea) {
    res.status(400).send("La propiedad tarea del body no tiene valor");
    return;
  }
  const descTarea = req.body.descripcion;
  const obj = { tarea, descTarea };
  arrTareas[id] = obj;
  res.status(200).send(`tarea ${id} actualizada`);
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isNaN(id) || arrTareas[id] === undefined) {
    res.status(400).send("el id de la tarea no es un numero o no existe.");
    return;
  }
  arrTareas.splice(id, 1);
  res.send(`Tarea ${id} eliminada con exito`);
});
