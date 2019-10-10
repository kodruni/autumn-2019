<?php

$first_name = 'Bruce';
$surname = 'Wayne';

echo 'First name: ' . $first_name . '<br>';
echo "Surname: {$surname}<br>";

$year_of_birth = 1939;
$height = 186;

echo "Year of birth: {$year_of_birth}<br>
      Height: {$height}<br>";

define('SERVER_SOFTWARE', 'Apache');

echo 'This server is running on ' . SERVER_SOFTWARE . '.<br>';

define('MY_OS', 'Windows');

echo 'My operating system is ' . MY_OS . '.<br>';

function greet($whom)
{
    return 'Hello, ' . $whom . '!';
}

echo greet('baby') . '<br>';

function truncateString(&$string, $size)
{
    $string = mb_substr($string, 0, $size);
}


$sentence = 'Quick brown fox jumps over the lazy dog.';

truncateString($sentence, 10);

echo $sentence; // prints 'Quick brow'
