<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControladorInicio;

Route::get('/', [ControladorInicio::class, 'index'])->name('ini.get');
Route::get('/inicio', [ControladorInicio::class, 'index'])->name('inicio.get');
Route::post('/inicio', [ControladorInicio::class, 'acortar'])->name('inicio.post');


Route::get('/contra', [ControladorInicio::class, 'contra'])->name('contra.get');
Route::post('/contra', [ControladorInicio::class, 'accederContra'])->name('contra.post');

Route::get('/{link}', [ControladorInicio::class, 'acceder'])->where('link', '.*')->name('acceder');