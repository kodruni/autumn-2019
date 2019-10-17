<?php

class Pancake
{
    public function prepare()
    {
        echo 'Preparing flour...<br>';
        echo 'Preparing milk...<br>';
        echo 'Preparing eggs...<br>';
    }
}


class BlueberryPancake extends Pancake
{
    public function prepare()
    {
        parent::prepare();

        echo 'Preparing blueberries...<br>';
    }
}

$blueberry_pancake = new BlueberryPancake;

$blueberry_pancake->prepare();