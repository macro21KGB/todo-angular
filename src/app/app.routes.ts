import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add-todo',
    loadComponent: () => import("./add-todo/add-todo.component").then(m => m.AddTodoComponent)
  }
];
