<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $colors = Color::all();
        return view('pages.colors.index', compact('colors'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cars = Car::all();
        return view('pages.colors.create', compact('cars'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id_mobil' => 'required|integer',
            'hex' => 'required|string',
            'image' => 'required|mimes:png,jpg|max:2049',
            'name' => 'required|string'
        ]);

        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput();
        }

        $imageColor = $request->file('image')->store('imageColor', 'public');

        Color::create([
            'id_mobil' => $request->id_mobil,
            'hex' => $request->hex,
            'image' => $imageColor,
            'name' => $request->name
        ]);

        return redirect()->route('color.index')->with('success', 'Data Color Berhasil Ditambah');
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
        $color = Color::findOrFail($id);
        return view('pages.colors.edit', compact('cars', 'color'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $color = Color::findOrFail($id);

        $validate = Validator::make($request->all(), [
            'id_mobil' => 'nullable|integer',
            'hex' => 'nullable|string',
            'image' => 'nullable|image|mimes:png,jpg|max:2048',
            'name' => 'nullable|string'
        ]);

        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput();
        }

        // Ambil data hasil validasi
        $data = $validate->validated();

        // Cek dan update image jika ada file baru
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($color->image && Storage::exists('public/' . $color->image)) {
                Storage::delete('public/' . $color->image);
            }

            // Upload gambar baru
            $imagePath = $request->file('image')->store('imageColor', 'public');
            $data['image'] = $imagePath;
        }

        // Update data color
        $color->update($data);

        return redirect()->route('color.index')->with('success', 'Data berhasil diperbarui');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $color = Color::findOrFail($id);
        if ($color->image && Storage::disk('public')->exists($color->image)) {
            Storage::disk('public')->delete($color->image);
        }

        $color->delete();
        return redirect()->back()->with('success', 'Data Berhasil dihapus');
    }
}
