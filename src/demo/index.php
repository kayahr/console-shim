<?php require_once("../../target/demo/resolver.php"); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Console shim demo</title>
    <?php $resolver->includeScript("log4javascript.js"); ?>
    <?php $resolver->includeScript("console.js"); ?>
    <script type="text/javascript">
    /* <![CTYPE[ */
    
    console.log("This is standard log message");
    console.debug("This is a debug message.");
    console.info("This is an info message.");
    console.warn("This is a warning message.");
    console.error("This is an error message (Not a real error).");
    console.info("This is a message with two arguments:", 53, 42);
    console.info("This is a message with aformat string. First arg: %s, second arg: %s, Additional args:", 1, 2, 3, 4);
    
    /* ]]> */
    </script>
  </head>
  <body>
    <h1>Console shim demo</h1>
    <p>
      Check your console. It should display some nice messages. If your
      browser has no console then at least no Javascript error should have
      been thrown.
    </p>
  </body>
</html>
