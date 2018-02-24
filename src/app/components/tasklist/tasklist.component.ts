import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() tasks: Array<Task>;
  
  constructor(){}

  formatDate(date: string) : string{
    if(date == null || date.length == 0)
        return "";

    let d = new Date(date);
    return d.toDateString();
  }
}
