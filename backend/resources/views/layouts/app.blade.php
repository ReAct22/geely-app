<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - @yield('title')</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="{{ asset('assets/css/admin.css') }}" rel="stylesheet">
    {{-- FilePond CSS --}}
    <link href="https://unpkg.com/filepond@^4/dist/filepond.css" rel="stylesheet" />
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
        rel="stylesheet" />

</head>

<body>
    <div class="d-flex">
        <!-- Sidebar -->
        @include('includes.sidebar')

        <!-- Main Content -->
        <main class="col-md-9 col-lg-10 px-0">
            <!-- Navbar -->
            @include('includes.navbar')

            <!-- Page Content -->
            <div class="container-fluid p-4">
                @yield('content')
            </div>

            <!-- Footer -->
            @include('includes.footer')
        </main>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/color-name-list@13.1.0/dist/colornames.umd.min.js"></script>
    <!-- Custom JS -->
    <script src="{{ asset('assets/js/admin.js') }}"></script>
    @include('includes.script')
    @stack('script')
</body>

</html>
