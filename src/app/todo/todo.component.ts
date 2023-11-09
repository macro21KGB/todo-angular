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
      state('not-selectd', style({
        opacity: 1,

      })),

      state('selected', style({
        backgroundColor: 'green',
        color: 'white',
        opacity: 1,
      })),

      transition(':enter', [
        animate('0.5s ease-in-out')
      ]),

      transition(':leave', [
        animate('0.5s ease-in-out')
      ]),

      transition('not-selected => selected', [
        animate('0.2s ease-in-out')
      ]),

      transition('selected => not-selected', [
        animate('0.2s ease-in-out')
      ])
    ])
  ],
  template: `
  <div [@animation]="this.todo.status ? 'selected' : 'not-selected'" [ngClass]="{'selected': this.todo.status}" class='todo'>
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
