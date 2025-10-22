<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\TestDrive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApiTestDriveController extends Controller
{
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'required|integer',
            'name' => 'required|string|max:255',
            'notelp' => 'required|string|max:255'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validate->errors()
            ], 422);
        }

        TestDrive::create([
            'id_mobil' => $request->id_mobil,
            'name' => $request->name,
            'notelp' => $request->notelp
        ]);

        return response()->json([
            'status' => true,
            'message' => "Data berhasil disimpan"
        ]);
    }
}
