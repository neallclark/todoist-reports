import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';

@Component({
    selector: 'tasklist',
    templateUrl: './tasklist.component.html'
})
export class TaskListComponent {
    @Input() tasks: Array<Task>;

    constructor(){}
}