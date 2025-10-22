<?php

namespace App\Http\Controllers;

use App\Models\TestDrive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestDriveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testdrives = TestDrive::all();
        return view('pages.testdrive.index', compact('testdrives'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testdrive = TestDrive::findOrFail($id);
        return view('pages.testdrive.edit', compact('testdrive'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $testdrive = TestDrive::findOrFail($id);
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'nullable|integer',
            'name' => 'nullable|string|max:255',
            'notelp' => 'nullable|string'
        ]);

        if($validate->fails()){
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $testdrive->update([
            'id_mobil' => $request->id_mobil === $testdrive->id_mobil ? $testdrive->id_mobil : $request->id_mobil,
            'name' => $request->name === $testdrive->name ? $testdrive->name : $request->name,
            'notelp' => $request->notelp === $testdrive->notelp ? $testdrive->notelp : $request->notelp
        ]);

        return redirect()->route('testdrive.index')->with('success', 'data berhasil diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testdrive = TestDrive::findOrFail($id);

        $testdrive->delete();

        return redirect()->back()->with('success', 'data berhasil dihapus');
    }
}
