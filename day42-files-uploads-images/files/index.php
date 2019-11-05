<?php

var_dump(__FILE__);

var_dump(__DIR__);

var_dump(
    pathinfo(__FILE__)
);

var_dump(
    pathinfo(__FILE__, PATHINFO_EXTENSION)
);

switch (pathinfo(__FILE__, PATHINFO_EXTENSION)) {
    case 'php':
        echo 'Treating this as a PHP file!';
        break;
    case 'jpg':
        echo 'Treating this as a JPG file!';
        break;
}

var_dump(
    scandir(__DIR__)
);

$directory_handle = opendir(__DIR__);

while(false !== ($file = readdir($directory_handle))) {
    var_dump($file);
}

closedir($directory_handle);

// mkdir('2020');

// rmdir('2020');

var_dump(
    is_dir('2019')
);

var_dump(
    is_dir('photos.txt')
);


var_dump(
    file_exists('2018/info.txt')
);

var_dump(
    file_exists('2020')
);

$file_handle = fopen('photos.txt', 'r');

while (false !== ($line = fgets($file_handle))) {
    var_dump($line);
}

fclose($file_handle);

$file_handle = fopen('2019/info.txt', 'a');

fwrite($file_handle, "Photos from our\r\n2019\r\nvacation"."\r\n");

fclose($file_handle);


$data = [
    'name' => 'Bruce',
    'surname' => 'Wayne',
    'job' => 'Billionaire',
    'yob' => 1939,
    'bio' => 'Once upon a time
    there was a boy.
    His parents were murdered.
    So he became Batman.'
];

$fh = fopen('data.csv', 'w');

fputcsv($fh, $data);

fclose($fh);

$fh = fopen('data.csv', 'r');

while (false !== ($line = fgetcsv($fh))) {
    var_dump($line);
}

fclose($fh);

var_dump(
    file('photos.txt')
);

var_dump(
    file_get_contents('photos.txt')
);

file_put_contents(
    'data.json',
    json_encode($data)
);

var_dump(
    json_decode(file_get_contents('data.json'))
);

var_dump(
    json_decode(file_get_contents('data.json'), true)
);

unlink('data.json');