/*
 console-shim 1.0.0
 https://github.com/kayahr/console-shim
 Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function e(){return function(){}}
(function(){function d(a,f){return function(){a.apply(f,arguments)}}if(!window.console)window.console={};var a=window.console;if(!a.log)if(window.log4javascript){var b=log4javascript.getDefaultLogger();a.log=d(b.info,b);a.debug=d(b.debug,b);a.info=d(b.info,b);a.warn=d(b.warn,b);a.error=d(b.error,b)}else a.log=e();if(!a.debug)a.debug=a.log;if(!a.info)a.info=a.log;if(!a.warn)a.warn=a.log;if(!a.error)a.error=a.log;if(window.__consoleShimTest__!=null)b=function(c){var f,b,d;c=Array.prototype.slice.call(arguments,
0);d=c.shift();b=c.length;if(b>1&&window.__consoleShimTest__!==!1){typeof c[0]!="string"&&(c.unshift("%o"),b+=1);for(f=(f=c[0].match(/%[a-z]/g))?f.length+1:1;f<b;f+=1)c[0]+=" %o"}Function.apply.call(d,a,c)},a.log=b.bind(window,a.log),a.debug=b.bind(window,a.debug),a.info=b.bind(window,a.info),a.warn=b.bind(window,a.warn),a.error=b.bind(window,a.error);a.assert||(a.assert=function(){var c=Array.prototype.slice.call(arguments,0);c.shift()||(c[0]="Assertion failed: "+c[0],a.error.apply(a,c))});if(!a.dir)a.dir=
a.log;if(!a.dirxml)a.dirxml=a.log;if(!a.exception)a.exception=a.error;if(!a.time||!a.timeEnd){var g={};a.time=function(a){g[a]=(new Date).getTime()};a.timeEnd=function(c){var b=g[c];b&&(a.log(c+": "+((new Date).getTime()-b)+"ms"),delete g[c])}}a.table||(a.table=function(c,b){var d,g,i,h,j;if(c&&c instanceof Array&&c.length){if(!b||!(b instanceof Array))for(d in b=[],c[0])c[0].hasOwnProperty(d)&&b.push(d);d=0;for(g=c.length;d<g;d+=1){i=[];h=0;for(j=b.length;h<j;h+=1)i.push(c[d][b[h]]);Function.apply.call(a.log,
a,i)}}});a.clear||(a.clear=e());a.trace||(a.trace=e());a.group||(a.group=e());a.groupCollapsed||(a.groupCollapsed=e());a.groupEnd||(a.groupEnd=e());a.timeStamp||(a.timeStamp=e());a.profile||(a.profile=e());a.profileEnd||(a.profileEnd=e());a.count||(a.count=e())})();