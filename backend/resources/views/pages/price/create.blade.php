@extends('layouts.app')
@section('title', 'Add New Pricing')
@section('content')
    <div class="row justify-content-center">
        <div class="col-lg-8 mb-4">
            <div class="card card-custom">
                <div class="card-header">
                    <h5 class="card-title mb-0">
                        <i class="fas fa-dollar-sign text-primary me-2"></i>
                        Set Pricing
                    </h5>
                    <small class="text-muted">Configure car pricing and discounts</small>
                </div>
                <div class="card-body">
                    <form action="{{route('price.store')}}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="car" class="form-label">Car Model</label>
                            <select class="form-select" id="car" name="car" required>
                                <option value="" disabled>Select car model</option>
                                @foreach ($cars as $item)
                                    <option value="{{$item->id}}">{{$item->name}}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label">Base Price</label>
                            <input type="text" class="form-control" id="price" name="price" placeholder="0">
                        </div>

                        <div class="mb-3">
                            <label for="model_car" class="form-label">Model Car</label>
                            <input type="text" class="form-control" id="model_car" name="model_car" placeholder="Masukan Model Car">
                        </div>

                        <div class="mb-3">
                            <label for="discount" class="form-label">Discount (%)</label>
                            <input type="text" class="form-control" id="discount" name="discount" placeholder="0">
                        </div>

                        <button type="submit" class="btn btn-primary-custom w-100">
                            <i class="fas fa-save me-2"></i>
                            Save Pricing
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
