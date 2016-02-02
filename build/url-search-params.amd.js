/*! (C) WebReflection Mit Style License */
define(function(){"use strict";function e(e){return encodeURIComponent(e).replace(i,u)}function t(e){return decodeURIComponent(e.replace(s," "))}function n(e){this[a]=Object.create(null);if(!e)return;for(var n,r,i=(e||"").split("&"),s=0,o=i.length;s<o;s++)r=i[s],n=r.indexOf("="),-1<n&&this.append(t(r.slice(0,n)),t(r.slice(n+1)))}var r=n.prototype,i=/[!'\(\)~]|%20|%00/g,s=/\+/g,o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},u=function(e){return o[e]},a="__URLSearchParams__:"+Math.random();r.append=function(t,n){var r=this[a];t in r?r[t].push(""+n):r[t]=[""+n]},r.delete=function(t){delete this[a][t]},r.get=function(t){var n=this[a];return t in n?n[t][0]:null},r.getAll=function(t){var n=this[a];return t in n?n[t].slice(0):[]},r.has=function(t){return t in this[a]},r.set=function(t,n){this[a][t]=[""+n]},r.toJSON=function(){return{}},r.toString=function m(){var t=this[a],n=[],r,i,s,o;for(i in t){s=e(i);for(r=0,o=t[i];r<o.length;r++)n.push(s+"="+e(o[r]))}return n.join("&")};var f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,c=function(e){function t(t,n){r.append.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function n(t){r.delete.call(this,t),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function i(t,n){r.set.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}return function(e,r){return e.append=t,e.delete=n,e.set=i,f(e,"_usp",{configurable:!0,writable:!0,value:r})}},h=function(e){return function(t,n){return f(t,"_searchParams",{configurable:!0,writable:!0,value:e(n,t)}),n}},p=function(e){var t=e.append;e.append=r.append,n.call(e,e._usp.search.slice(1)),e.append=t},d=function(e,t){if(!(e instanceof t))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+t.name)},v=function(e){var t=e.prototype,r=l(t,"searchParams"),i=l(t,"href"),s=l(t,"search"),o;!r&&s&&(o=h(c(s)),Object.defineProperties(t,{href:{get:function(){return i.get.call(this)},set:function(e){var t=this._searchParams;i.set.call(this,e),t&&p(t)}},search:{get:function(){return s.get.call(this)},set:function(e){var t=this._searchParams;s.set.call(this,e),t&&p(t)}},searchParams:{get:function(){return d(this,e),this._searchParams||o(this,new n(this.search.slice(1)))},set:function(t){d(this,e),o(this,t)}}}))};return v(HTMLAnchorElement),typeof URL=="function"&&v(URL),n});