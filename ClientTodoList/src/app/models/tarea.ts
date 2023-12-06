export class Tarea {
    _id?: number; // opcional, se proporciona ya en el mongoDB
    titulo: string;
    descripcion: string;
    fechaCreacion: string;
    fechaVencimiento: string;
    completada: string;

    // Constructor
    constructor(titulo: string, descripcion: string, fechaCreacion: string, fechaVencimiento: string, completada: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.fechaVencimiento = fechaVencimiento;
        this.completada = completada;
    }
}

