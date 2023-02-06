<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\VisitorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('visitors', [VisitorController::class, 'index']);
Route::post('visitor', [VisitorController::class, 'store']);
Route::delete('visitor/{id}', [VisitorController::class, 'destroy']);
Route::get('visitor/{id}', [VisitorController::class, 'show']);
Route::get('visitor-types', [VisitorController::class, 'getTypes']);

