<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Price;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prices = Price::all();
        return view('pages.price.index', compact('prices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $cars = Car::all();
        return view('pages.price.create', compact('cars'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'car' => 'required|integer|max:255',
            'price' => 'required|numeric|min:0',
            'discount' => 'required|numeric|min:0',
            'model_car' => 'required|string|max:255'
        ]);

        if ($validate->fails()) {
            return redirect()->back()->withErrors($validate)->withInput();
        }

        Price::create([
            'id_mobil' => $request->car,
            'harga' => $request->price,
            'model' => $request->model_car,
            'discount' => $request->discount
        ]);

        return redirect()->route('price.index')->with('success', 'Data berhasil ditambahkan');
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
        $price = Price::findOrFail($id);
        $cars = Car::all();
        return view('pages.price.edit', compact('price', 'cars'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $price = Price::findOrFail($id);

        $validate = Validator::make($request->all(), [
            'car'       => 'required|integer',
            'price'     => 'required|numeric|min:0',
            'discount'  => 'required|numeric|min:0',
            'model_car' => 'required|string|max:255'
        ]);

        if ($validate->fails()) {
            return redirect()->back()
                ->withErrors($validate)
                ->withInput();
        }

        $price->update([
            'id_mobil' => $request->car,
            'harga'    => $request->price,
            'discount' => $request->discount,
            'model'    => $request->model_car,
        ]);

        return redirect()->route('price.index')
            ->with('success', 'Data harga berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $price = Price::findOrFail($id);
        $price->delete();

        return redirect()->route('prices.index')
            ->with('success', 'Data harga berhasil dihapus!');
    }
}
