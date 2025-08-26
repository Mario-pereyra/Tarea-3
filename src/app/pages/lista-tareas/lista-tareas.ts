import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaItem } from '../tarea-item/tarea-item';

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule, TareaItem],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css'
})
export class ListaTareas {
  @Input() tareas: string[] = [];
  @Output() tareaEliminada = new EventEmitter<number>();

  eliminarTarea(index: number) {
    this.tareaEliminada.emit(index);
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }
}
