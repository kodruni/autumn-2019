<?php

function browse_directory($directory)
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file);
        } else {
            // do something with the file

            echo $directory.'/'.$file.'<br>';
        }
    }
}

// browse_directory(__DIR__.'/../workout');