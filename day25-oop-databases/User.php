<?php

class User
{
    // NO EXECUTABLE CODE HERE!

    public $id = null;
    public $username = null;
    public $name = null;
    public $password = null;
    public $number_of_posts = null;
    public $created_at = null;

    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;

        $this->created_at = date('Y-m-d H:i:s');
    }

    public function dumpMe()
    {
        var_dump($this);
    }

    public function __destruct()
    {
        $this->username = 'an';
        var_dump('User is being destroyed!');
    }
}