import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../dashboard/shared/todo';
import { TodoService } from '../dashboard/shared/todo-service.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="todo">
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
