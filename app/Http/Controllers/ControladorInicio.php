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
        $url->destino = $entrada;
        $url->acortado = $codigo;
        $url->contrasena = $password;
        $url->save();
        return response()->json(compact('codigo', 'entrada'));
    }

    public function acceder($link = null)
    {
        if ($link === null) {
            return redirect()->route('inicio.get');
        }
        $linkS = (string) $link;
        $enlace = Enlace::where('acortado', trim($linkS))->first();
        if (!$enlace) {
            dd($enlace, $linkS);
            return abort(404, 'Enlace no encontrado');
        }
        else{
            if ($enlace->contrasena === null) {
                //dd("El enlace es publico", $enlace);
                // Si no tiene contraseña, redirigir al destino
                return redirect()->away($enlace->destino);
            }
            else{
                //dd("El enlace es privado", $enlace);
                session()->put("acortado", $enlace->acortado);
                session()->save();
                //dd("El enlace es privado", session('acortado'));
                return redirect()->route('contra.get');
            }
        }
    }
    

    public function contra() {    
        if (session()->has('acortado')) {
            return view('contra');
        } else {
            return redirect()->route('inicio.get');
        }
    }  

    public function accederContra(Request $request){
        $acortado = session()->get('acortado');
        $datos = $request->validate([
                                        'password' => 'required|string|min:4',
                                        'cf-turnstile-response' => 'required|string',
                                    ]);
        $enlace = Enlace::where('acortado', $acortado)
                        ->where('contrasena', '=', $datos['password'])
                        ->first();
        if(!$enlace){
            dd("Posiblemente te equivocaste de contrasena");
            return abort(500, 'Error interno');
        }
        else{
            return redirect()->away($enlace->destino);
        }
    }
}