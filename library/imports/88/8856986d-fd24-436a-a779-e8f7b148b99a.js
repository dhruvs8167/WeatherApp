"use strict";
cc._RF.push(module, '88569ht/SRDaqd56PexSLma', 'ApiManager');
// Scripts/ApiManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ApiManager = /** @class */ (function (_super) {
    __extends(ApiManager, _super);
    function ApiManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiManager.prototype.GetRequest = function (url) {
        var xhr = cc.loader.getXMLHttpRequest();
        cc.log(url);
        xhr.open("GET", url, true);
        xhr.onerror = function () {
            console.log("Connection Error");
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                cc.game.emit('WeatherApiResponce', xhr.responseText);
            }
            if (xhr.readyState === 4 && xhr.status >= 400) {
                console.log("Server Error");
            }
        };
        xhr.send();
    };
    ApiManager.instance = null;
    ApiManager = __decorate([
        ccclass
    ], ApiManager);
    return ApiManager;
}(cc.Component));
exports.default = ApiManager;

cc._RF.pop();