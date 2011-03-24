/** @type {Object} */
var log4javascript = {};

/**
 * @constructor
 * @param {number} level
 * @param {string} name
 */
log4javascript.Level = function(level, name) {};

/** @type {log4javascript.Level} */
log4javascript.Level.ALL;

/** @type {log4javascript.Level} */
log4javascript.Level.INFO;

/** @type {log4javascript.Level} */
log4javascript.Level.DEBUG;

/** @type {log4javascript.Level} */
log4javascript.Level.WARN;

/** @type {log4javascript.Level} */
log4javascript.Level.ERROR;

/** @return {log4javascript.Logger} */
log4javascript.getDefaultLogger = function() {};


/**
 * @constructor
 */
log4javascript.Logger = function() {};

log4javascript.Logger.prototype.debug = function() {};

log4javascript.Logger.prototype.info = function() {};

log4javascript.Logger.prototype.error = function() {};

log4javascript.Logger.prototype.warn = function() {};

/** 
 * @param {log4javascript.Level} level
 */
log4javascript.Logger.prototype.setLevel= function(level) {};
