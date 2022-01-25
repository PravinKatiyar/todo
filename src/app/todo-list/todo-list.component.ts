import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos : Todo[] = [];
  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTodos();
  }

  private getTodos(){
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
      console.log(data);
    });
  }

  todoDetails(id: number ){
    this.router.navigate(['todo-details', id]);
  }

  updateTodo(id: number ){
    this.router.navigate(['update-todo', id]);
  }

  completeTodo(id:number){
    this.todoService.completeTodo(id).subscribe( data => {
      console.log(data);
      this.getTodos();
    })
  }

  deleteTodo(id: number,topic: string ){
    if(confirm("Are you sure to delete task "+topic+" ?")) {
    this.todoService.deleteTodo(id).subscribe( data => {
      console.log(data);
      this.getTodos();
    })}
  }

}
