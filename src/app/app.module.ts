import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApikeyComponent } from './components/apikey/apikey.component';
import { CumulativeCountChartComponent } from './components/cumulative-count-chart/cumulative-count-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OldestComponent } from './components/oldest/oldest.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { WeeklyChartComponent } from './components/weekly-chart/weekly-chart.component';

import { TodoistService } from './services/todoist.service';
import { TasklistService } from './services/tasklist.service';

@NgModule({
  declarations: [
    AppComponent,
    ApikeyComponent,
    CumulativeCountChartComponent,
    NavbarComponent,
    OldestComponent,
    ProjectInfoComponent,
    SummaryComponent,
    TasklistComponent,
    WeeklyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ TodoistService, TasklistService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
