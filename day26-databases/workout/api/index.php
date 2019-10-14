<?php

include 'data.php';
// now I have $data

require_once 'Celebrity.php';

$celebrities = [];

foreach ($data as $item) {
    $celeb = new Celebrity;
    $celeb->fromArray($item);

    $celebrities[] = $celeb;
}

header('Content-type: application/json');

echo json_encode($celebrities);
