<?php

class Region
{
    public $id = null;
    public $name = null;
    public $slug = null;

    public function insert()
    {
        $query = "
            INSERT 
            INTO `region`
            (`name`, `slug`)
            VALUES
            (?, ?)
        ";

        // run the insert query in the database, supplying
        // this object's properties for values
        insert($query, [$this->name, $this->slug]);

        $this->id = last_insert_id();
    }

    public function update()
    {
        // if PK is empty, return false
        if (!$this->id) {
            return false;
        }

        $query = "
            UPDATE `region`
            SET `name` = ?,
                `slug` = ?
            WHERE `id` = ?
        ";

        update($query, [
            $this->name,
            $this->slug,
            $this->id
        ]);
    }
}