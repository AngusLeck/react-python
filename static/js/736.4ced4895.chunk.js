!function(){"use strict";var e={736:function(e,n,t){var r=t(555),o=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(n){i(n)}}function c(e){try{a(r.throw(e))}catch(n){i(n)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,c)}a((r=r.apply(e,n||[])).next())}))},i=function(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=n.call(e,u)}catch(a){c=[6,a],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js"),console.log=function(){};var u={init:function(e,n,t){return o(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return r=self,[4,self.loadPyodide({stdout:e})];case 1:return r.pyodide=i.sent(),t[0].length>0?[4,self.pyodide.loadPackage(t[0])]:[3,3];case 2:i.sent(),i.label=3;case 3:return t[1].length>0?[4,self.pyodide.loadPackage(["micropip"])]:[3,6];case 4:return i.sent(),[4,self.pyodide.pyimport("micropip").install(t[1])];case 5:i.sent(),i.label=6;case 6:return o=self.pyodide.version,n({version:o}),[2]}}))}))},run:function(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,self.pyodide.runPythonAsync(e)];case 1:return n.sent(),[2]}}))}))},readFile:function(e){return self.pyodide.FS.readFile(e,{encoding:"utf8"})},writeFile:function(e,n){return self.pyodide.FS.writeFile(e,n,{encoding:"utf8"})},mkdir:function(e){self.pyodide.FS.mkdir(e)},rmdir:function(e){self.pyodide.FS.rmdir(e)}};(0,r.Jj)(u)}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.x=function(){var e=t.O(void 0,[555],(function(){return t(736)}));return e=t.O(e)},function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[a])}))?r.splice(a--,1):(c=!1,i<u&&(u=i));if(c){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))},t.u=function(e){return"static/js/"+e+".28bbfcce.chunk.js"},t.miniCssF=function(e){},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/react-python/",function(){var e={736:1};t.f.i=function(n,r){e[n]||importScripts(t.p+t.u(n))};var n=self.webpackChunkreact_python=self.webpackChunkreact_python||[],r=n.push.bind(n);n.push=function(n){var o=n[0],i=n[1],u=n[2];for(var c in i)t.o(i,c)&&(t.m[c]=i[c]);for(u&&u(t);o.length;)e[o.pop()]=1;r(n)}}(),function(){var e=t.x;t.x=function(){return t.e(555).then(e)}}();t.x()}();
//# sourceMappingURL=736.4ced4895.chunk.js.map