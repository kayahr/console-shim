This small shim implements or completes window.console on browsers which
have no or incomplete console support.  The goal is to be able to use the
console in JavaScript applications without having to worry about JavaScript
errors which might occur when a browser does not provide a native console. 
If no native console is present and an other logging facility is available
(like log4javascript, which is currently the only supported alternate logging
facility) then the emulated console is linked to this logging facility.  If
no alternative logging facility is present then a dummy console is emulated
which silently ignores all logging attempts.

Here is a list of some major browsers, their problems with standard console
support and the solution console-shim uses to fix the problems:

Firefox 3 (without Firebug) and Internet Explorer 6-7:
  Problem: No native console support.
  Solution: Using alternative logging facility.

Firefox 4 (without Firebug):
  Problem: console.debug is missing.
  Solution: Linking console.debug to console.log

Internet Explorer 8-9:
  Problem: Console not available when Developer Tools not started.
  Solution: Using alternative logging facility.
  Problem: console.debug is missing in native console.
  Solution: Linking console.debug to console.log
