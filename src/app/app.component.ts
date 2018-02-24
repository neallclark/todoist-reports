import { Component } from '@angular/core';
import { Task } from './models/task';
import { TodoistService } from './services/todoist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
