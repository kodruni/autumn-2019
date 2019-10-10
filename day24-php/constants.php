<?php

define('FOO', 123);

define('ROOT_DIR', 'C:\web\something');

echo FOO;

echo ROOT_DIR;

function bar() {
    if (!defined('DAY')) {
        define('DAY', 'Thursday');
    }

    echo FOO;
}

bar();
bar();
bar();

echo DAY;
