<?php

// while loop
echo '<h2>While loop</h2>';

$time_served = 0;

while ($time_served < 10) {

    $time_served++;

    echo "The prisoner has served {$time_served} years.<br>";
}

// do .. while loop
echo '<h2>do .. while loop</h2>';

$time_served = 0;

do {

    $time_served++;

    echo "The prisoner has served {$time_served} years.<br>";
}
while ($time_served < 10);

// for loop
echo '<h2>for loop</h2>';

for ($i = 0; $i < 5; $i++) {
    echo "The prisoner has " . (5 - $i) . " more years to serve.<br>";
}

// continue & break
echo '<h2>continue & break</h2>';

for ($i = 10; $i > 0; $i--) {
    echo "The prisoner has {$i} more years to serve.<br>";

    if ($i > 5) {
        continue;
    }

    echo 'Going to a parole hearing...<br>';

    if ($i == 2) {
        echo 'Paroled!<br>';
        break;
    }
}