/** 
 * @preserve ${project.artifactId} ${project.version}
 * ${project.url}
 * Copyright (C) 2011 Klaus Reimer <k@ailis.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */
 
(function(){

// Create console if not present
var console = (/** @type {Object} */ window.console);
if (!console) window.console = console = {};

// Implement console log if needed
if (!console["log"])
{
    // TODO: Add log4javascript support here.
    
    // The last fall back is using a dummy method for simply ignoring logging
    console.log = function() {};
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
