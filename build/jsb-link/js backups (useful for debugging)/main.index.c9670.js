window.__require = function e(t, n, o) {
function r(c, a) {
if (!n[c]) {
if (!t[c]) {
var p = c.split("/");
p = p[p.length - 1];
if (!t[p]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = p;
}
var l = n[c] = {
exports: {}
};
t[c][0].call(l.exports, function(e) {
return r(t[c][1][e] || e);
}, l, l.exports, e, t, n, o);
}
return n[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
ApiManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "88569ht/SRDaqd56PexSLma", "ApiManager");
var o = this && this.__extends || function() {
var e = function(t, n) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
})(t, n);
};
return function(t, n) {
e(t, n);
function o() {
this.constructor = t;
}
t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o());
};
}(), r = this && this.__decorate || function(e, t, n, o) {
var r, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, n, c) : r(t, n)) || c);
return i > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, a = i.property, p = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.GetRequest = function(e) {
var t = cc.loader.getXMLHttpRequest();
cc.log(e);
t.open("GET", e, !0);
t.onerror = function() {
console.log("Connection Error");
};
t.onreadystatechange = function() {
4 === t.readyState && t.status >= 200 && t.status < 300 && cc.game.emit("WeatherApiResponce", t.responseText);
4 === t.readyState && t.status >= 400 && console.log("Server Error");
};
t.send();
};
t.instance = null;
r([ a(cc.Label) ], t.prototype, "label", void 0);
r([ a ], t.prototype, "text", void 0);
return t = r([ c ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
AppManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "65be0AIfL1AprH8r3JIrqQC", "AppManager");
var o = this && this.__extends || function() {
var e = function(t, n) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
})(t, n);
};
return function(t, n) {
e(t, n);
function o() {
this.constructor = t;
}
t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o());
};
}(), r = this && this.__decorate || function(e, t, n, o) {
var r, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, n, c) : r(t, n)) || c);
return i > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("./ApiManager"), c = cc._decorator, a = c.ccclass, p = c.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.Temperature = null;
t.FeelsLike = null;
t.Humidity = null;
t.Wind = null;
t.IconImage = null;
t.LoadingScreen = null;
t.FirstScreen = null;
t.SecondScreen = null;
t.text = "hello";
t.latitude = null;
t.longitude = null;
t.MainUrl = null;
return t;
}
t.prototype.onLoad = function() {
var e = this;
cc.game.on("WeatherApiResponce", function(t) {
cc.log(t);
var n = JSON.parse(t);
e.ShowWeatherDetails(n);
var o = " http://openweathermap.org/img/wn/" + n.weather[0].icon + "@2x.png";
cc.assetManager.loadRemote(o, function(t, n) {
cc.log("this url loded---------\x3e " + o);
e.IconImage.enabled = !0;
e.IconImage.spriteFrame = new cc.SpriteFrame(n);
});
});
};
t.prototype.start = function() {
i.default.instance = new i.default();
};
t.prototype.OnGetPositionClick = function() {
var e = this;
navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
e.latitude = JSON.stringify(t.coords.latitude);
e.longitude = JSON.stringify(t.coords.longitude);
cc.log(location);
var n = "https://api.openweathermap.org/data/2.5/weather?lat=" + e.latitude + "&lon=" + e.longitude + "&appid=219d872e09770efcceb674c5c478191f&units=metric";
i.default.instance.GetRequest(n);
e.LoadingScreen.active = !0;
e.FirstScreen.active = !1;
e.SecondScreen.active = !1;
}, function(e) {
return alert(e.message);
});
};
t.prototype.OnLocationsClicked = function(e, t) {
var n = "https://api.openweathermap.org/data/2.5/weather?q=" + t + "&appid=219d872e09770efcceb674c5c478191f&units=metric";
i.default.instance.GetRequest(n);
};
t.prototype.ShowWeatherDetails = function(e) {
this.LoadingScreen.active = !1;
this.FirstScreen.active = !1;
this.SecondScreen.active = !0;
this.Temperature.string = e.main.temp + "°C";
this.FeelsLike.string = e.main.feels_like + "°C";
this.Humidity.string = e.main.humidity + "%";
this.Wind.string = e.wind.speed + "m/s";
};
t.prototype.OnBackCkick = function() {
this.IconImage.spriteFrame = null;
this.LoadingScreen.active = !1;
this.FirstScreen.active = !0;
this.SecondScreen.active = !1;
};
r([ p(cc.Label) ], t.prototype, "Temperature", void 0);
r([ p(cc.Label) ], t.prototype, "FeelsLike", void 0);
r([ p(cc.Label) ], t.prototype, "Humidity", void 0);
r([ p(cc.Label) ], t.prototype, "Wind", void 0);
r([ p(cc.Sprite) ], t.prototype, "IconImage", void 0);
r([ p(cc.Node) ], t.prototype, "LoadingScreen", void 0);
r([ p(cc.Node) ], t.prototype, "FirstScreen", void 0);
r([ p(cc.Node) ], t.prototype, "SecondScreen", void 0);
r([ p ], t.prototype, "text", void 0);
return t = r([ a ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./ApiManager": "ApiManager"
} ]
}, {}, [ "ApiManager", "AppManager" ]);