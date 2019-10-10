<?php

function truncateString(&$string, $size)
{
    $string = mb_substr($string, 0, $size);
}