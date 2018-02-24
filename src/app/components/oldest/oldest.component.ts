import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';
import { TasklistService } from './../../services/tasklist.service';

@Component({
  selector: 'app-oldest',
  templateUrl: './oldest.component.html',
  styleUrls: ['./oldest.component.css']
})
export class OldestComponent {
  @Input() tasks: Array<Task>;
  
  constructor(private _tasklistService: TasklistService){}
  
  oldestTasks() : Array<Task> {
    return this._tasklistService.oldestTasks(this.tasks, 8);
  }
}
