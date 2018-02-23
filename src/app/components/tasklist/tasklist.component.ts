import { Component, Input } from '@angular/core';
import { Task } from './../../models/task';

@Component({
    selector: 'tasklist',
    templateUrl: './tasklist.component.html'
})
export class TaskListComponent {
    @Input() tasks: Array<Task>;

    constructor(){}

    formatDate(date: string) : string{
        if(date == null || date.length == 0)
            return "";

        let d = new Date(date);
        return d.toDateString();
    }
}