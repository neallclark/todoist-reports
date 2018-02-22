import { Task } from './task'
export interface TasksResponse {
    data: AllTasks;
}

export interface AllTasks {
    allTasks: Array<Task>;
}