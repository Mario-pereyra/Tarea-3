import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css'
})
export class CrearTarea {
  nuevaTarea = '';
  @Output() tareaCreada = new EventEmitter<string>();

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareaCreada.emit(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }
}
