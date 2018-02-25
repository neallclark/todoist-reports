"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tasklist_service_1 = require("../../services/tasklist.service");
var chart_js_1 = require("chart.js");
var WeeklyChartComponent = (function () {
    function WeeklyChartComponent(_tasklistService) {
        this._tasklistService = _tasklistService;
    }
    WeeklyChartComponent.prototype.ngOnChanges = function () {
        if (this.tasks == null)
            return;
        this.chart = new chart_js_1.Chart('canvas.weekly', {
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
    };
    WeeklyChartComponent.prototype.getCounts = function () {
        if (this.tasks == null) {
            return [{ data: [], label: 'Tasks' }];
        }
        else {
            var now = new Date();
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
    };
    return WeeklyChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WeeklyChartComponent.prototype, "tasks", void 0);
WeeklyChartComponent = __decorate([
    core_1.Component({
        selector: 'weeklychart',
        templateUrl: './weeklychart.component.html'
    }),
    __metadata("design:paramtypes", [tasklist_service_1.TaskListService])
], WeeklyChartComponent);
exports.WeeklyChartComponent = WeeklyChartComponent;
//# sourceMappingURL=weeklychart.component.js.map