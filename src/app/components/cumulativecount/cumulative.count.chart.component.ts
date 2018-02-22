import { Component, Input, OnChanges } from '@angular/core';
import { Task } from './../../models/task';
import { TaskListService } from '../../services/tasklist.service';
import { Chart } from 'chart.js';


@Component({
    selector: 'cumulativecountchart',
    templateUrl: './cumulative.count.chart.component.html'
})
export class CumulativeCountChartComponent implements OnChanges {
    @Input() tasks: Array<Task>;

    constructor(private _taskListService: TaskListService){}

    ngOnChanges() {
        if(this.tasks == null)
            return;

        this.chart = new Chart('canvas.cumulative', {
            type: 'line',
            data: {
              labels: this.getLabels(),
              datasets: [
                { 
                  data: this.getCounts(),
                  borderColor: "#3cba9f",
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
    
    nonRepeatingTasks() : Array<Task> {
        return this._taskListService.nonRepeatingTasks(this.tasks);
    }

    getLabels() : Array<string> {
        if(!this.tasks)
            return null;
                     
        let ageStats = this._taskListService.taskAgeStats(this.tasks);
        let ageSpread = ageStats.max - ageStats.min;
        let newLabels = new Array<string>(ageSpread+1);
        for(let i = 0; i < ageSpread; i++){newLabels[i] = `${i + ageStats.min}`}
        return newLabels;
    }

    getCounts() : Array<any> {
        return this.tasks == null ? [] : this._taskListService.cumulativeTaskCountByAge(this.tasks);
    }
}