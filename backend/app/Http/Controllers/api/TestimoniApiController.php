<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Testimoni;
use Illuminate\Http\Request;

class TestimoniApiController extends Controller
{
    public function index(){
        $testimonis = Testimoni::all();
        return response()->json([
            'status' => true,
            'data' => $testimonis
        ]);
    }
}
