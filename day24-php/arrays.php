<?php

$fruit_colors = [
    'Apple' => 'Red',
    'Pear' => 'Green',
    'Orange' => 'Orange'
];

$fruit_colors['green_one'] = 'Pear';

$fruit_colors[] = 'Mango';

array_push($fruit_colors, 'Lychee');

var_dump($fruit_colors);

foreach ($fruit_colors as $name) {

    var_dump($name);
}

$fruit = 'Pineapple';

foreach ($fruit_colors as $fruit => $color) {

    echo 'The color of ' . $fruit . ' is ' . $color . '<br>';
}

var_dump($fruit);
var_dump($color);


asort($fruit_colors);

var_dump($fruit_colors);


$fruit_colors = [
    'Apple' => 'Red',
    'Pear' => 'Green',
    'Orange' => 'Orange',
    'Lychee' => 'Pink',
    0 => 'Black'
];

$fruit_origin = [
    'Apple' => 'Czech',
    'Pear' => 'France',
    'Orange' => 'Spain',
    'Pineapple' => 'Hawaii',
    0 => 'Moravia'
];

$merged = array_merge($fruit_colors, $fruit_origin);

var_dump($merged);

echo '<hr>';

$user_input = [
    'name' => 'Peter',
    'last_name' => 'Parker',
];

$defaults = [
    'name' => null,
    'last_name' => null,
    'age' => null,
    'email' => null
];

$user_input = array_merge($defaults, $user_input);

var_dump($user_input);