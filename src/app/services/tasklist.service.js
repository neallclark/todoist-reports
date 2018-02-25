"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TaskListService = (function () {
    function TaskListService() {
    }
    TaskListService.prototype.nonRepeatingTasks = function (tasks) {
        return tasks ? tasks.filter(function (t) { return !t.repeating; }) : null;
    };
    TaskListService.prototype.repeatingTasks = function (tasks) {
        return tasks ? tasks.filter(function (t) { return t.repeating; }) : null;
    };
    TaskListService.prototype.scheduledTasks = function (tasks) {
        return tasks ? tasks.filter(function (t) { return t.due !== null; }) : null;
    };
    TaskListService.prototype.unscheduledTasks = function (tasks) {
        return tasks ? tasks.filter(function (t) { return t.due == null; }) : null;
    };
    TaskListService.prototype.minAge = function (tasks) {
        return tasks ? this.nonRepeatingTasks(tasks)
            .reduce(function (min, t) { return t.age < min ? t.age : min; }, tasks[0].age) : null;
    };
    TaskListService.prototype.maxAge = function (tasks) {
        return tasks ? this.nonRepeatingTasks(tasks)
            .reduce(function (max, t) { return t.age > max ? t.age : max; }, tasks[0].age) : null;
    };
    TaskListService.prototype.averageAge = function (tasks) {
        var nonRepeatingTasks = this.nonRepeatingTasks(tasks);
        return tasks ? nonRepeatingTasks.reduce(function (total, t) { return total + t.age; }, nonRepeatingTasks[0].age)
            / nonRepeatingTasks.length : null;
    };
    TaskListService.prototype.oldestTasks = function (tasks, count) {
        return tasks ? this.nonRepeatingTasks(tasks)
            .sort(function (a, b) { return b.age - a.age; }).slice(0, count) : null;
    };
    TaskListService.prototype.sortedByAge = function (tasks) {
        return tasks ? this.nonRepeatingTasks(tasks).sort(function (a, b) { return a.age - b.age; }) : null;
    };
    TaskListService.prototype.overdueTasks = function (tasks) {
        return tasks ? tasks.filter(function (t) { return t.due != null && new Date(t.due) < new Date(); }) : null;
    };
    TaskListService.prototype.tasksDueBetweenDays = function (tasks, startDateOffset, endDateOffset) {
        var _this = this;
        var now = new Date();
        return tasks ? tasks.filter(function (t) { return t.due != null
            && new Date(t.due) >= _this.offsetDate(now, startDateOffset)
            && new Date(t.due) < _this.offsetDate(now, endDateOffset); }) : null;
    };
    TaskListService.prototype.taskAgeStats = function (tasks) {
        return {
            min: this.minAge(tasks),
            max: this.maxAge(tasks),
            average: this.averageAge(tasks)
        };
    };
    TaskListService.prototype.cumulativeTaskCountByAge = function (tasks) {
        if (!tasks)
            return null;
        //Sort by ascending age order
        var sortedByAge = this.sortedByAge(tasks);
        //find out how many days they spread
        var ageStats = this.taskAgeStats(tasks);
        var diff = ageStats.max - ageStats.min;
        //new array to contain the rolling count
        var data = new Array(diff + 1);
        for (var i = 0; i < data.length; i++) {
            data[i] = 0;
        }
        // generate the data array
        for (var _i = 0, sortedByAge_1 = sortedByAge; _i < sortedByAge_1.length; _i++) {
            var t = sortedByAge_1[_i];
            //increment by 1 every array entry >= to the age
            for (var i = t.age - ageStats.min; i <= diff; i++) {
                data[i] = data[i] + 1;
            }
        }
        return data;
    };
    TaskListService.prototype.offsetDate = function (date, offset) {
        var oneDay = 1000 * 60 * 60 * 24;
        return new Date(date.getTime() + (oneDay * offset));
    };
    return TaskListService;
}());
TaskListService = __decorate([
    core_1.Injectable()
], TaskListService);
exports.TaskListService = TaskListService;
//# sourceMappingURL=tasklist.service.js.map