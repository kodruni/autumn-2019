<?php

$pdo = new PDO(
    "mysql:dbname=games;host=127.0.0.1;charset=utf8", 
    'root',
    'rootroot'
);

// var_dump($pdo);

$query = "
    SELECT *
    FROM `games`
    WHERE `rating` > ?
    ORDER BY `rating` DESC
";

// prepare the query, get the statement object
$statement = $pdo->prepare($query);

// execute the query:
// send the query and the values separately to the database
if (!$statement->execute([ 50 ])) {

    // handle errors
    die('There was an error!');
}

// all following fetches will produce arrays with both string and numeric keys (the default):
$statement->setFetchMode(PDO::FETCH_BOTH);

// all following fetches will produce stdClass objects:
$statement->setFetchMode(PDO::FETCH_OBJ);

// all following fetches will produce associative arrays:
$statement->setFetchMode(PDO::FETCH_ASSOC);

// all following fetches will produce custom class objects:
$statement->setFetchMode(PDO::FETCH_CLASS, 'stdClass');

// fetch results one by one
// while($next_result = $statement->fetch()) {
//     var_dump($next_result);
// }

// fetch results all at once
$all_results = $statement->fetchAll();

var_dump($all_results);
