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
var OldestComponent = (function () {
    function OldestComponent(_tasklistService) {
        this._tasklistService = _tasklistService;
    }
    OldestComponent.prototype.oldestTasks = function () {
        return this._tasklistService.oldestTasks(this.tasks, 8);
    };
    return OldestComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], OldestComponent.prototype, "tasks", void 0);
OldestComponent = __decorate([
    core_1.Component({
        selector: 'oldest',
        templateUrl: './oldest.component.html'
    }),
    __metadata("design:paramtypes", [tasklist_service_1.TaskListService])
], OldestComponent);
exports.OldestComponent = OldestComponent;
//# sourceMappingURL=oldest.component.js.map