<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showLoginForm(){
        return view('auth.login');
    }

    public function login(Request $request){
        $credential = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if($user && Hash::check($request->password, $user->password)){
            Auth::login($user);
            return redirect()->route('home')->with('success', 'Login Berhasil');
        }

        return back()->withErrors(['email' => 'Email, password salah']);
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('login');
    }
}
