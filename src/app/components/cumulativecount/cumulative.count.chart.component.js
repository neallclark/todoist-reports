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
var CumulativeCountChartComponent = (function () {
    function CumulativeCountChartComponent(_taskListService) {
        this._taskListService = _taskListService;
    }
    CumulativeCountChartComponent.prototype.ngOnChanges = function () {
        if (this.tasks == null)
            return;
        this.chart = new chart_js_1.Chart('canvas.cumulative', {
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
    };
    CumulativeCountChartComponent.prototype.nonRepeatingTasks = function () {
        return this._taskListService.nonRepeatingTasks(this.tasks);
    };
    CumulativeCountChartComponent.prototype.getLabels = function () {
        if (!this.tasks)
            return null;
        var ageStats = this._taskListService.taskAgeStats(this.tasks);
        var ageSpread = ageStats.max - ageStats.min;
        var newLabels = new Array(ageSpread + 1);
        for (var i = 0; i < ageSpread; i++) {
            newLabels[i] = "" + (i + ageStats.min);
        }
        return newLabels;
    };
    CumulativeCountChartComponent.prototype.getCounts = function () {
        return this.tasks == null ? [] : this._taskListService.cumulativeTaskCountByAge(this.tasks);
    };
    return CumulativeCountChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CumulativeCountChartComponent.prototype, "tasks", void 0);
CumulativeCountChartComponent = __decorate([
    core_1.Component({
        selector: 'cumulativecountchart',
        templateUrl: './cumulative.count.chart.component.html'
    }),
    __metadata("design:paramtypes", [tasklist_service_1.TaskListService])
], CumulativeCountChartComponent);
exports.CumulativeCountChartComponent = CumulativeCountChartComponent;
//# sourceMappingURL=cumulative.count.chart.component.js.map