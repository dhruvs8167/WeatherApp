"use strict";
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