<?php

// passing by value
function asses_number($a)
{
    $a++;

    return $a > 10;
}

// passing by reference
function is_number_small(&$b)
{
    $b++;

    return $b < 10;
}

$number = 6;

$result = is_number_small($number); // false

function is_odd($number, &$is_big = false)
{
    $is_big = $number > 100;

    return $number % 2 == 1;
}

// passing by reference to get additional value from
// calling the function
$number_is_odd = is_odd(123, $is_big);

if ($is_big) {
    echo 'is is big';
} else {
    echo 'is is not big';
}

// creating a reference without a function
$number = 6;
echo $number; // 6

$copy = &$number;
$copy2 = $number;
$copy++;

unset($copy);

echo $number; // 7

function headline($text, $level = 1)
{
    return "<h{$level}>{$text}</h{$level}>";
}

// second parameter gets default value 1
echo headline('Main headline');

// second parameter gets given value 2
echo headline('Secondary headline', 2);