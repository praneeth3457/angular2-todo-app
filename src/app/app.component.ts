import { Component } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  todos = [];
  totalTodos:number = 0;
  completedTodos:number = 0;
  nCompletedTodos:number = 0;
  isBtn:number = 0;

  addTodo = function(){
    let newTodo: Todo = new Todo();
    if(this.todos.length > 0){
      newTodo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      newTodo.id = this.todos.length + 1;
    }

    newTodo.title = this.newTodoTitle;
    this.todos.push(newTodo);
    this.getTodoNumber();
    this.newTodoTitle = '';
  };

  toggleTodoComplete = function (todo : Todo) {
    let complete = !todo.complete;
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i].id === todo.id){
        this.todos[i].complete = complete;
      }
    }
    this.getTodoNumber();
  };

  getTodoNumber = function(){
    this.totalTodos = this.todos.length;
    let complete:number = 0;
    for(let j=0; j<this.todos.length; j++) {
      if(this.todos[j].complete == true){
        complete++;
      }
    }
    this.completedTodos = complete;
    this.nCompletedTodos = this.totalTodos - this.completedTodos;
  };

  showBtn = function(todo: Todo) {
    this.isBtn = todo.id;
  };

  hideBtn = function(todo: Todo) {
    this.isBtn = 0;
  };

  deleteTodo = function (todo: Todo){
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i].id == todo.id){
        this.todos.splice(i, 1);
      }
    }
    this.getTodoNumber();
  };

}
