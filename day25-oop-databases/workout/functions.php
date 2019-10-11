<?php

// 6.
function leave_hobbiton($party)
{
    // 7.
    $party = array_merge($party, [
        'merry' => 'Meriadoc Brandybuck',
        'pippin' => 'Peregrin Took'
    ]);

    // 8.
    return $party;
}

// 10.
function go_to_bree($party)
{
    // 11.
    $party['strider'] = 'Strider';

    // 12.
    return $party;
}

// 14.
function go_to_weathertop($party)
{
    // 15.
    $party = array_merge($party, [
        'Witch King of Angmar',
        'Nazgûl #2',
        'Nazgûl #3',
        'Nazgûl #4',
        'Nazgûl #5',
        'Nazgûl #6',
        'Nazgûl #7',
        'Nazgûl #8',
        'Nazgûl #9'
    ]);

    return $party;
}

// 17.
function meet_arwen($party)
{
    // 18.
    $party['arwen'] = 'Arwen Undómiel';

    // 19.
    array_splice($party, -10, 9);

    return $party;
}

// 21. 
function go_to_rivendell(&$party)
{
    // 22.
    unset($party['arwen']);

    // 23.
    $party = array_merge($party, [
        'gandalf' => 'Gandalf the Grey',
        'boromir' => 'Boromir',
        'legolas' => 'Legolas',
        'gimli' => 'Gimli'
    ]);

    // 23.
    $party['strider'] = 'Aragorn';
}

// 25.
function go_to_moria(&$party)
{
    // 26.
    unset($party['gandalf']);
}

// 28.
function go_to_falls_of_rauros(&$party)
{
    // 29.
    $party = array_merge($party, array_fill(0, 1000, 'Orc'));

    // 30.
    unset($party['boromir']);
}

// 32.
function break_fellowship($party)
{
    // 33.
    $mordor_party = [];

    // 34.
    $mordor_party['frodo'] = $party['frodo'];
    $mordor_party['sam'] = $party['sam'];
    $mordor_party['ring'] = $party['ring'];

    // 35.
    $hunting_party = [];

    // 36.
    $hunting_party['strider'] = $party['strider'];
    $hunting_party['legolas'] = $party['legolas'];
    $hunting_party['gimli'] = $party['gimli'];

    // 37.
    $hungry_party = [];

    // 38.
    $hungry_party = array_diff_key($party, $mordor_party, $hunting_party);

    // 39.
    return [
        $mordor_party,
        $hunting_party,
        $hungry_party
    ];
}