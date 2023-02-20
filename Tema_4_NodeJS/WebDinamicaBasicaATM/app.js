const express = require("express");
const app = express();
const puertoServidor = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Introduce el nombre y la edad para comprobar");
});

app.get("/:nombre/:edad", (req, res) => {
  let nombre = req.params.nombre;
  let edad = req.params.edad;
  let mayoria;
  if (edad === undefined) {
    res.render("resultadonombre.ejs");
  } else {
    if (edad >= 18) {
      mayoria = "eres mayor de edad";
    } else {
      mayoria = "eres menor de edad";
    }
    res.render("resultadocompleto.ejs", { nombre: nombre, mayoria: mayoria });
  }
});

app.listen(puertoServidor, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
