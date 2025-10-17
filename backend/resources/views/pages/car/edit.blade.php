@extends('layouts.app')

@section('title', 'Edit Car')

@section('content')
    <div class="row justify-content-center">
        <!-- Edit Car Form -->
        <div class="col-lg-8 mb-4">
            <div class="card card-custom">
                <div class="card-header">
                    <h5 class="card-title mb-0">Edit Car</h5>
                    <small class="text-muted">Update car details below</small>
                </div>
                <div class="card-body">
                    <form action="{{ route('cars.update', $car->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" id="name"
                                name="name" value="{{ old('name', $car->name) }}" placeholder="Enter car name">
                            @error('name')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="deskripsi" class="form-label">Description</label>
                            <textarea class="form-control @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" rows="3"
                                placeholder="Enter car description">{{ old('deskripsi', $car->deskripsi) }}</textarea>
                            @error('deskripsi')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="cover" class="form-label">Cover</label>
                            <input type="file" class="form-control @error('cover') is-invalid @enderror" id="cover"
                                name="cover">
                            @error('cover')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        @if ($car->cover)
                            <div class="mb-3">
                                <img src="{{ asset('storage/' . $car->cover) }}" alt="Car Cover" class="img-fluid rounded-4"
                                    style="max-width: 200px;">
                            </div>
                        @endif

                        <button type="submit" class="btn btn-primary-custom w-100">
                            <i class="fas fa-save me-2"></i>
                            Update Car
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
