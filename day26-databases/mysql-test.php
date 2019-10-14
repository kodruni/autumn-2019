<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';

// connect to a database
connect('localhost', 'world', 'root', 'rootroot');

// prepare a query string
$query = 'SELECT * 
    FROM `country`
    WHERE `Population` > ?
';

// run the query
$results = select($query, [20000000], 'Country');

// var_dump($results);

$query = "
    SELECT *
    FROM `Country`
    WHERE `Code` = ?
    LIMIT 1
";

$czech_rep = select_one($query, ['CZE'], 'Country');

// var_dump($czech_rep);

// $region = new Region;
// $region->name = 'Central Africa';
// $region->slug = 'that-green-part-of-africa';
// $region->insert();

// echo 'A new region was inserted with id ' . $region->id . '<br>';

// update the slug of Central Africa
$query = "
    SELECT *
    FROM `region`
    WHERE `name` = ?
";
$central_africa = select_one($query, ['Central Africa'], 'Region');

var_dump($central_africa);

$central_africa->slug = 'central-africa';
$central_africa->update();