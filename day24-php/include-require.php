<?php

require_once 'libraries/my-functions.php';

$sentence = 'Quick brown fox jumps over the lazy dog.';

truncateString($sentence, 10);

echo $sentence; // prints 'Quick brow'