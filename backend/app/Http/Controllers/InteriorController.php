<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Interior;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class InteriorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $interiors = Interior::all();
        return view('pages.interior.index', compact('interiors'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cars = Car::all();
        return view('pages.interior.create', compact('cars'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'required|integer',
            'image' => 'required|mimes:png,jpg|max:2049',
            'name' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string|max:255'
        ]);

        if($validate->fails()){
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $imageInterior = $request->file('image')->store('interior', 'public');

        Interior::create([
            'id_mobil' => $request->id_mobil,
            'image' => $imageInterior,
            'name' => $request->name,
            'deskripsi' => $request->deskripsi
        ]);

        return redirect()->route('interior.index')->with('success', 'Data Berhasil diinput');
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
        $interior = Interior::findOrFail($id);
        $cars = Car::all();
        return view('pages.interior.edit', compact('interior', 'cars'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $interior = Interior::findOrFail($id);

        $validate = Validator::make($request->all(), [
            'id_mobil' => 'nullable|integer',
            'image' => 'nullable|image|mimes:png,jpg|max:2048',
            'name' => 'nullable|string|max:255',
            'deskirpsi' => 'nullable|string'
        ]);

        if($validate->fails()){
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $data = $validate->validated();

        if($request->file('image')){
            if($interior->image && Storage::exists('public/'.$interior->image)){
                Storage::delete('public/'.$interior->image);
            }

            $imagePath = $request->file('image')->store('interior', 'public');
            $data['image'] = $imagePath;
        }

        $interior->update($data);

        return redirect()->route('interior.index')->with('success', 'Data berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $interior = Interior::findOrFail($id);
        if($interior->image && Storage::disk('public')->exists($interior->image)){
            Storage::disk('public')->delete($interior->image);
        }

        $interior->delete();
        return redirect()->back()->with('success', 'Data Berhasil dihapus');
    }
}
