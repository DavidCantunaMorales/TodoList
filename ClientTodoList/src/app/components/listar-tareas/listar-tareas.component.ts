import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { HttpClientModule } from '@angular/common/http';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-listar-tareas',
  standalone: true,
  // tenemos que añadir RouterLink y RouterLinkActive para que funcionen las rutas
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './listar-tareas.component.html',
  styleUrl: './listar-tareas.component.css'
})

export class ListarTareasComponent {

  listTareas: Tarea[] = [];

  constructor(private _tareaService: TareaService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this._tareaService.getTareas().subscribe({
      next: (v) => this.listTareas = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  eliminarTarea(id: any) {
    this._tareaService.eliminarTarea(id).subscribe({
      next: (v) => this.obtenerTareas(),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}
