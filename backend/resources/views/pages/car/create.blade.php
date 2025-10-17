@extends('layouts.app')

@section('title', 'Add New Mobil')

@section('content')
    <div class="row justify-content-center">
        {{-- Error Toasts --}}
        @if ($errors->any())
            <div aria-live="polite" aria-atomic="true" class="position-relative">
                <!-- Container Toast (fixed di kanan atas) -->
                <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 2000">
                    @foreach ($errors->all() as $error)
                        <div class="toast align-items-center border-0 shadow-lg mb-2 text-white bg-danger" role="alert"
                            aria-live="assertive" aria-atomic="true">
                            <div class="d-flex">
                                <div class="toast-body">
                                    <i class="fas fa-exclamation-circle me-2"></i> {{ $error }}
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif


        <div class="col-lg-8 mb-4">
            <div class="card card-custom">
                <div class="card-header">
                    <h5 class="card-title mb-0">Add New Car</h5>
                    <small class="text-muted">Enter car details below</small>
                </div>
                <div class="card-body">
                    <form action="{{ route('cars.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" id="name"
                                name="name" value="{{ old('name') }}" placeholder="Enter car name">
                            @error('name')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="deskripsi" class="form-label">Description</label>
                            <textarea class="form-control @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" rows="3"
                                placeholder="Enter car description">{{ old('deskripsi') }}</textarea>
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

                        <button type="submit" class="btn btn-primary-custom w-100">
                            <i class="fas fa-plus me-2"></i>
                            Add Car
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const toastElList = document.querySelectorAll('.toast');
            toastElList.forEach(toastEl => new bootstrap.Toast(toastEl, {
                delay: 4000
            }).show());
        });
    </script>

@endsection
