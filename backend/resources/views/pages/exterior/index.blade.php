@extends('layouts.app')
@section('title', 'Exterior')
@section('content')
    {{-- Success Toast --}}
    @if (session('success'))
        <div aria-live="polite" aria-atomic="true" class="position-relative">
            <!-- Container Toast (fixed kanan atas) -->
            <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 2000">
                <div class="toast align-items-center text-white bg-success border-0 shadow-lg" role="alert"
                    aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <i class="fas fa-check-circle me-2"></i> {{ session('success') }}
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    @endif
    <div class="fade-in">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h1 class="h3 fw-bold text-dark">Exterior Management</h1>
                <p class="text-muted">Manage exterior packages and styling options</p>
            </div>
            <button onclick="window.location.href='{{ route('exterior.create') }}'" class="btn btn-primary-custom">
                <i class="fas fa-plus me-2"></i>
                Add Exterior Option
            </button>
        </div>

        <div class="row">
            <!-- Exterior Options Table -->
            <div class="col-lg-12 mb-4">
                <div class="card card-custom">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="card-title mb-0">Exterior Packages List</h5>
                            <small class="text-muted">View and manage all exterior options</small>
                        </div>
                        <div class="search-box">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="form-control search-input" placeholder="Search packages...">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-custom mb-0" id="exteriorTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Car</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($exteriors as $item)
                                        <tr data-id="{{ $loop->index }}">
                                            <td>{{ $loop->iteration }}</td>
                                            <td class="fw-medium">{{ $item->car->name }}</td>
                                            <td>{{ $item->name }}</td>
                                            <td>{{ $item->deskripsi }}</td>
                                            <td>
                                                <img src="{{ asset('storage/' . $item->image) }}" class="w-50 img-thumbnail"
                                                    alt="">
                                            </td>
                                            <td>
                                                <button
                                                    onclick="window.location.href='{{ route('exterior.edit', $item->id) }}'"
                                                    class="btn btn-sm btn-outline-primary me-1">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <form action="{{ route('exterior.destroy', $item->id) }}" method="post"
                                                    class="d-inline">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button class="btn btn-sm btn-outline-danger">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="6" class="text-center">Data Tidak ada</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script script>
        document.addEventListener("DOMContentLoaded", () => {
            const toastElList = document.querySelectorAll('.toast');
            toastElList.forEach(toastEl => new bootstrap.Toast(toastEl, {
                delay: 4000
            }).show());
        });
    </script>
@endpush
