<?php

namespace App\Http\Controllers;

use App\Models\Testimoni;
// use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TestimoniController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonis = Testimoni::all();
        return view('pages.testimoni.index', compact('testimonis'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.testimoni.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:png,jpg|max:2046'
        ]);

        if($validate->fails()){
            return redirect()->back()->withErrors($validate)->withInput();
        }
        $imagePath = null;
        if($request->hasfile('image')){
            $imagePath = $request->file('image')->store('testimoni', 'public');
        }

        Testimoni::create([
            'name' => $request->name,
            'deskripsi' => $request->deskripsi,
            'image' => $imagePath
        ]);

        return redirect()->route('testimoni.index')->with('success', 'Data testimoni berhasil ditambahkan');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        return view('pages.testimoni.edit', compact('testimoni'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $testimoni = Testimoni::findOrFail($id);
        $validate = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:png,jpg|max:2046'
        ]);

        if($validate->fails()){
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $imagePath = null;

        if($request->hasFile('image')){
            if($testimoni->image && Storage::exists('public/'.$testimoni->image)){
                Storage::delete('public'.$testimoni->image);
            }

            $imagePath = $request->file('image')->store('testimoni', 'public');
            $validate['image'] = $imagePath;
        }

        $testimoni->update($validate);
        return redirect()->route('testimoni.index')->with('success', 'Data berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
