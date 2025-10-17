<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'name', 'slug', 'deskripsi', 'cover'
    ];

    public function Prices(){
        return $this->hasMany(Price::class, 'id_mobil', 'id');
    }

    public function color(){
        return $this->hasMany(Color::class, 'id_mobil', 'id');
    }

    public function interiors(){
        return $this->hasMany(Interior::class, 'id_mobil', 'id');
    }

    public function exteriors(){
        return $this->hasMany(Exterior::class, 'id_mobil', 'id');
    }
}
