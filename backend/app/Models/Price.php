<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Price extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'id_mobil', 'harga', 'model', 'discount'
    ];

    public function cars(){
        return $this->belongsTo(Car::class, 'id_mobil', 'id');
    }
}
