<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exterior extends Model
{
    protected $fillable = [
        'id_mobil', 'image', 'name', 'deskripsi'
    ];

    public function car(){
        return $this->belongsTo(Car::class, 'id_mobil', 'id');
    }
}
