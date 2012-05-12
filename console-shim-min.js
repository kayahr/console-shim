/*
 console-shim 1.0.0
 https://github.com/kayahr/console-shim
 Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function e(){return function(){}}
(function(){function f(a,d){return function(){a.apply(d,arguments)}}if(!window.console)window.console={};var a=window.console;if(!a.log)if(window.log4javascript){var b=log4javascript.getDefaultLogger();a.log=f(b.info,b);a.debug=f(b.debug,b);a.info=f(b.info,b);a.warn=f(b.warn,b);a.error=f(b.error,b)}else a.log=e();if(!a.debug)a.debug=a.log;if(!a.info)a.info=a.log;if(!a.warn)a.warn=a.log;if(!a.error)a.error=a.log;a.assert||(a.assert=function(){var c=Array.prototype.slice.call(arguments,0);c.shift()||
(c[0]="Assertion failed: "+c[0],a.error.apply(a,c))});if(!a.dir)a.dir=a.log;if(!a.dirxml)a.dirxml=a.log;if(!a.exception)a.exception=a.error;if(!a.time||!a.timeEnd){var g={};a.time=function(a){g[a]=(new Date).getTime()};a.timeEnd=function(c){var d=g[c];d&&(a.log(c+": "+((new Date).getTime()-d)+"ms"),delete g[c])}}a.table||(a.table=function(c,d){var b,f,g,h,i;if(c&&c instanceof Array&&c.length){if(!d||!(d instanceof Array))for(b in d=[],c[0])c[0].hasOwnProperty(b)&&d.push(b);b=0;for(f=c.length;b<f;b+=
1){g=[];h=0;for(i=d.length;h<i;h+=1)g.push(c[b][d[h]]);a.log.apply(this,g)}}});a.clear||(a.clear=e());a.trace||(a.trace=e());a.group||(a.group=e());a.groupCollapsed||(a.groupCollapsed=e());a.groupEnd||(a.groupEnd=e());a.timeStamp||(a.timeStamp=e());a.profile||(a.profile=e());a.profileEnd||(a.profileEnd=e());a.count||(a.count=e())})();