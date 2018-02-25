"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var summary_component_1 = require("./components/summary/summary.component");
var tasklist_component_1 = require("./components/tasklist/tasklist.component");
var oldest_component_1 = require("./components/oldest/oldest.component");
var weeklychart_component_1 = require("./components/weekly/weeklychart.component");
var cumulative_count_chart_component_1 = require("./components/cumulativecount/cumulative.count.chart.component");
var apikey_component_1 = require("./components/apikey/apikey.component");
var projectinfo_component_1 = require("./components/projectinfo/projectinfo.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var todoist_service_1 = require("./services/todoist.service");
var tasklist_service_1 = require("./services/tasklist.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule
        ],
        declarations: [
            app_component_1.AppComponent,
            summary_component_1.SummaryComponent,
            tasklist_component_1.TaskListComponent,
            oldest_component_1.OldestComponent,
            weeklychart_component_1.WeeklyChartComponent,
            cumulative_count_chart_component_1.CumulativeCountChartComponent,
            apikey_component_1.ApiKeyComponent,
            projectinfo_component_1.ProjectInfoComponent,
            navbar_component_1.NavbarComponent
        ],
        providers: [todoist_service_1.TodoistService, tasklist_service_1.TaskListService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map