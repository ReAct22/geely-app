<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cars = Car::all();
        return view('pages.car.index', compact('cars'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.car.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // buat validator -> data dulu, lalu rules
        $validator = Validator::make($request->all(), [
            'name'      => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'cover'     => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // data yang sudah tervalidasi
        $data = $validator->validated();

        $coverPath = null;
        if ($request->hasFile('cover')) {
            // simpan di storage/app/public/covers
            $coverPath = $request->file('cover')->store('covers', 'public');
        }

        Car::create([
            'name'      => $data['name'],
            'slug'      => Str::slug($data['name']),
            'deskripsi' => $data['deskripsi'],
            'cover'     => $coverPath,
        ]);

        return redirect()->route('cars.index')->with('success', 'Data Berhasil Diinput');
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
        $car = Car::findOrFail($id);
        return view('pages.car.edit', compact('car'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // 1. Validasi input
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // 2. Ambil data mobil
        $car = Car::findOrFail($id);

        // 3. Handle cover baru
        if ($request->hasFile('cover')) {
            // Hapus cover lama kalau ada
            if ($car->cover && Storage::exists('public/' . $car->cover)) {
                Storage::delete('public/' . $car->cover);
            }

            // Simpan cover baru
            $path = $request->file('cover')->store('cars', 'public');
            $validated['cover'] = $path;
        }

        // 4. Update data mobil
        $car->update($validated);

        // 5. Redirect dengan pesan sukses
        return redirect()->route('cars.index')->with('success', 'Car updated successfully!');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Cari data mobil
        $car = Car::findOrFail($id);

        // Hapus cover dari storage jika ada
        if ($car->cover && Storage::disk('public')->exists($car->cover)) {
            Storage::disk('public')->delete($car->cover);
        }

        // Hapus data mobil dari database
        $car->delete();

        // Redirect dengan pesan sukses
        return redirect()->route('cars.index')->with('success', 'Data mobil berhasil dihapus');
    }
}
