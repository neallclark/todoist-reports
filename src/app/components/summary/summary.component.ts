import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';
import { TasklistService } from './../../services/tasklist.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() tasks: Array<Task>;
  
  constructor(private _tasklistService: TasklistService){}

  numOfTasks() : number {
      return this.tasks ? this.tasks.length : null;
  }

  numOfRepeatingTasks() : number {
      return this.tasks ? this._tasklistService.repeatingTasks(this.tasks).length : null;
  }
  
  numOfScheduledTasks() : number {
      return this.tasks ? this._tasklistService.scheduledTasks(this.tasks).length : null;
  }
  
  numOfUnscheduledTasks() : number {
      return this.tasks ? this._tasklistService.unscheduledTasks(this.tasks).length : null;
  }
  
  maxAge() : number {
      return this._tasklistService.maxAge(this.tasks);
  }
  
  averageAge() : number {
      return this._tasklistService.averageAge(this.tasks);
  }
  
  nonRepeatingTasks() : Array<Task> {
      return this._tasklistService.nonRepeatingTasks(this.tasks);
  }

  numOfOverdueTasks() : number {
      return this.tasks ? this._tasklistService.overdueTasks(this.tasks).length : null;
  }

  numOfTasksNext7Days() : number {
      return this.tasks ? this._tasklistService.tasksDueBetweenDays(this.tasks,0,7).length : null;
  }
}
