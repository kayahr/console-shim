/*
 console-shim 1.0.1
 https://github.com/kayahr/console-shim
 Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
'use strict';function f(){return function(){}}
(function(){function c(a,b,d){var c=Array.prototype.slice.call(arguments,2);return function(){var d=c.concat(Array.prototype.slice.call(arguments,0));a.apply(b,d)}}window.console||(window.console={});var a=window.console;if(!a.log)if(window.log4javascript){var b=log4javascript.getDefaultLogger();a.log=c(b.info,b);a.debug=c(b.debug,b);a.info=c(b.info,b);a.warn=c(b.warn,b);a.error=c(b.error,b)}else a.log=f();a.debug||(a.debug=a.log);a.info||(a.info=a.log);a.warn||(a.warn=a.log);a.error||(a.error=a.log);
b=eval("/*@cc_on @_jscript_version \x3c\x3d 9@*/");if(void 0!==window.__consoleShimTest__||b)b=function(e){var b,d,c;e=Array.prototype.slice.call(arguments,0);c=e.shift();d=e.length;if(1<d&&!1!==window.__consoleShimTest__){"string"!=typeof e[0]&&(e.unshift("%o"),d+=1);for(b=(b=e[0].match(/%[a-z]/g))?b.length+1:1;b<d;b+=1)e[0]+=" %o"}Function.apply.call(c,a,e)},a.log=c(b,window,a.log),a.debug=c(b,window,a.debug),a.info=c(b,window,a.info),a.warn=c(b,window,a.warn),a.error=c(b,window,a.error);a.assert||
(a.assert=function(){var e=Array.prototype.slice.call(arguments,0);e.shift()||(e[0]="Assertion failed: "+e[0],a.error.apply(a,e))});a.dir||(a.dir=a.log);a.dirxml||(a.dirxml=a.log);a.exception||(a.exception=a.error);if(!a.time||!a.timeEnd){var g={};a.time=function(a){g[a]=(new Date).getTime()};a.timeEnd=function(b){var c=g[b];c&&(a.log(b+": "+((new Date).getTime()-c)+"ms"),delete g[b])}}a.table||(a.table=function(b,c){var d,g,j,h,k;if(b&&b instanceof Array&&b.length){if(!c||!(c instanceof Array))for(d in c=
[],b[0])b[0].hasOwnProperty(d)&&c.push(d);d=0;for(g=b.length;d<g;d+=1){j=[];h=0;for(k=c.length;h<k;h+=1)j.push(b[d][c[h]]);Function.apply.call(a.log,a,j)}}});a.clear||(a.clear=f());a.trace||(a.trace=f());a.group||(a.group=f());a.groupCollapsed||(a.groupCollapsed=f());a.groupEnd||(a.groupEnd=f());a.timeStamp||(a.timeStamp=f());a.profile||(a.profile=f());a.profileEnd||(a.profileEnd=f());a.count||(a.count=f())})();