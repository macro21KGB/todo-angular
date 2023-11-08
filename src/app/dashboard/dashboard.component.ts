import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './shared/todo-service.service';
import { TodoComponent } from '../todo/todo.component';
import { FabComponent } from '../fab/fab.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TodoComponent, FabComponent],
  template: `
      <button (click)="deleteAllDoneTodos()">Delete all done tasks</button>
      <div id="todo-list" auto-animate>
        @for (todo of getTodos(); track todo.id ) {
          <app-todo [todo]="todo"/>
        } @empty {
          <div class="no-todos">No todos, create one</div>
        }
      </div>
      <br />
      <br />
      <br />
      <app-fab (addNewTodoEvent)="navigateToAddTodoPage()">
        Add
        <svg height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </app-fab>

  `,
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  todoService = inject(TodoService)
  router = inject(Router);

  navigateToAddTodoPage() {
    this.router.navigate(['/add-todo']);
  }

  getTodos() {
    return this.todoService.getTodos();
  }

  deleteAllDoneTodos() {
    this.todoService.deleteAllDoneTodos();
  }

}
