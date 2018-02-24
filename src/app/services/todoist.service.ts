import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from './../models/task';
import { TasksResponse } from './../models/tasks-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class TodoistService {

  constructor(private http:HttpClient) {}
  
     private tasks : Observable<TasksResponse>;
 
     getTasks(apiKey: string) : Observable<TasksResponse>{
         if(this.tasks == null) {
             var query = `{allTasks(key:"${apiKey}"){id content completed priority dateString due dateAdded repeating age}}`;
             this.tasks = this.http.get<TasksResponse>(`http://localhost:4000/graphql?query=${query}`);
         }
 
         return this.tasks;
     }
}
