
// ES5
function my_function(argument) {
    do_something();

    return 'value';
}

function(argument) {
    do_something();

    return 'value';
}

// ES6
(argument, argument2) => {
    do_something();

    return 'value';
}

argument => {
    do_something();

    return 'value';
}

argument => 'value';

argument => (
    'value'
);
