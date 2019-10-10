<?php

$number = 0;
$number++;
var_dump($number);


$number = 0;
var_dump($number++);
var_dump($number); // now $number is 1


$number = 0;
var_dump(++$number);

$value = (12 + 12 / 4) == 15;
var_dump($value);


$owns_a_car = false;
$is_rich = true;
 
echo 'He goes to work by ' . ($owns_a_car ? 'car' : ($is_rich ? 'motorcycle' : 'bicycle'));

$username = 'Jan';
 
echo 'Hello ' . ($username ?: 'unknown person');


