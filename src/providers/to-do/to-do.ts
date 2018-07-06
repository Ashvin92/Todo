import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToDoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoProvider {

  private todos=[];
  private todoArchive=[]

  constructor(public http: HttpClient) {
    console.log('Hello ToDoProvider Provider');
  }

getTodos()
{
  return this.todos;
}
addTodo(todo)
{
  return this.todos.push(todo);
}

editItemName(todoIndex,data)
{
  this.todos[todoIndex]=data;
}

archiveTodo(todoIndex)
{
let item = this.todos[todoIndex];
console.log(item);
this.todos.splice(todoIndex,1);
this.todoArchive.push(item);
}

getArchivedata()
{
  return this.todoArchive;
}
restoreData(todoIndex)
{
let item = this.todoArchive[todoIndex];
console.log(item);
this.todoArchive.splice(todoIndex,1);
this.addTodo(item);
}

deleteArchive(todoIndex)
{
  this.todoArchive.splice(todoIndex,1);

}

}
