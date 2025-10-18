@extends('layouts.app')
@section('title', 'Testimoni')

@section('content')
    <div class="fade-in">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div>
                <h1 class="h3 fw-bold text-dark mb-1">Customer Testimoni</h1>
                <p class="text-muted mb-0">Manage and view all customer testimonials</p>
            </div>
            <button onclick="window.location.href='{{ route('testimoni.create') }}'"
                class="btn btn-primary mt-3 mt-md-0 shadow-sm">
                <i class="fas fa-plus me-2"></i> Add Testimoni
            </button>
        </div>

        <div class="card border-0 shadow-sm">
            <div
                class="card-header bg-white border-bottom d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                    <h5 class="card-title mb-1">Testimoni List</h5>
                    <small class="text-muted">View and manage all testimoni data</small>
                </div>
                <div class="mt-3 mt-md-0 position-relative" style="max-width: 250px;">
                    <input type="text" class="form-control ps-5" placeholder="Search Testimoni...">
                    <i class="fas fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-muted"></i>
                </div>
            </div>

            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th style="width: 5%;">#</th>
                                <th style="width: 20%;">Name</th>
                                <th>Description</th>
                                <th style="width: 20%;">Image</th>
                                <th style="width: 15%;" class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($testimonis as $item)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td class="fw-semibold">{{ $item->name }}</td>
                                    <td>{{ Str::limit($item->deskripsi, 80, '...') }}</td>
                                    <td>
                                        <img src="{{ asset('storage/' . $item->image) }}" class="img-thumbnail rounded"
                                            style="max-width: 100px; height: auto;" alt="{{ $item->name }}">
                                    </td>
                                    <td class="text-center">
                                        <div class="d-flex justify-content-center gap-2">
                                            <button
                                                onclick="window.location.href='{{ route('testimoni.edit', $item->id) }}'"
                                                class="btn btn-sm btn-outline-primary">
                                                <i class="fas fa-edit"></i>
                                            </button>
                                            <form action="{{ route('testimoni.destroy', $item->id) }}" method="POST"
                                                onsubmit="return confirm('Yakin hapus data ini?')">
                                                @csrf
                                                @method('DELETE')
                                                <button class="btn btn-sm btn-outline-danger">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="5" class="text-center py-4 text-muted">
                                        <i class="fas fa-info-circle me-2"></i> Tidak ada data testimoni.
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
