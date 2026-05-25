import express from "express";
import fs from "fs";

const PORT = 3000;
const app = express();

const dataCities = fs.readFileSync("./cities.json", "utf-8");
const cities = JSON.parse(dataCities).localidades;

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "API de localidades de la Provincia de Buenos Aires",
    data: {
      endpoints: [

        { path: "/localidades", description: "Lista completa de localidades" },
        { path: "/localidades/:id", description: "Busca localidad por ID" },
        { path: "/localidades/buscar?nombre=nombrelocalidad", description: "Busca localidad por nombre" }
     
      ]
    }
  });
});

app.get("/localidades", (req, res) => {
  res.json({ status: 200, message: "Listado completo", data: cities });
});
app.get("/localidades/:id", (req, res) => {
  const { id } = req.params;
  const localidad = cities.find(l => l.id === id);

  if (localidad) {
    res.json({ status: 200, message: "Localidad encontrada", data: localidad });
  } else {
    res.status(404).json({ status: 404, message: "Localidad no encontrada" });
  }
});

app.get("/localidades/buscar", (req, res) => {
  const { nombre } = req.query;
  if (!nombre) {
    return res.status(400).json({ status: 400, message: "Debe indicar un parámetro 'nombre'" });
  }

  const normalize = (str) =>
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const resultados = cities.filter(l =>
    normalize(l.nombre).includes(normalize(nombre))
  );

  if (resultados.length > 0) {
    res.json({ status: 200, message: "Resultados encontrados", data: resultados });
  } else {
    res.status(404).json({ status: 404, message: "No se encontraron localidades" });
  }
});

app.use((req, res) => {
  res.status(404).json({ status: 404, message: "Ruta inexistente" });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
