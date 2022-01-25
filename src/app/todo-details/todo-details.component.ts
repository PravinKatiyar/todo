import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo();
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.todo = new Todo();
    this.todoService.getTodoById(this.id).subscribe( data => {
      this.todo = data;
    });
  }
}
