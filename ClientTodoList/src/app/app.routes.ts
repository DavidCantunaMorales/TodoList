import { Routes } from '@angular/router';

// componentes
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

// las rutas de mi aplicacions
export const routes: Routes = [
    { path: 'crear-tarea', component: CrearTareaComponent }, // rutas
    { path: 'editar-tarea/:id', component: CrearTareaComponent }, // rutas
    { path: '', component: ListarTareasComponent },  // se va a cargar por defecto apenas ingrese
    { path: '**', redirectTo: '', pathMatch: 'full' } // en caso de que no exista la ruta se dirije al principal
];
