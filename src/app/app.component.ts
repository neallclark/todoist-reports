import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoistService } from './services/todoist.service';
import { Task } from './models/task';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent{ 
  
  public tasks: Array<Task>;
   constructor(private _todoistService: TodoistService){}

  onApiKeyEntered(apiKey: string) {
    this.getTasks(apiKey);
  }

  getTasks(apiKey: string) {
    this._todoistService.getTasks(apiKey).subscribe(
      data => {
        this.tasks = data.data.allTasks;
      }
    );
  }
}