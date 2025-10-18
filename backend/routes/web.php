<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarsController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExteriorController;
use App\Http\Controllers\InteriorController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\TestimoniController;
use Illuminate\Support\Facades\Route;


Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['auth', 'check.role:admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('home');
    Route::resource('cars', CarsController::class);
    Route::resource('price', PriceController::class);
    Route::resource('color', ColorController::class);
    Route::resource('interior', InteriorController::class);
    Route::resource('exterior', ExteriorController::class);
    Route::resource('testimoni', TestimoniController::class);
});
