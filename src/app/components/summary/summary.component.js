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
var SummaryComponent = (function () {
    function SummaryComponent(_tasklistService) {
        this._tasklistService = _tasklistService;
    }
    SummaryComponent.prototype.numOfTasks = function () {
        return this.tasks ? this.tasks.length : null;
    };
    SummaryComponent.prototype.numOfRepeatingTasks = function () {
        return this.tasks ? this._tasklistService.repeatingTasks(this.tasks).length : null;
    };
    SummaryComponent.prototype.numOfScheduledTasks = function () {
        return this.tasks ? this._tasklistService.scheduledTasks(this.tasks).length : null;
    };
    SummaryComponent.prototype.numOfUnscheduledTasks = function () {
        return this.tasks ? this._tasklistService.unscheduledTasks(this.tasks).length : null;
    };
    SummaryComponent.prototype.maxAge = function () {
        return this._tasklistService.maxAge(this.tasks);
    };
    SummaryComponent.prototype.averageAge = function () {
        return this._tasklistService.averageAge(this.tasks);
    };
    SummaryComponent.prototype.nonRepeatingTasks = function () {
        return this._tasklistService.nonRepeatingTasks(this.tasks);
    };
    SummaryComponent.prototype.numOfOverdueTasks = function () {
        return this.tasks ? this._tasklistService.overdueTasks(this.tasks).length : null;
    };
    SummaryComponent.prototype.numOfTasksNext7Days = function () {
        return this.tasks ? this._tasklistService.tasksDueBetweenDays(this.tasks, 0, 7).length : null;
    };
    return SummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SummaryComponent.prototype, "tasks", void 0);
SummaryComponent = __decorate([
    core_1.Component({
        selector: 'summary',
        templateUrl: './summary.component.html'
    }),
    __metadata("design:paramtypes", [tasklist_service_1.TaskListService])
], SummaryComponent);
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map