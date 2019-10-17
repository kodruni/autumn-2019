<?php

class Dog
{
    public static $total_number = 0;

    public static function getNumberOfDogs()
    {
        return self::$total_number;
        return static::$total_number;

        return Dog::$total_number;
    }

    public $name = null;
    public $breed = null;
    
    public function whoAmI()
    {
        return 'I am an instance of class '.static::class;
    }
}

$ben = new Dog;
$jerry = new Dog;

$ben->name;

Dog::$total_number = 2;

echo Dog::getNumberOfDogs();
