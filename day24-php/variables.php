<?php

$foo = 123;

function bar()
{
    // $foo is not defined
}

$my_greeting = "Hello, world!";
 
echo $my_greeting;

unset($my_greeting);
// $my_greeting is no more

echo $my_greeting;

echo 'after';