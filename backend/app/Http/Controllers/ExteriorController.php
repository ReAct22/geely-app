<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Exterior;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ExteriorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exteriors = Exterior::all();
        return view('pages.exterior.index', compact('exteriors'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cars = Car::all();
        return view('pages.exterior.create', compact('cars'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'required|integer',
            'name' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,png'
        ]);

        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $imageExterior = $request->file('image')->store('exterior', 'public');

        Exterior::create([
            'id_mobil' => $request->id_mobil,
            'name' => $request->name,
            'deskripsi' => $request->deskripsi,
            'image' => $imageExterior
        ]);

        return redirect()->route('exterior.index')->with('success', 'Data Berhasil ditambahkan');
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
        $cars = Car::all();
        $exterior = Exterior::findOrFail($id);
        return view('pages.exterior.edit', compact('exterior', 'cars'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $exterior = Exterior::findOrFail($id);
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'nullable|integer',
            'name' => 'nullable|string|max:255',
            'deskripsi' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,png'
        ]);

        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput();
        }
        $data = $validate->validated();

        if ($request->file('image')) {
            if ($exterior->image && Storage::exists('public/' . $exterior->image)) {
                Storage::delete('public/' . $exterior->image);
            }

            $imageExterior = $request->file('image')->store('exterior', 'public');
            $data['image'] = $imageExterior;
        }

        $exterior->update($data);
        return redirect()->route('exterior.index')->with('success', 'Data berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $exterior = Exterior::findOrFail($id);
        if ($exterior->image && Storage::exists('public/' . $exterior->image)) {
            Storage::delete('public/' . $exterior->image);
        }

        $exterior->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus');
    }
}
