<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientsController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Clientes
Route::get('/clients', [ClientsController::class, 'getClients']);
Route::get('/clients/{clientId}', [ClientsController::class, 'getClient']);
Route::post('/clients', [ClientsController::class, 'store']);
Route::delete('/clients/{clientId}', [ClientsController::class, 'destroy']);
Route::put('/clients/{clientId}', [ClientsController::class, 'update']);
