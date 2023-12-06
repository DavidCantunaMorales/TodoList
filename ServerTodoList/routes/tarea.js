// rutas para las tareas

const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

// API -> Tareas
router.post('/', tareaController.crearTarea);
router.get('/', tareaController.obtenerTareas);
router.put('/:id', tareaController.actualizarTarea);
router.get('/:id', tareaController.obtenerTarea);
router.delete('/:id', tareaController.eliminarTarea);




module.exports = router;