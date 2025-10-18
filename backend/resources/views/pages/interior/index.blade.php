@extends('layouts.app')
@section('title', 'Interior')
@section('content')
    <div class="fade-in">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h1 class="h3 fw-bold text-dark">Interior Management</h1>
                <p class="text-muted">Manage interior options and configurations</p>
            </div>
            <button onclick="window.location.href='{{ route('interior.create') }}'" class="btn btn-primary-custom">
                <i class="fas fa-plus me-2"></i>
                Add Interior Option
            </button>
        </div>

        <div class="row">
            <!-- Add Interior Form -->

            <!-- Interior Options Table -->
            <div class="col-lg-12 mb-4">
                <div class="card card-custom">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="card-title mb-0">Interior Options List</h5>
                            <small class="text-muted">View and manage all interior configurations</small>
                        </div>
                        <div class="search-box">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="form-control search-input"
                                placeholder="Search interior options...">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-custom mb-0" id="interiorTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name Car</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($interiors as $item)
                                        <tr data-id="{{ $loop->index }}">
                                            <td>{{ $item->id }}</td>
                                            <td class="fw-medium">{{ $item->cars->name }}</td>
                                            <td>{{ $item->name }}</td>
                                            <td>
                                                <img src="{{ asset('storage/' . $item->image) }}" class="img-fluid w-50"
                                                    alt="">
                                            </td>
                                            <td>
                                                <button
                                                    onclick="window.location.href='{{ route('interior.edit', $item->id) }}'"
                                                    class="btn btn-sm btn-outline-primary me-1">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <form action="{{ route('interior.destroy', $item->id) }}" class="d-flex"
                                                    method="post">
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
                                            <td colspan="5" class="text-center">Data Tidak Ada</td>
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
