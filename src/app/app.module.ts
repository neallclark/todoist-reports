import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TaskListComponent } from './components/tasklist/tasklist.component';
import { OldestComponent } from './components/oldest/oldest.component';
import { WeeklyChartComponent } from './components/weekly/weeklychart.component';
import { CumulativeCountChartComponent } from './components/cumulativecount/cumulative.count.chart.component';
import { ApiKeyComponent } from './components/apikey/apikey.component';
import { ProjectInfoComponent } from './components/projectinfo/projectinfo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TodoistService } from './services/todoist.service';
import { TaskListService} from './services/tasklist.service';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpClientModule
                ],
  declarations: [ 
                  AppComponent,
                  SummaryComponent,
                  TaskListComponent,
                  OldestComponent,
                  WeeklyChartComponent,
                  CumulativeCountChartComponent,
                  ApiKeyComponent,
                  ProjectInfoComponent,
                  NavbarComponent
                ],
  providers:    [ TodoistService, TaskListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
