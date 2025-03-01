<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enlace extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'enlace';
    protected $primaryKey = 'id_e'; 
    protected $fillable = ['destino', 'acortado', 'contrasena'];
}
