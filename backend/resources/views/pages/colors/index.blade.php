@extends('layouts.app')
@section('title', 'Colors data')
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
                <h1 class="h3 fw-bold text-dark">Colors Management</h1>
                <p class="text-muted">Manage car paint colors and finishes</p>
            </div>
            <button onclick="window.location.href='{{ route('color.create') }}'" class="btn btn-primary-custom">
                <i class="fas fa-plus me-2"></i>
                Add New Color
            </button>
        </div>

        <div class="row justify-content-center">
            <!-- Colors Table -->
            <div class="col-lg-12 mb-4">
                <div class="card card-custom">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="card-title mb-0">Colors List</h5>
                            <small class="text-muted">View and manage all available colors</small>
                        </div>
                        <div class="search-box">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="form-control search-input" placeholder="Search colors...">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-custom mb-0" id="colorsTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Car</th>
                                        <th>preview</th>
                                        <th>Hex Color</th>
                                        <th>Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($colors as $item)
                                        <tr data-id="1">
                                            <td>{{ $loop->iteration }}</td>
                                            <td>
                                                {{ $item->cars->name }}
                                            </td>
                                            <td>
                                                <div class="color-preview" style="background-color: {{ $item->hex }}">
                                                </div>
                                            </td>
                                            <td class="font-monospace small">{{ $item->hex }}</td>
                                            <td class="fw-medium">{{ $item->name }}</td>
                                            <td>
                                                <button
                                                    onclick="window.location.href='{{ route('color.edit', $item->id) }}'"
                                                    class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="color">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <form action="{{ route('color.destroy', $item->id) }}" class="d-inline"
                                                    method="post">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button class="btn btn-sm btn-outline-danger btn-delete"
                                                        data-type="color">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td colspan="7" class="text-center">Data Tidak Ada</td>
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
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const toastElList = document.querySelectorAll('.toast');
            toastElList.forEach(toastEl => new bootstrap.Toast(toastEl, {
                delay: 4000
            }).show());
        });
    </script>
@endpush
