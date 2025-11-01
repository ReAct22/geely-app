<nav id="sidebar" class="sidebar col-md-3 col-lg-2 px-0">
    <div class="sidebar-brand d-flex align-items-center">
        <i class="fas fa-car me-2"></i>
        Car Admin
    </div>

    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active" href="{{ route('home') }}">
                <i class="fas fa-chart-bar me-2"></i>
                Dashboard
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('cars.index') }}">
                <i class="fas fa-car me-2"></i>
                Cars
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('color.index') }}">
                <i class="fas fa-palette me-2"></i>
                Colors
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('interior.index') }}">
                <i class="fas fa-couch me-2"></i>
                Interior
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('exterior.index') }}">
                <i class="fas fa-cube me-2"></i>
                Exterior
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('price.index') }}">
                <i class="fas fa-dollar-sign me-2"></i>
                Pricing
            </a>
        </li>
        <li class="nav-item">
            <a href="{{route('testimoni.index')}}" class="nav-link">
                <i class="fa-solid fa-thumbs-up"></i>
                Testimoni
            </a>
        </li>
        <li class="nav-item">
            <a href="{{route('testdrive.index')}}" class="nav-link">
               <i class="fa-solid fa-road"></i>
                Test Drive
            </a>
        </li>
    </ul>

    <div class="mt-auto p-3 border-top">
        <div class="d-flex align-items-center text-light small">
            <div class="activity-dot success me-2"></div>
            System Online
        </div>
    </div>
</nav>
