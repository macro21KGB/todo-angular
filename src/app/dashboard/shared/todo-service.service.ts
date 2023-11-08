import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      status: true

    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      status: false

    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
      status: true

    },
    {
      id: 4,
      title: 'Todo 4',
      description: 'Description 4',
      status: false

    },
    {
      id: 5,
      title: 'Todo 5',
      description: 'Description 5',
      status: true

    },
    {
      id: 6,
      title: 'Todo 6',
      description: 'Description 6',
      status: false

    },
    {
      id: 7,
      title: 'Todo 7',
      description: 'Description 7',
      status: true

    },
    {
      id: 8,
      title: 'Todo 8',
      description: 'Description 8',
      status: false

    },
    {
      id: 9,
      title: 'Todo 9',
      description: 'Description 9',
      status: true

    },
    {
      id: 10,
      title: 'Todo 10',
      description: 'Description 10',
      status: false

    },
    {
      id: 11,
      title: 'Todo 11',
      description: 'Description 11',
      status: true

    },
    {
      id: 12,
      title: 'Todo 12',
      description: 'Description 12',
      status: false

    },
    {
      id: 13,
      title: 'Todo 13',
      description: 'Description 13',
      status: true

    },
    {
      id: 14,
      title: 'Todo 14',
      description: 'Description 14',
      status: false

    },
    {
      id: 15,
      title: 'Todo 15',
      description: 'Description 15',
      status: true

    },
    {
      id: 16,
      title: 'Todo 16',
      description: 'Description 16',
      status: false

    },
    {
      id: 17,
      title: 'Todo 17',
      description: 'Description 17',
      status: true

    }
  ]

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id == id);
  }

  updateTodoById(id: number, values: Partial<Todo> = {}) {
    let todo = this.getTodoById(id);
    if (todo) {
      Object.assign(todo, values);
    }
    return todo;
  }

  deleteAllDoneTodos() {
    this.todos = this.todos.filter((todo) => !todo.status);
  }

}
