<?php

$days_to_christmas = 0;

while ($days_to_christmas > 0) {

    $days_to_christmas--;

    echo "There are still {$days_to_christmas} days to christmas.<br>";
}

$days_to_christmas = 0;

do {
    $days_to_christmas--;

    echo "There are still {$days_to_christmas} days to christmas.<br>";
} while ($days_to_christmas > 0);

for ($year = 2019; $year <= 2022; $year++) {

    for ($days_to_christmas = 76; $days_to_christmas > 0; $days_to_christmas--) {

        if ($days_to_christmas == 70) {
            continue;
        }

        echo "There are still {$days_to_christmas} days to christmas.<br>";

        if ($days_to_christmas == 60) {
            break;
        }

        if ($days_to_christmas == 72 && $year == 2020) {
            break 2;
        }
    }
}
