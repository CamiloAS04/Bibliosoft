// backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors()); // Permite que el frontend (otro dominio) consuma la API
app.use(express.json());

// Importar rutas
const rutas = require("./routes"); // Ajusta si tienes index.js dentro de /routes
app.use("/api", rutas);

// Puerto dinámico para Render o 3000 en local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
