<?php

class Animal
{
    protected $hungry = true;

    public function eat()
    {
        $this->hungry = false;
    }
}

trait Domesticated
{
    public function beFed()
    {
        $this->hungry = false;
    }
}

class Dog extends Animal
{
    use Domesticated;
}

class Sheep extends Animal
{
    use Domesticated;
}

class Wolf extends Animal
{
    
}

$dog = new Dog;
$dog->beFed();

$wolf = new Wolf;
$wolf->beFed();