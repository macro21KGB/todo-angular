import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../dashboard/shared/todo';
import { TodoService } from '../dashboard/shared/todo-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('animation', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ],
  template: `
  <div @animation class="todo">
    <div>
      <p class="title"> {{ todo.title }} </p>
      <p class="description"> {{ todo.description }} </p>
    </div>
      <input (change)="handleTodoChange(todo)" type="checkbox" [checked]="todo.status" />
  </div>
  `,
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({ required: true }) todo!: Todo;
  todoService = inject(TodoService);

  handleTodoChange(newTodo: Todo) {
    this.todo.status = !this.todo.status;
    this.todoService.updateTodoById(newTodo.id, newTodo);
  }
}
