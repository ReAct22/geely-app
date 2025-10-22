<?php

use App\Http\Controllers\api\ApiTestDriveController;
use App\Http\Controllers\api\CarController;
use App\Http\Controllers\api\TestimoniApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/cars', [CarController::class, 'index']);
Route::get('/carsall', [CarController::class, 'getAll']);
Route::get('/cars/{slug}', [CarController::class, 'getCarbySlug']);
Route::get('/testimoni', [TestimoniApiController::class, 'index']);
Route::post('/testdrive', [ApiTestDriveController::class, 'store']);
