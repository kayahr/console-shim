/**
 * @preserve console-shim 1.0.2
 * https://github.com/kayahr/console-shim
 * Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 
 
(function(global){
"use strict";

/**
 * Returns a function which calls the specified function in the specified
 * scope.
 *
 * @param {Function} func
 *            The function to call.
 * @param {Object} scope
 *            The scope to call the function in.
 * @param {...*} args
 *            Additional arguments to pass to the bound function.
 * @returns {function(...[*]): undefined}
 *            The bound function.
 */
var bind = function(func, scope, args)
{
    var fixedArgs = Array.prototype.slice.call(arguments, 2);
    return function()
    {
        var args = fixedArgs.concat(Array.prototype.slice.call(arguments, 0));
        (/** @type {Function} */ func).apply(scope, args);
    };
};

// Create console if not present
if (!global["console"]) global.console = /** @type {Console} */ ({});
//var console = (/** @type {Object} */ window.console);

// Implement console log if needed
if (!global.console["log"])
{
    // Use log4javascript if present
    if (global["log4javascript"])
    {
        var log = log4javascript.getDefaultLogger();
        global.console.log = bind(log.info, log);
        global.console.debug = bind(log.debug, log);
        global.console.info = bind(log.info, log);
        global.console.warn = bind(log.warn, log);
        global.console.error = bind(log.error, log);
    }
    
    // Use empty dummy implementation to ignore logging
    else
    {
        global.console.log = (/** @param {...*} args */ function(args) {});
    }
}

// Implement other log levels to console.log if missing
if (!global.console["debug"]) global.console.debug = global.console.log;
if (!global.console["info"]) global.console.info = global.console.log;
if (!global.console["warn"]) global.console.warn = global.console.log;
if (!global.console["error"]) global.console.error = global.console.log;

// Wrap the log methods in IE (<=9) because their argument handling is wrong
// This wrapping is also done if the __consoleShimTest__ symbol is set. This
// is needed for unit testing.
if (global["__consoleShimTest__"] != null || 
    eval("/*@cc_on @_jscript_version <= 9@*/"))
{
    /**
     * Wraps the call to a real IE logging method. Modifies the arguments so
     * parameters which are not represented by a placeholder are properly
     * printed with a space character as separator.
     *
     * @param {...*} args
     *            The function arguments. First argument is the log function
     *            to call, the other arguments are the log arguments.
     */
    var wrap = function(args)
    {
        var i, max, match, log;
        
        // Convert argument list to real array
        args = Array.prototype.slice.call(arguments, 0);
        
        // First argument is the log method to call
        log = args.shift();
        
        max = args.length;
        if (max > 1 && global["__consoleShimTest__"] !== false)
        {
            // When first parameter is not a string then add a format string to
            // the argument list so we are able to modify it in the next stop
            if (typeof(args[0]) != "string")
            {
                args.unshift("%o");
                max += 1;
            }
            
            // For each additional parameter which has no placeholder in the
            // format string we add another placeholder separated with a
            // space character.
            match = args[0].match(/%[a-z]/g);
            for (i = match ? match.length + 1 : 1; i < max; i += 1)
            {
                args[0] += " %o";
            }
        }
        Function.apply.call(log, global.console, args);
    };
    
    // Wrap the native log methods of IE to fix argument output problems
    global.console.log = bind(wrap, global, global.console.log);
    global.console.debug = bind(wrap, global, global.console.debug);
    global.console.info = bind(wrap, global, global.console.info);
    global.console.warn = bind(wrap, global, global.console.warn);
    global.console.error = bind(wrap, global, global.console.error);
}

// Implement console.assert if missing
if (!global.console["assert"])
{
    global.console["assert"] = function()
    {
        var args = Array.prototype.slice.call(arguments, 0);
        var expr = args.shift();
        if (!expr)
        {
            args[0] = "Assertion failed: " + args[0];
            global.console.error.apply(global.console, args);
        }
    };
}

// Linking console.dir and console.dirxml to the console.log method if
// missing. Hopefully the browser already logs objects and DOM nodes as a
// tree.
if (!global.console["dir"]) global.console["dir"] = global.console.log;
if (!global.console["dirxml"]) global.console["dirxml"] = global.console.log;

// Linking console.exception to console.error. This is not the same but
// at least some error message is displayed.
if (!global.console["exception"]) global.console["exception"] = global.console.error;

// Implement console.time and console.timeEnd if one of them is missing
if (!global.console["time"] || !global.console["timeEnd"])
{
    var timers = {};
    global.console["time"] = function(id)
    {
        timers[id] = new Date().getTime();
    };
    global.console["timeEnd"] = function(id)
    {
        var start = timers[id];
        if (start)
        {
            global.console.log(id + ": " + (new Date().getTime() - start) + "ms");
            delete timers[id];
        }
    };
}

// Implement console.table if missing
if (!global.console["table"])
{
    global.console["table"] = function(data, columns)
    {
        var i, iMax, row, j, jMax, k;
        
        // Do nothing if data has wrong type or no data was specified
        if (!data || !(data instanceof Array) || !data.length) return;
        
        // Auto-calculate columns array if not set
        if (!columns || !(columns instanceof Array))
        {
            columns = [];
            for (k in data[0])
            {
                if (!data[0].hasOwnProperty(k)) continue;
                columns.push(k);
            }
        }
        
        for (i = 0, iMax = data.length; i < iMax; i += 1)
        {
            row = [];
            for (j = 0, jMax = columns.length; j < jMax; j += 1)
            {
                row.push(data[i][columns[j]]);
            }
            
            Function.apply.call(global.console.log, global.console, row);
        }
    };
}

// Dummy implementations of other console features to prevent error messages
// in browsers not supporting it.
if (!global.console["clear"]) global.console["clear"] = function() {};
if (!global.console["trace"]) global.console["trace"] = function() {};
if (!global.console["group"]) global.console["group"] = function() {};
if (!global.console["groupCollapsed"]) global.console["groupCollapsed"] = function() {};
if (!global.console["groupEnd"]) global.console["groupEnd"] = function() {};
if (!global.console["timeStamp"]) global.console["timeStamp"] = function() {};
if (!global.console["profile"]) global.console["profile"] = function() {};
if (!global.console["profileEnd"]) global.console["profileEnd"] = function() {};
if (!global.console["count"]) global.console["count"] = function() {};

})(window);
