/*
 console-shim 1.0.1
 https://github.com/kayahr/console-shim
 Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function e(){return function(){}}
(function(){function c(a,k){var b=Array.prototype.slice.call(arguments,2);return function(){var c=b.concat(Array.prototype.slice.call(arguments,0));a.apply(k,c)}}if(!window.console)window.console={};var a=window.console;if(!a.log)if(window.log4javascript){var b=log4javascript.getDefaultLogger();a.log=c(b.info,b);a.debug=c(b.debug,b);a.info=c(b.info,b);a.warn=c(b.warn,b);a.error=c(b.error,b)}else a.log=e();if(!a.debug)a.debug=a.log;if(!a.info)a.info=a.log;if(!a.warn)a.warn=a.log;if(!a.error)a.error=
a.log;if(window.__consoleShimTest__!=null)b=function(d){var b,c,h;d=Array.prototype.slice.call(arguments,0);h=d.shift();c=d.length;if(c>1&&window.__consoleShimTest__!==!1){typeof d[0]!="string"&&(d.unshift("%o"),c+=1);for(b=(b=d[0].match(/%[a-z]/g))?b.length+1:1;b<c;b+=1)d[0]+=" %o"}Function.apply.call(h,a,d)},a.log=c(b,window,a.log),a.debug=c(b,window,a.debug),a.info=c(b,window,a.info),a.warn=c(b,window,a.warn),a.error=c(b,window,a.error);a.assert||(a.assert=function(){var d=Array.prototype.slice.call(arguments,
0);d.shift()||(d[0]="Assertion failed: "+d[0],a.error.apply(a,d))});if(!a.dir)a.dir=a.log;if(!a.dirxml)a.dirxml=a.log;if(!a.exception)a.exception=a.error;if(!a.time||!a.timeEnd){var g={};a.time=function(a){g[a]=(new Date).getTime()};a.timeEnd=function(d){var b=g[d];b&&(a.log(d+": "+((new Date).getTime()-b)+"ms"),delete g[d])}}a.table||(a.table=function(b,c){var f,h,g,i,j;if(b&&b instanceof Array&&b.length){if(!c||!(c instanceof Array))for(f in c=[],b[0])b[0].hasOwnProperty(f)&&c.push(f);f=0;for(h=
b.length;f<h;f+=1){g=[];i=0;for(j=c.length;i<j;i+=1)g.push(b[f][c[i]]);Function.apply.call(a.log,a,g)}}});a.clear||(a.clear=e());a.trace||(a.trace=e());a.group||(a.group=e());a.groupCollapsed||(a.groupCollapsed=e());a.groupEnd||(a.groupEnd=e());a.timeStamp||(a.timeStamp=e());a.profile||(a.profile=e());a.profileEnd||(a.profileEnd=e());a.count||(a.count=e())})();