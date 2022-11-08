import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToasterService } from 'src/app/service/toaster.service';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  public todoId: string | undefined;
  public todoDetail = <Todo>{};
  public mode!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private toast: ToasterService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      if (this.todoId !== undefined) {
        console.log("todoID:", this.todoId);
        this.getTodoDetailById(this.todoId);
        this.mode = 'Edit';
      } else {
        // this.todoId = null;
        console.log(this.todoId);
        this.todoDetail['id'] = 0;
        this.mode = 'Add';
      }
    });
  }

  getTodoDetailById(id: string) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
    console.log(this.todoDetail);
  }

  onTodoSubmitForm(form: { valid: any; }) {
    console.log(form);
    if (form.valid) {
      console.log("detail:", this.todoDetail);
      this.todoService.updateTodoById(this.todoDetail);
      this.toast.showSuccess("Added successfully");
      this.router.navigate(['/todo-list']);
    } else {
      this.toast.showError("Error Occured");
    }
  }

  onClickCancel() {
    if (confirm("Do you want discard all changes? ")) {
      this.router.navigate(['/todo-list']);
    }
  }

}
