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
var ApiKeyComponent = (function () {
    function ApiKeyComponent() {
        this.onApiKeyEntered = new core_1.EventEmitter();
        this.submitted = false;
        this.text = "Enter API Key";
    }
    ApiKeyComponent.prototype.onKey = function (event) {
        var length = event.target.value.length;
        //TODO: add some more validation (i.e. should be a hex number)
        if (length == 40 && !this.submitted) {
            this.onApiKeyEntered.emit(event.target.value);
            this.submitted = true;
            this.text = "Key looks OK!";
        }
    };
    return ApiKeyComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ApiKeyComponent.prototype, "onApiKeyEntered", void 0);
ApiKeyComponent = __decorate([
    core_1.Component({
        selector: 'apikey',
        templateUrl: './apikey.component.html'
    })
], ApiKeyComponent);
exports.ApiKeyComponent = ApiKeyComponent;
//# sourceMappingURL=apikey.component.js.map