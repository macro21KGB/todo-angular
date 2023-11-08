import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [CommonModule],
  template: `
<button (click)="addNewTodoEvent.emit()" class="fab">
  <ng-content />
</button>
  `,
  styleUrl: './fab.component.css'
})
export class FabComponent {
  @Output() addNewTodoEvent = new EventEmitter();
}
