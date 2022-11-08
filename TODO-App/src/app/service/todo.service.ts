import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService{
  localdata:any;
  public todos: Todo[] = []; 
  constructor() { 
    this.localdata = localStorage.getItem('localData');
  }

  getAllTodos(): Todo[] {
    this.localdata = localStorage.getItem('localData');
    if (this.localdata !== null) {
      this.todos = JSON.parse(this.localdata);
      console.log('Second');
    } else {
      var todoArrayData = [
        {
          id: 1,
          title: 'Prof.',
          salution: 'Mr.',
          firstName: 'Mark',
          middleName: 'Jacob',
          lastName: 'Otto',
          phone: '1234567890',
          email: 'mark_otto@gmail.com'
        },
        {
          id: 2,
          title: 'Dr.',
          salution: 'Mr.',
          firstName: 'Jacob',
          middleName: 'Mark',
          lastName: 'Thornton',
          phone: '0987654321',
          email: 'jacob_thornton@gmail.com'
        }
      ];
      localStorage.setItem('localData', JSON.stringify(todoArrayData));
      this.todos = JSON.parse(this.localdata);
      console.log('First');
    }
    return this.todos;
  }

  getTodoById(id: number): Todo {
    var todoArray = JSON.parse(this.localdata);
    console.log(todoArray);
    return todoArray
      .filter((todo: { id: number; }) => todo.id === id)
      .pop();
  }

  updateTodoById(todo: Todo): Todo {
    if (todo.id === 0) {
      var todoArray = JSON.parse(this.localdata);
      var todoid = todoArray.length;
      todo.id = ++todoid;
      todoArray.push(todo);
      localStorage.setItem('localData', JSON.stringify(todoArray));
    } else {
      var todoSaveArray = JSON.parse(this.localdata);
      for (var i in todoSaveArray) {
        if (todoSaveArray[i].id === todo.id) {
          todoSaveArray[i] = todo;
          localStorage.setItem('localData', JSON.stringify(todoSaveArray));
        }
      }
    }
    return todo;
  }

  deleteTodoDetail(id: any) {
    var todoArray = JSON.parse(this.localdata);
    for (var i in todoArray) {
      if (todoArray[i].id === id) {
        todoArray.splice(i, 1);
        localStorage.setItem('localData', JSON.stringify(todoArray));
      }
    }
  };
}
