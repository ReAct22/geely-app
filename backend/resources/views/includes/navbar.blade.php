<nav class="navbar navbar-expand-lg navbar-custom px-4">
    <button class="navbar-toggler d-md-none" type="button" id="sidebarToggle">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-brand fw-bold text-primary d-none d-md-block">
        Admin Dashboard
    </div>

    <div class="navbar-nav ms-auto d-flex flex-row align-items-center">
        <div class="search-box me-3">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="form-control" placeholder="Search...">
        </div>

        <div class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-bell"></i>
                <span class="badge bg-danger badge-sm">3</span>
            </a>
        </div>

        <div class="nav-item dropdown ms-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-user-circle"></i>
                Admin
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li>
                    <form action="{{route('logout')}}" method="post">
                        @csrf
                        <button class="dropdown-item" href="#"><i class="fas fa-sign-out-alt me-2"></i>Logout</button>
                    </form>
                </li>
            </ul>
        </div>
    </div>
</nav>
