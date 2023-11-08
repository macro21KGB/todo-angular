import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../dashboard/shared/todo';
import { TodoService } from '../dashboard/shared/todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <form (ngSubmit)="handleSubmit()" [formGroup]="todoForm">
    <input type="text" formControlName="title" placeholder="Title" />
    <input formControlName="description" type="text" placeholder="Description" />
    <button type="submit">Add</button>
  </form>
  `,
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  #generateNumericId() {
    return Math.floor(Math.random() * 1000000);

  }

  handleSubmit() {
    const newTodo: Todo = {
      id: this.#generateNumericId(),
      title: this.todoForm.value.title!,
      status: false,
      description: this.todoForm.value.description!,
    }

    this.todoService.addTodo(newTodo);
    this.router.navigate(['/']);
  }


  constructor(private todoService: TodoService, private router: Router) { }
}
