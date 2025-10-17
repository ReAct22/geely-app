<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $fillable = [
        'id_mobil', 'hex', 'image', 'name'
    ];

    public function cars(){
        return $this->belongsTo(Car::class, 'id_mobil', 'id');
    }
}
