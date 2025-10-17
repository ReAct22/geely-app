@extends('layouts.app')
@section('title', 'Edit Exterior')
@section('content')
    {{-- Toast Error Handling --}}
    @if ($errors->any())
        <div aria-live="polite" aria-atomic="true" class="position-relative">
            <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 2000">
                @foreach ($errors->all() as $error)
                    <div class="toast align-items-center border-0 shadow-lg mb-2 text-white bg-danger" role="alert"
                        aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body">
                                <i class="fas fa-exclamation-circle me-2"></i> {{ $error }}
                            </div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                aria-label="Close"></button>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endif
    <div class="row">
        <!-- Add Exterior Form -->
        <div class="col-lg-12 mb-4">
            <div class="card card-custom">
                <div class="card-header">
                    <h5 class="card-title mb-0">
                        <i class="fas fa-cube text-primary me-2"></i>
                        Add Exterior Option
                    </h5>
                    <small class="text-muted">Create new exterior package</small>
                </div>
                <div class="card-body">
                    <form action="{{route('exterior.update', $exterior->id)}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="mb-3">
                            <label for="id_mobil" class="form-label">Cars</label>
                            <select class="form-select" id="id_mobil" name="id_mobil" required>
                                <option value="">Select category</option>
                                @foreach ($cars as $item)
                                    <option value="{{ $item->id }}"
                                        {{ $item->id == $exterior->id_mobil ? 'selected' : '' }}>{{ $item->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exteriorName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exteriorName" name="name"
                                placeholder="Silahkan Masukan Nama" value="{{ old('name', $exterior->name) }}">
                        </div>



                        <div class="mb-3">
                            <label for="description" class="form-label">description</label>
                            <textarea class="form-control" id="description" name="deskripsi" rows="3"
                                placeholder="List all features included in this package">{{ old('deskripsi', $exterior->deskripsi) }}</textarea>
                        </div>

                        <div class="mb-3">
                            <label for="image" class="form-label">image</label>
                            <input type="file" name="image" id="image" class="filepond" accept="image/*">
                        </div>

                        <button type="submit" class="btn btn-primary-custom w-100">
                            <i class="fas fa-plus me-2"></i>
                            Add Exterior Package
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script>
        // Daftarkan plugin FilePond
        FilePond.registerPlugin(
            FilePondPluginImagePreview,
            FilePondPluginFileValidateType
        );

        // URL gambar lama dari server
        const existingImage = @json($exterior->image ? asset('storage/' . $exterior->image) : null);

        // Inisialisasi FilePond
        const pond = FilePond.create(document.querySelector('.filepond'), {
            allowMultiple: false,
            acceptedFileTypes: ['image/*'],
            labelIdle: 'Drag & Drop your image or <span class="filepond--label-action">Browse</span>',
            imagePreviewHeight: 100,
            storeAsFile: true
        });

        // Jika ada gambar lama, tampilkan di FilePond
        if (existingImage) {
            pond.addFile(existingImage).then(file => {
                console.log('Gambar lama dimuat:', file.filename);
            });
        }

        // Toast otomatis muncul
        document.addEventListener("DOMContentLoaded", () => {
            const toastElList = document.querySelectorAll('.toast');
            toastElList.forEach(toastEl => new bootstrap.Toast(toastEl, {
                delay: 4000
            }).show());
        });
    </script>
@endpush
