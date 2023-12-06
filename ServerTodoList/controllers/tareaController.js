const Tarea = require("../models/Tarea");

exports.crearTarea = async (req, res) => {
    try {
        let tarea = new Tarea(req.body);
        await tarea.save();
        res.send(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error');
    }
}


exports.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error');
    }
}


exports.actualizarTarea = async (req, res) => {
    try {
        const { titulo, descripcion, fechaCreacion, fechaVencimiento, completada } = req.body;
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            res.status(404).json({ msg: "No existe la tarea" })
        }

        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
        tarea.fechaCreacion = fechaCreacion;
        tarea.fechaVencimiento = fechaVencimiento;
        tarea.completada = completada;

        tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, tarea, { new: true });
        res.json(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error');
    }
}


exports.obtenerTarea = async (req, res) => {
    try {
        
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            res.status(404).json({ msg: "No existe la tarea" })
        }

        res.json(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error');
    }
}



exports.eliminarTarea = async (req, res) => {
    try {
        
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            res.status(404).json({ msg: "No existe la tarea" })
        }

        await Tarea.findOneAndDelete({ _id: req.params.id });

        res.json({ msg: "Tarea eliminada con exito" });

    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error');
    }
}

