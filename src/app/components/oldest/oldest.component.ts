import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';
import { TaskListService } from '../../services/tasklist.service';

@Component({
    selector: 'oldest',
    templateUrl: './oldest.component.html'
})
export class OldestComponent {
    @Input() tasks: Array<Task>;

    constructor(private _tasklistService: TaskListService){}

    oldestTasks() : Array<Task> {
        return this._tasklistService.oldestTasks(this.tasks, 8);
    }
}