import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    private baseURL = "https://todo-java-backend-app.herokuapp.com/api/v1/todos";

    constructor(private httpClient: HttpClient) { }
    
    getTodoList(): Observable<Todo[]>{
      return this.httpClient.get<Todo[]>(`${this.baseURL}`);
    }
  
    createTodo(todo: Todo): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, todo);
    }
  
    getTodoById(id: number): Observable<Todo>{
      console.log(id);
      return this.httpClient.get<Todo>(`${this.baseURL}/${id}`);
    }
  
    updateTodo(id: number, todo: Todo): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, todo);
    }

    completeTodo(id: number): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/status/${id}`,{});
    }
  
    deleteTodo(id: number = 0): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  }
