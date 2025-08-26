import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  imports: [],
  templateUrl: './tarea-item.html',
  styleUrl: './tarea-item.css'
})
export class TareaItem {
  @Input() nombreTarea: string = '';
  @Input() index: number = 0;
  @Output() tareaEliminada = new EventEmitter<number>();

  eliminarTarea() {
    this.tareaEliminada.emit(this.index);
  }
}
