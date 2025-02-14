<?php

namespace App\Http\Controllers;
use App\Models\Enlace;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ControladorInicio extends Controller
{
    public function index(){
        $codigo = null;
        $entrada = null;
        return view('inicio', compact('codigo', 'entrada'));
    }

    public function acortar(Request $request){
        $campos = $request->validate([
            'url' => 'required|url'
        ]);

        $entrada = $campos['url'];
        $password = $request->input('password', null);

        // Generar un código único para la URL corta
        $codigo = Str::random(6);
        $url = new Enlace;
        $url->destino = $campos['url'];
        $url->acortado = $codigo;
        $url->contrasena = $password;
        $url->save();
        return response()->json(compact('codigo', 'entrada'));
    }

    public function acceder($link = null){
        if($link === null){
            return redirect()->route('inicio.get');
        }

        $enlace = Enlace::where('acortado', $link)->first();
        if(!$enlace){
            return abort(404, 'Enlace no encontrado');
        }

        $destino = $enlace->destino;
        return redirect()->away($destino);
    }

}