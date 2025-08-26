import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTarea } from './pages/crear-tarea/crear-tarea';
import { ListaTareas } from './pages/lista-tareas/lista-tareas';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CrearTarea, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Administrador de Tareas');
  tareas: string[] = ["TAREA1", "TAREA2"];

  agregarTarea(tarea: string) {
    if (tarea.trim()) {
      this.tareas.push(tarea);
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
