window.__require = function e(t, r, o) {
function n(a, i) {
if (!r[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var l = r[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return n(t[a][1][e] || e);
}, l, l.exports, e, t, r, o);
}
return r[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
ApiManager: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "88569ht/SRDaqd56PexSLma", "ApiManager");
var o = this && this.__extends || function() {
var e = function(t, r) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(t, r);
};
return function(t, r) {
e(t, r);
function o() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o());
};
}(), n = this && this.__decorate || function(e, t, r, o) {
var n, c = arguments.length, a = c < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (a = (c < 3 ? n(a) : c > 3 ? n(t, r, a) : n(t, r)) || a);
return c > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, i = c.property, s = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.PostRequest = function(e, t) {
var r, o = cc.loader.getXMLHttpRequest();
o.open("POST", e, !0);
o.setRequestHeader("api-key", "MYLcvDAg5175KH5vTvGtvanxLtFNr8yU");
o.setRequestHeader("Content-Type", "application/json");
o.send(t);
o.onerror = function() {
r = "Looks like your internet connection is feeling lazy right now. Please make sure it's working to move forward";
cc.game.emit("ErrorLoginRequest", t, e, r);
};
o.onreadystatechange = function() {
if (4 == o.readyState && o.status >= 200 && o.status <= 207) {
var n = o.responseText, c = o.statusText;
cc.log(c);
if ("" != n) {
cc.game.emit("PostLoginRequest", n);
cc.log(n);
} else {
r = "Looks like we are having some minor issues with our server right now. Please give us a moment to resolve this";
cc.game.emit("ErrorLoginRequest", t, e, r);
}
cc.log(n);
}
if (4 === o.readyState && o.status >= 400) {
cc.log("Server Error");
r = "Looks like we are having some minor issues with our server right now. Please give us a moment to resolve this";
cc.game.emit("ErrorLoginRequest", t, e, r);
}
};
};
t.prototype.GetRequest = function(e) {
var t, r = cc.loader.getXMLHttpRequest();
cc.log(e);
r.open("GET", e, !0);
r.setRequestHeader("api-key", "MYLcvDAg5175KH5vTvGtvanxLtFNr8yU");
r.onerror = function() {
t = "Looks like your internet connection is feeling lazy right now. Please make sure it's working to move forward";
cc.game.emit("ErrorLeaderBoardRequest2", t);
};
r.onreadystatechange = function() {
if (4 === r.readyState && r.status >= 200 && r.status < 300) {
cc.log(r.responseText);
var e = r.responseText;
if ("" != e) {
cc.log(e);
cc.game.emit("GetLeaderBoardRequest2", e);
} else {
cc.log("Empty String");
cc.log(r.response);
cc.log(e);
cc.game.emit("ErrorLeaderBoardRequest2", "Server Error");
}
}
if (4 === r.readyState && r.status >= 400) {
cc.log("Server Error");
cc.log(e);
cc.game.emit("ErrorLeaderBoardRequest2", "Server Error");
}
};
r.send();
};
t.instance = null;
n([ i(cc.Label) ], t.prototype, "label", void 0);
n([ i ], t.prototype, "text", void 0);
return t = n([ a ], t);
}(cc.Component);
r.default = s;
cc._RF.pop();
}, {} ],
AppManager: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "65be0AIfL1AprH8r3JIrqQC", "AppManager");
var o = this && this.__extends || function() {
var e = function(t, r) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
})(t, r);
};
return function(t, r) {
e(t, r);
function o() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o());
};
}(), n = this && this.__decorate || function(e, t, r, o) {
var n, c = arguments.length, a = c < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (a = (c < 3 ? n(a) : c > 3 ? n(t, r, a) : n(t, r)) || a);
return c > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, i = c.property, s = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
this.GetRequest("https://api.openweathermap.org/data/2.5/weather?q=London&appid=219d872e09770efcceb674c5c478191f");
};
t.prototype.OnGetPositionClick = function() {
var e = this;
navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
e.latitude = JSON.stringify(t.coords.latitude);
e.longitude = JSON.stringify(t.coords.longitude);
cc.log(location);
}, function(e) {
return alert(e.message);
});
var t = "api.openweathermap.org/data/2.5/weather?lat=" + this.latitude + "&lon=" + this.longitude + "&appid=219d872e09770efcceb674c5c478191f";
this.GetRequest(t);
};
t.prototype.GetRequest = function(e) {
var t, r = cc.loader.getXMLHttpRequest();
cc.log(e);
r.open("GET", e, !0);
r.onerror = function() {
t = "Looks like your internet connection is feeling lazy right now. Please make sure it's working to move forward";
cc.game.emit("ErrorLeaderBoardRequest2", t);
};
r.onreadystatechange = function() {
if (4 === r.readyState && r.status >= 200 && r.status < 300) {
cc.log(r.responseText);
var e = r.responseText;
if ("" != e) {
cc.log(e);
cc.game.emit("GetLeaderBoardRequest2", e);
} else {
cc.log("Empty String");
cc.log(r.response);
cc.log(e);
cc.game.emit("ErrorLeaderBoardRequest2", "Server Error");
}
}
if (4 === r.readyState && r.status >= 400) {
cc.log("Server Error");
cc.log(e);
cc.game.emit("ErrorLeaderBoardRequest2", "Server Error");
}
};
r.send();
};
n([ i(cc.Label) ], t.prototype, "label", void 0);
n([ i ], t.prototype, "text", void 0);
return t = n([ a ], t);
}(cc.Component);
r.default = s;
cc._RF.pop();
}, {} ]
}, {}, [ "ApiManager", "AppManager" ]);