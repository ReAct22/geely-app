@extends('layouts.app')
@section('title', 'Dashboard')
@section('content')
    <div class="fade-in">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h1 class="h3 fw-bold text-dark">Dashboard</h1>
                <p class="text-muted">Welcome to your admin dashboard</p>
            </div>
        </div>

        <!-- Stats Cards -->
        <div class="row mb-4">
            <div class="col-md-3 mb-3">
                <div class="card card-custom stat-card">
                    <div class="card-body text-center">
                        <i class="fas fa-car fa-2x mb-2"></i>
                        <div class="stat-number">1,234</div>
                        <div class="stat-label">Total Cars</div>
                        <small class="text-light">+12% from last month</small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom" style="background: linear-gradient(135deg, #28a745, #20c997);">
                    <div class="card-body text-center text-white">
                        <i class="fas fa-users fa-2x mb-2"></i>
                        <div class="stat-number">8,456</div>
                        <div class="stat-label">Active Users</div>
                        <small>+23% from last month</small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom" style="background: linear-gradient(135deg, #ffc107, #fd7e14);">
                    <div class="card-body text-center text-white">
                        <i class="fas fa-dollar-sign fa-2x mb-2"></i>
                        <div class="stat-number">$45,678</div>
                        <div class="stat-label">Revenue</div>
                        <small>+8% from last month</small>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-3">
                <div class="card card-custom" style="background: linear-gradient(135deg, #6f42c1, #e83e8c);">
                    <div class="card-body text-center text-white">
                        <i class="fas fa-chart-line fa-2x mb-2"></i>
                        <div class="stat-number">15.3%</div>
                        <div class="stat-label">Growth</div>
                        <small>+5% from last month</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Cards -->
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card card-custom">
                    <div class="card-header d-flex align-items-center">
                        <i class="fas fa-chart-bar text-primary me-2"></i>
                        <h5 class="card-title mb-0">Recent Activity</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="d-flex align-items-center">
                                <div class="activity-dot primary"></div>
                                <div class="flex-grow-1">
                                    <div class="fw-medium">New car added: BMW X5</div>
                                    <small class="text-muted">2 minutes ago</small>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="d-flex align-items-center">
                                <div class="activity-dot success"></div>
                                <div class="flex-grow-1">
                                    <div class="fw-medium">User registration completed</div>
                                    <small class="text-muted">5 minutes ago</small>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="d-flex align-items-center">
                                <div class="activity-dot warning"></div>
                                <div class="flex-grow-1">
                                    <div class="fw-medium">Price updated for Tesla Model S</div>
                                    <small class="text-muted">15 minutes ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4">
                <div class="card card-custom">
                    <div class="card-header">
                        <h5 class="card-title mb-0">System Status</h5>
                        <small class="text-muted">Current system health</small>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span>Database</span>
                            <div class="d-flex align-items-center">
                                <div class="activity-dot success me-2"></div>
                                <span class="text-success small">Online</span>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span>API Services</span>
                            <div class="d-flex align-items-center">
                                <div class="activity-dot success me-2"></div>
                                <span class="text-success small">Running</span>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <span>Storage</span>
                            <div class="d-flex align-items-center">
                                <div class="activity-dot warning me-2"></div>
                                <span class="text-warning small">75% Used</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
