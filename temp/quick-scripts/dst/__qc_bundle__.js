
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/ApiManager');
require('./assets/Scripts/AppManager');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ApiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXBpTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUF3QkEsQ0FBQztJQXBCRywrQkFBVSxHQUFWLFVBQVcsR0FBRztRQUVWLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxPQUFPLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBO1FBRUQsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBRXJCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFHLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQXJCTSxtQkFBUSxHQUFlLElBQUksQ0FBQztJQUZsQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBd0I5QjtJQUFELGlCQUFDO0NBeEJELEFBd0JDLENBeEJ1QyxFQUFFLENBQUMsU0FBUyxHQXdCbkQ7a0JBeEJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2U6IEFwaU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEdldFJlcXVlc3QodXJsKXtcclxuXHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNjLmxvZyh1cmwpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCAsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gRXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdCgnV2VhdGhlckFwaVJlc3BvbmNlJyAsIHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPj0gNDAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIEVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AppManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65be0AIfL1AprH8r3JIrqQC', 'AppManager');
// Scripts/AppManager.ts

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
var ApiManager_1 = require("./ApiManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AppManager = /** @class */ (function (_super) {
    __extends(AppManager, _super);
    function AppManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Temperature = null;
        _this.FeelsLike = null;
        _this.Humidity = null;
        _this.Wind = null;
        _this.IconImage = null;
        _this.LoadingScreen = null;
        _this.FirstScreen = null;
        _this.SecondScreen = null;
        _this.text = 'hello';
        _this.latitude = null;
        _this.longitude = null;
        _this.MainUrl = null;
        return _this;
    }
    AppManager.prototype.onLoad = function () {
        var _this = this;
        cc.game.on("WeatherApiResponce", function (res) {
            var data = JSON.parse(res);
            _this.ShowWeatherDetails(data);
            var iconid = data.weather[0].icon;
            var url = " http://openweathermap.org/img/wn/" + iconid + "@2x.png";
            //For Downloading and Displaying Icon
            cc.assetManager.loadRemote(url, function (err, tex) {
                cc.log("this url loded---------> " + url);
                _this.IconImage.enabled = true;
                _this.IconImage.spriteFrame = new cc.SpriteFrame(tex);
            });
        });
    };
    AppManager.prototype.start = function () {
        ApiManager_1.default.instance = new ApiManager_1.default();
    };
    //Called from GetPosition Button
    AppManager.prototype.OnGetPositionClick = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = JSON.stringify(position.coords.latitude);
                _this.longitude = JSON.stringify(position.coords.longitude);
                var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + _this.latitude + "&lon=" + _this.longitude + "&appid=219d872e09770efcceb674c5c478191f&units=metric";
                ApiManager_1.default.instance.GetRequest(url);
                _this.LoadingScreen.active = true;
                _this.FirstScreen.active = false;
                _this.SecondScreen.active = false;
            }, function (error) { return alert(error.message); });
        }
    };
    // Called from Paris,NewYork,Istanbul Buttons
    AppManager.prototype.OnLocationsClicked = function (event, constant) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + constant + "&appid=219d872e09770efcceb674c5c478191f&units=metric";
        ApiManager_1.default.instance.GetRequest(url);
    };
    // Display Weather Details From API responce.
    AppManager.prototype.ShowWeatherDetails = function (data) {
        this.LoadingScreen.active = false;
        this.FirstScreen.active = false;
        this.SecondScreen.active = true;
        this.Temperature.string = data.main.temp + "°C";
        this.FeelsLike.string = data.main.feels_like + "°C";
        this.Humidity.string = data.main.humidity + "%";
        this.Wind.string = data.wind.speed + "m/s";
    };
    // Called From Back Button
    AppManager.prototype.OnBackCkick = function () {
        this.IconImage.spriteFrame = null;
        this.LoadingScreen.active = false;
        this.FirstScreen.active = true;
        this.SecondScreen.active = false;
    };
    __decorate([
        property(cc.Label)
    ], AppManager.prototype, "Temperature", void 0);
    __decorate([
        property(cc.Label)
    ], AppManager.prototype, "FeelsLike", void 0);
    __decorate([
        property(cc.Label)
    ], AppManager.prototype, "Humidity", void 0);
    __decorate([
        property(cc.Label)
    ], AppManager.prototype, "Wind", void 0);
    __decorate([
        property(cc.Sprite)
    ], AppManager.prototype, "IconImage", void 0);
    __decorate([
        property(cc.Node)
    ], AppManager.prototype, "LoadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], AppManager.prototype, "FirstScreen", void 0);
    __decorate([
        property(cc.Node)
    ], AppManager.prototype, "SecondScreen", void 0);
    __decorate([
        property
    ], AppManager.prototype, "text", void 0);
    AppManager = __decorate([
        ccclass
    ], AppManager);
    return AppManager;
}(cc.Component));
exports.default = AppManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQXBwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFFaEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5RkM7UUF0RkcsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixVQUFJLEdBQVcsT0FBTyxDQUFDO1FBRWhCLGNBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsZUFBUyxHQUFXLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQVUsSUFBSSxDQUFDOztJQXlEMUIsQ0FBQztJQXZESSwyQkFBTSxHQUFOO1FBQUEsaUJBYUM7UUFaRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRyxVQUFDLEdBQUc7WUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFB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Q0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFyRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNXO0lBRzdCO1FBREMsUUFBUTs0Q0FDYztJQTNCTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUY5QjtJQUFELGlCQUFDO0NBekZELEFBeUZDLENBekZ1QyxFQUFFLENBQUMsU0FBUyxHQXlGbkQ7a0JBekZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEFwaU1hbmFnZXIgZnJvbSBcIi4vQXBpTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBUZW1wZXJhdHVyZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIEZlZWxzTGlrZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIEh1bWlkaXR5OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgV2luZDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBJY29uSW1hZ2U6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMb2FkaW5nU2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEZpcnN0U2NyZWVuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIFNlY29uZFNjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHB1YmxpYyBsYXRpdHVkZTogc3RyaW5nID1udWxsO1xyXG4gICAgcHVibGljIGxvbmdpdHVkZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBNYWluVXJsOiBzdHJpbmcgPW51bGw7XHJcblxyXG4gICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihcIldlYXRoZXJBcGlSZXNwb25jZVwiICwgKHJlcyk9PiB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLlNob3dXZWF0aGVyRGV0YWlscyhkYXRhKTtcclxuICAgICAgICAgICAgdmFyIGljb25pZCA9IGRhdGEud2VhdGhlclswXS5pY29uO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gXCIgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vXCIraWNvbmlkK1wiQDJ4LnBuZ1wiO1xyXG4gICAgICAgICAgICAvL0ZvciBEb3dubG9hZGluZyBhbmQgRGlzcGxheWluZyBJY29uXHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHVybCwgKGVyciwgdGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwidGhpcyB1cmwgbG9kZWQtLS0tLS0tLS0+IFwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSWNvbkltYWdlLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JY29uSW1hZ2Uuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4KTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICBBcGlNYW5hZ2VyLmluc3RhbmNlID0gbmV3IEFwaU1hbmFnZXIoKTtcclxuICAgIH1cclxuICAgIC8vQ2FsbGVkIGZyb20gR2V0UG9zaXRpb24gQnV0dG9uXHJcbiAgICBPbkdldFBvc2l0aW9uQ2xpY2soKXtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gSlNPTi5zdHJpbmdpZnkocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcclxuICAgICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBKU09OLnN0cmluZ2lmeShwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKTtcclxuICAgICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PVwiK3RoaXMubGF0aXR1ZGUgK1wiJmxvbj1cIit0aGlzLmxvbmdpdHVkZSArXCImYXBwaWQ9MjE5ZDg3MmUwOTc3MGVmY2NlYjY3NGM1YzQ3ODE5MWYmdW5pdHM9bWV0cmljXCJcclxuICAgICAgICAgICAgICAgQXBpTWFuYWdlci5pbnN0YW5jZS5HZXRSZXF1ZXN0KHVybCk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuTG9hZGluZ1NjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICB0aGlzLkZpcnN0U2NyZWVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICB0aGlzLlNlY29uZFNjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxlcnJvciA9PiBhbGVydChlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vIENhbGxlZCBmcm9tIFBhcmlzLE5ld1lvcmssSXN0YW5idWwgQnV0dG9uc1xyXG4gICAgT25Mb2NhdGlvbnNDbGlja2VkKGV2ZW50LCBjb25zdGFudCl7ICAgICAgICBcclxuICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiICsgY29uc3RhbnQgKyBcIiZhcHBpZD0yMTlkODcyZTA5NzcwZWZjY2ViNjc0YzVjNDc4MTkxZiZ1bml0cz1tZXRyaWNcIjtcclxuICAgICAgICBBcGlNYW5hZ2VyLmluc3RhbmNlLkdldFJlcXVlc3QodXJsKTtcclxuICAgIH1cclxuICAgIC8vIERpc3BsYXkgV2VhdGhlciBEZXRhaWxzIEZyb20gQVBJIHJlc3BvbmNlLlxyXG4gICAgU2hvd1dlYXRoZXJEZXRhaWxzKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuTG9hZGluZ1NjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkZpcnN0U2NyZWVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuU2Vjb25kU2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5UZW1wZXJhdHVyZS5zdHJpbmcgPSBkYXRhLm1haW4udGVtcCArIFwiwrBDXCI7XHJcbiAgICAgICAgdGhpcy5GZWVsc0xpa2Uuc3RyaW5nID0gZGF0YS5tYWluLmZlZWxzX2xpa2UgKyBcIsKwQ1wiO1xyXG4gICAgICAgIHRoaXMuSHVtaWRpdHkuc3RyaW5nID0gZGF0YS5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XHJcbiAgICAgICAgdGhpcy5XaW5kLnN0cmluZyA9IGRhdGEud2luZC5zcGVlZCArIFwibS9zXCI7ICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIENhbGxlZCBGcm9tIEJhY2sgQnV0dG9uXHJcbiAgICBPbkJhY2tDa2ljaygpe1xyXG4gICAgICAgIHRoaXMuSWNvbkltYWdlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLkxvYWRpbmdTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GaXJzdFNjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuU2Vjb25kU2NyZWVuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
