@extends('layouts.app')
@section('title', 'Pricing')
@section('content')
    <div class="fade-in">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h1 class="h3 fw-bold text-dark">Pricing Management</h1>
                <p class="text-muted">Manage car pricing and discount strategies</p>
            </div>
            <button onclick="window.location.href='{{ route('price.create') }}'" class="btn btn-primary-custom">
                <i class="fas fa-plus me-2"></i>
                Add Price Rule
            </button>
        </div>

        <!-- Pricing Overview Cards -->
        <div class="row mb-4">
            <div class="col-md-3 mb-3">
                <div class="card card-custom">
                    <div class="card-body text-center">
                        <i class="fas fa-dollar-sign fa-2x text-primary mb-2"></i>
                        <div class="h5 fw-bold">$59,375</div>
                        <div class="small text-muted">Average Price</div>
                        <small class="text-success d-flex align-items-center justify-content-center mt-1">
                            <i class="fas fa-arrow-up me-1"></i>
                            +12% from last month
                        </small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom">
                    <div class="card-body text-center">
                        <i class="fas fa-percentage fa-2x text-warning mb-2"></i>
                        <div class="h5 fw-bold">4.2%</div>
                        <div class="small text-muted">Total Discount</div>
                        <small class="text-muted">Average discount rate</small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom">
                    <div class="card-body text-center">
                        <i class="fas fa-tags fa-2x text-success mb-2"></i>
                        <div class="h5 fw-bold">8</div>
                        <div class="small text-muted">Active Promotions</div>
                        <small class="text-success">Currently running</small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom">
                    <div class="card-body text-center">
                        <i class="fas fa-chart-line fa-2x text-primary mb-2"></i>
                        <div class="h5 fw-bold">+15.8%</div>
                        <div class="small text-muted">Revenue Impact</div>
                        <small class="text-primary">vs last quarter</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Add Pricing Form -->


            <!-- Pricing Table -->
            <div class="col-lg-12 mb-4">
                <div class="card card-custom">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="card-title mb-0">Current Pricing</h5>
                            <small class="text-muted">View and manage all car pricing</small>
                        </div>
                        <div class="search-box">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="form-control search-input" placeholder="Search pricing...">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-custom mb-0" id="pricingTable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Mobil</th>
                                        <th>Base Price</th>
                                        <th>Model</th>
                                        <th>Discount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($prices as $item)
                                        <tr data-id="{{ $loop->index }}">
                                            <td>{{ $loop->iteration }}</td>
                                            <td class="fw-medium">{{ $item->cars->name }}</td>
                                            <td>{{ $item->harga }}</td>
                                            <td>{{ $item->model }}</td>
                                            <td>{{ $item->discount }}</td>
                                            <td>
                                                <button
                                                    onclick="window.location.href='{{ route('price.edit', $item->id) }}'"
                                                    class="btn btn-sm btn-outline-primary btn-edit me-1">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <form action="{{ route('price.destroy', $item->id) }}" class="d-inline"
                                                    method="post">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button class="btn btn-sm btn-outline-danger btn-delete"
                                                        data-type="pricing">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td class="fw-bold text-center" colspan="6">Data Tidak Ada</td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pricing Analytics -->
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card card-custom">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Price History</h5>
                        <small class="text-muted">Recent pricing changes</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <div class="fw-medium">BMW X5 - Price Update</div>
                                <small class="text-muted">$65,000 → $62,000</small>
                            </div>
                            <span class="text-muted small">2 hours ago</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <div class="fw-medium">Mercedes C-Class - Discount Applied</div>
                                <small class="text-muted">8% discount added</small>
                            </div>
                            <span class="text-muted small">1 day ago</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="fw-medium">Tesla Model S - MSRP Update</div>
                                <small class="text-muted">$89,000 → $91,000</small>
                            </div>
                            <span class="text-muted small">3 days ago</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4">
                <div class="card card-custom">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Competitive Analysis</h5>
                        <small class="text-muted">Market positioning</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="small">BMW X5 vs Market</span>
                            <span class="small fw-medium text-success">Below avg (-$2,500)</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="small">Mercedes C-Class vs Market</span>
                            <span class="small fw-medium text-primary">At market level</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <span class="small">Tesla Model S vs Market</span>
                            <span class="small fw-medium text-warning">Above avg (+$3,200)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
