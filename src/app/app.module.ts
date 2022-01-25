import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';



import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoDetailsComponent,
    TodoListComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
  
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
