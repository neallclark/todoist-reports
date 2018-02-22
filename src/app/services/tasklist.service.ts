import { Injectable } from '@angular/core';
import { Task } from './../models/task';
import { TaskAgeStats } from '../models/taskAgeStats';

@Injectable()
export class TaskListService {
    
    nonRepeatingTasks(tasks: Array<Task>) : Array<Task> {
        return tasks ? tasks.filter(t => !t.repeating) : null;
    }

    repeatingTasks(tasks: Array<Task>) : Array<Task> {
        return tasks ? tasks.filter(t => t.repeating) : null;
    }

    scheduledTasks(tasks: Array<Task>) : Array<Task> {
        return tasks ? tasks.filter(t => t.due !== null) : null;
    }
    
    unscheduledTasks(tasks: Array<Task>) : Array<Task> {
        return tasks ? tasks.filter(t => t.due == null) : null;
    }

    minAge(tasks: Array<Task>) : number {
        return tasks ? this.nonRepeatingTasks(tasks)
                   .reduce((min, t) => t.age < min ? t.age : min, tasks[0].age) : null;
    }
    
    maxAge(tasks: Array<Task>) : number {
        return tasks ? this.nonRepeatingTasks(tasks)
                   .reduce((max, t) => t.age > max ? t.age : max, tasks[0].age) : null;
    }

    averageAge(tasks: Array<Task>) : number {
        let nonRepeatingTasks = this.nonRepeatingTasks(tasks);
        return tasks ? nonRepeatingTasks.reduce((total, t) => total + t.age, nonRepeatingTasks[0].age) 
                                / nonRepeatingTasks.length : null;
    }

    oldestTasks(tasks: Array<Task>, count: number) : Array<Task> {
        return tasks ? this.nonRepeatingTasks(tasks)
                   .sort((a, b) => { return b.age - a.age; } ).slice(0, count) : null;
    }

    sortedByAge(tasks: Array<Task>) : Array<Task> {
        return tasks ? this.nonRepeatingTasks(tasks).sort((a, b) => { return a.age - b.age; } ) : null;
    }

    overdueTasks(tasks: Array<Task>) : Array<Task> {
        return tasks ? tasks.filter(t => t.due != null && new Date(t.due) < new Date()) : null;
    }

    tasksDueBetweenDays(tasks: Array<Task>, startDateOffset: number, endDateOffset: number) {
        let now = new Date();
        return tasks ? tasks.filter(t => t.due != null 
                            && new Date(t.due) >= this.offsetDate(now, startDateOffset) 
                            && new Date(t.due) < this.offsetDate(now, endDateOffset)) : null;
    }


    taskAgeStats(tasks: Array<Task>) : TaskAgeStats {
        return {
            min: this.minAge(tasks),
            max: this.maxAge(tasks),
            average: this.averageAge(tasks)
        };
    }

    cumulativeTaskCountByAge(tasks: Array<Task>) : Array<number> {
        if(!tasks)
            return null;

        //Sort by ascending age order
        let sortedByAge = this.sortedByAge(tasks);

        //find out how many days they spread
        let ageStats = this.taskAgeStats(tasks);
        let diff = ageStats.max - ageStats.min;

        //new array to contain the rolling count
        let data = new Array<number>(diff+1);
        for(let i = 0; i < data.length; i++){
            data[i] = 0;
        }
        
        // generate the data array
        for(let t of sortedByAge) {
            //increment by 1 every array entry >= to the age
             for(let i = t.age - ageStats.min; i <= diff; i++) {
                 data[i] = data[i]+1;
             }
        }

        return data;
    }

    private offsetDate(date: Date, offset: number): Date {
        let oneDay = 1000 * 60 * 60 * 24;
        return new Date(date.getTime() + (oneDay*offset));
    }
}
