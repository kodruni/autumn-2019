<?php

require_once 'DB.php';
require_once 'DB_functions.php';

require_once 'Game.php';

connect('localhost', 'games', 'root', 'rootroot');

// get data from URL ($_GET)

// // Approach 1: default value & condition
// $orderway = 'ASC';
// if (isset($_GET['way']) && $_GET['way'] == 'desc') {
//     $orderway = 'DESC';
// }

// // Approach 2: ternary operator
// $orderway = isset($_GET['way']) && $_GET['way'] == 'desc' ? 'DESC' : 'ASC';

// Approach 2.1: ternary operator w/ converting to lowercase
$orderway = isset($_GET['way']) && strtolower($_GET['way']) == 'desc' ? 'DESC' : 'ASC';

// // Approach 3: extended 
// if (isset($_GET['way'])) {
//     switch($_GET['way']) {        
//         case 'asc':
//         default:
//             $orderway = 'ASC';
//             break;
//         case 'desc':
//             $orderway = 'DESC';
//             break;
//     }
// } else {
//     $orderway = 'ASC';
// }

$orderby = isset($_GET['orderby']) && strtolower($_GET['orderby']) == 'rating' ? 'rating' : 'name';

$query = "
    SELECT *
    FROM `games`
    WHERE 1
    ORDER BY {$orderby} {$orderway}
";

$games = select($query, [], 'Game');

header('Content-type: application/json');

echo json_encode($games);