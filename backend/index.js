// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Simulación de datos
const simulateData = () => {
  // Aquí deberías agregar la lógica para simular los datos según tu código proporcionado
  return {
    eventos: [
      // Datos de ejemplo
      {
        nombre: 'Evento Llegada Auto',
        tiempoActual: 0,
        randomLlegada: Math.random(),
        proximaLlegada: Math.random() * 10,
        randomFinEstacionamiento: Math.random(),
        tiempoFinEstacionamiento: Math.random() * 100,
        randomTamano: Math.random(),
        tamanoVehiculo: 'pequeño',
        finCobro: 0,
        estadoCaja: 'libre',
        cantidadAutosEnColaCaja: 0,
        cantidadLugaresDisponibles: 10,
        cantidadAutosPagaron: 0,
        totalAcumulado: 0,
        estadoAutos: []
      }
    ]
  };
};

app.get('/api/data', (req, res) => {
  res.json(simulateData());
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
