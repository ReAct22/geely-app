@extends('layouts.app')
@section('title', 'Test Drive')
@section('content')
    <div class="fade-in">
        <div class="d-flex flex-column flex-md-row justify-content-beetwen align-items-start align-items-md-center mb-4">
            <div class="">
                <h1 class="h3 fw-bold text-dark mb-1">Data Test Drive</h1>
                <p class="text-muted mb-0">Manage and view all Test Drive</p>
            </div>
        </div>

        <div class="card border-0 shadow-sm">
            <div
                class="card-header bg-white border-bottom d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                    <h5 class="card-title mb-1">Test Drive List</h5>
                    <small class="text-muted">View and manage all Test Drive data</small>
                </div>
                <div class="mt-3 mt-md-0 position-relative" style="max-width: 250px;">
                    <input type="text" class="form-control ps-5" placeholder="Search Test Drive...">
                    <i class="fas fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-muted"></i>
                </div>
            </div>

            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th style="width: 5%">#</th>
                                <th style="width: 20%">#</th>
                                <th></th>
                                <th style="width: 20%">#</th>
                                <th style="width: 15%">#</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    @endsection
