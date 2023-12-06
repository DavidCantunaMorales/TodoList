const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();
const puerto = 3000;

conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/tareas', require('./routes/tarea'));

app.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
