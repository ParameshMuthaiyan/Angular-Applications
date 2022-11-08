import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailRoutingModule } from './todo-detail-routing.module';
import { TodoDetailComponent } from './todo-detail.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';


@NgModule({
  declarations: [
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoDetailModule { }
