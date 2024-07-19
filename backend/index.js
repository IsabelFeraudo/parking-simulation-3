// backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

/*// Simulación de datos basada en parámetros
const simulateData = (cantidadDeFilas, filaDesde, filaHasta) => {
  // Aquí deberías agregar la lógica para simular los datos según los parámetros
  const eventos = []; // Genera eventos basados en la cantidadDeFilas y otros parámetros

  // Para simplicidad, solo generamos eventos de ejemplo
  for (let i = filaDesde; i <= filaHasta; i++) {
    eventos.push({
      nombre: `Evento ${i}`,
      tiempoActual: i,
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
    });
  }

  return { eventos };
};
*/
app.get('/api/data', (req, res) => {
  const { cantidadDeFilas, filaDesde, filaHasta } = req.query;
  const data = simulateData(Number(cantidadDeFilas), Number(filaDesde), Number(filaHasta));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
