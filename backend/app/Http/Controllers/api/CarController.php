<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index(){
        $cars = Car::with(['Prices', 'color', 'interiors', 'exteriors'])->get();

        return response()->json([
            'status'=>'success',
            'data' => $cars
        ]);
    }

    public function getCarBySlug(string $slug){
        $car = Car::with(['Prices', 'color', 'interiors', 'exteriors'])->where('slug', $slug)->get();

        return response()->json([
            'status' => 'success',
            'data' => $car
        ]);
    }
}
