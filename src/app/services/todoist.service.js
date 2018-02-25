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
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var TodoistService = (function () {
    function TodoistService(http) {
        this.http = http;
    }
    TodoistService.prototype.getTasks = function (apiKey) {
        if (this.tasks == null) {
            var query = "{allTasks(key:\"" + apiKey + "\"){id content completed priority dateString due dateAdded repeating age}}";
            this.tasks = this.http.get("http://localhost:4000/graphql?query=" + query);
        }
        return this.tasks;
    };
    return TodoistService;
}());
TodoistService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], TodoistService);
exports.TodoistService = TodoistService;
//# sourceMappingURL=todoist.service.js.map