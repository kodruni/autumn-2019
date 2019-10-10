<?php

// prepare data (DB access etc.)
$movies = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight', 
    '12 angry men', 
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];

// send JSON header
header('Content-type: application/json');

// send data as JSON
echo json_encode($movies);