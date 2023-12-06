import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})

export class CrearTareaComponent implements OnInit {

  tareaForm: FormGroup;
  titulo = 'CREAR TAREA';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private _tareaService: TareaService,
    private aRoute: ActivatedRoute) {

    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: [this.getFechaActual(), Validators.required],
      fechaVencimiento: ['', Validators.required],
      completada: ['', Validators.required],
    })

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  getFechaActual(): string {
    const fechaActual = new Date();
    fechaActual.setUTCHours(fechaActual.getUTCHours() - 5);
    return fechaActual.toISOString().split('T')[0];
  }

  crearTarea() {

    const TAREA: Tarea = {
      titulo: this.tareaForm.get('titulo')?.value,
      descripcion: this.tareaForm.get('descripcion')?.value,
      fechaCreacion: this.tareaForm.get('fechaCreacion')?.value,
      fechaVencimiento: this.tareaForm.get('fechaVencimiento')?.value,
      completada: this.tareaForm.get('completada')?.value,
    }

    if (this.id !== null) {
      // Editamos la tarea
      this._tareaService.editarTarea(this.id, TAREA).subscribe({
        next: (v) => {
          this.router.navigate(['/']);
        },
        error: (e) => {
          console.error(e)
          this.tareaForm.reset();
        },
        complete: () => console.info('complete')
      });
    } else {
      // Agregamos tarea
      console.log(TAREA);

      this._tareaService.guardarTarea(TAREA).subscribe({
        next: (v) => {
          console.log("La tarea se guardo con exito"),
            this.router.navigate(['/']);
        },
        error: (e) => {
          console.error(e),
            this.tareaForm.reset();
        },
        complete: () => console.info('complete')
      })
    }
  }

  esEditar() {
    if (this.id != null) {
      this.titulo = 'EDITAR TAREA';
      this._tareaService.obtenerTarea(this.id).subscribe({
        next: (v) => {
          this.tareaForm.setValue({
            titulo: v.titulo,
            descripcion: v.descripcion,
            fechaCreacion: v.fechaCreacion,
            fechaVencimiento: v.fechaVencimiento,
            completada: v.completada
          })
        },
        error: (e) => {
          console.error(e)
        },
        complete: () => console.info('complete')
      })
    }
  }
}
