/*
 console-shim 1.0.0
 https://github.com/kayahr/console-shim
 Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function c(){return function(){}}
(function(){function d(a,b){return function(){a.apply(b,arguments)}}if(!window.console)window.console={};var a=window.console;if(!a.log)if(window.log4javascript){var b=log4javascript.getDefaultLogger();a.log=d(b.info,b);a.debug=d(b.debug,b);a.info=d(b.info,b);a.warn=d(b.warn,b);a.error=d(b.error,b)}else a.log=c();if(!a.debug)a.debug=a.log;if(!a.info)a.info=a.log;if(!a.warn)a.warn=a.log;if(!a.error)a.error=a.log;a.assert||(a.assert=function(){var b=Array.prototype.slice.call(arguments,0);b.shift()||
(b[0]="Assertion failed: "+b[0],a.error.apply(a,b))});if(!a.dir)a.dir=a.log;if(!a.dirxml)a.dirxml=a.log;if(!a.time||!a.timeEnd){var e={};a.time=function(a){e[a]=(new Date).getTime()};a.timeEnd=function(b){var d=e[b];d&&(a.log(b+": "+((new Date).getTime()-d)+"ms"),delete e[b])}}a.clear||(a.clear=c());a.trace||(a.trace=c());a.group||(a.group=c());a.groupCollapsed||(a.groupCollapsed=c());a.groupEnd||(a.groupEnd=c());a.profile||(a.profile=c());a.profileEnd||(a.profileEnd=c())})();