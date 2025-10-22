<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TestDrive extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'id_mobil', 'name', 'notelp'
    ];

    public function cars(){
        return $this->belongsTo(Car::class, 'id_mobil', 'id');
    }
}
