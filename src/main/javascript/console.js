/** 
 * @preserve ${project.artifactId} ${project.version}
 * ${project.url}
 * Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 
(function(){

/**
 * Returns a function which calls the specified function in the specified
 * scope.
 *
 * @param {Function} func
 *            The function to call.
 * @param {Object} scope
 *            The scope to call the function in.
 * @return {Function}
 *            The bound function.
 */
var bind = function(func, scope)
{
    return function()
    {
        (/** @type {Function} */ func).apply(scope, arguments);
    };
};

// Create console if not present
if (!window["console"]) window.console = {};
var console = (/** @type {Object} */ window.console);

// Implement console log if needed
if (!console["log"])
{
    // Use log4javascript if present
    if (window["log4javascript"])
    {
        var log = log4javascript.getDefaultLogger(); 
        console.log = bind(log.info, log);
        console.debug = bind(log.debug, log);
        console.info = bind(log.info, log);
        console.warn = bind(log.warn, log);
        console.error = bind(log.error, log);
    }
    
    // Use empty dummy implementation to ignore logging
    else
    {
        console.log = function() {};
    }
}

// Implement console.debug if missing
if (!console["debug"])
{
    console.debug = console.log;
}

// Implement console.debug if missing
if (!console["info"])
{
    console.info = console.log;
}

// Implement console.debug if missing
if (!console["warn"])
{
    console.warn = console.log;
}

// Implement console.debug if missing
if (!console["error"])
{
    // Simply link it to the log method.
    console.error = console.log;
}

})();
