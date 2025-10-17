<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interior extends Model
{
    protected $fillable = [
        'id_mobil', 'image', 'name', 'deskripsi'
    ];

    public function cars(){
        return $this->belongsTo(Car::class, 'id_mobil', 'id');
    }
}
