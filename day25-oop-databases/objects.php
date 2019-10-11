<?php

require_once 'User.php';

$steve = new User('steve', '12345');

$steve->id = 1;
$steve->username = 'steve';
$steve->name = 'Stephen';

// var_dump($steve);
$steve->dumpMe();

unset($steve);

$bob = new User('bob', 'love');

// var_dump($bob);
$bob->dumpMe();
