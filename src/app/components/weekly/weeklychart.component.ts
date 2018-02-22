import { Component, Input, OnChanges } from '@angular/core';
import { Task } from './../../models/task';
import { TaskListService } from '../../services/tasklist.service';
import { Chart } from 'chart.js'

@Component({
    selector: 'weeklychart',
    templateUrl: './weeklychart.component.html'
})
export class WeeklyChartComponent implements OnChanges {
    @Input() tasks: Array<Task>;

    constructor(private _tasklistService: TaskListService){}

    ngOnChanges() {
        if(this.tasks == null)
            return;

        this.chart = new Chart('canvas.weekly', {
            type: 'bar',
            data: {
              labels: ['0', '1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                { 
                  data: this.getCounts(),
                  borderColor: "#3cba9f",
                  backgroundColor: "#3cba9f",
                  fill: true
                }
              ]
            },
            options: {
              responsive: true,
              legend: {
                display: false
              }
            }
          });
    }

    chart: Chart;

    getCounts() : Array<any> {
        if(this.tasks == null) {
            return [{ data: [], label: 'Tasks' }];
        }
        else {
            let now = new Date();
            return [
                        this._tasklistService.overdueTasks(this.tasks).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 0, 1).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 1, 2).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 2, 3).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 3, 4).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 4, 5).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 5, 6).length,
                        this._tasklistService.tasksDueBetweenDays(this.tasks, 6, 7).length
                    ];
        }
    }
}