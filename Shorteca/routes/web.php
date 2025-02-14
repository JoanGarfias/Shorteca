<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorInicio;

Route::get('/', [ControladorInicio::class, 'index'])->name('ini.get');
Route::get('/inicio', [ControladorInicio::class, 'index'])->name('inicio.get');
Route::post('/inicio', [ControladorInicio::class, 'acortar'])->name('inicio.post');


Route::get('/{link}', [ControladorInicio::class, 'acceder'])->name('acceso.get');
