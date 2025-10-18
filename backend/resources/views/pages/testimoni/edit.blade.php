@extends('layouts.app')
@section('title', 'Edit Testimoni')
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
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-lg-12 mb-4">
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header bg-white border-bottom py-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-couch text-primary fs-4 me-2"></i>
                            <div>
                                <h5 class="mb-0 fw-bold">Edit Testimoni</h5>
                                <small class="text-muted">Update exesting Testimoni gallery for customer</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-body px-4 py-4">
                        <form action="{{ route('testimoni.update', $testimoni->id) }}" method="post"
                            enctype="multipart/form-data">
                            @method('PUT')
                            @csrf
                            <div class="mb-4">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name="name" id="name" class="form-control"
                                    value="{{ old('name', $testimoni->name) }}">
                            </div>
                            <div class="mb-4">
                                <label for="deskripsi" class="form-label">
                                    <textarea name="deskripsi" id="deskripsi" cols="30" class="form-control">{{ old('deskripsi', $testimoni->deskripsi) }}</textarea>
                                </label>
                            </div>
                            <div class="mb-4">
                                <label for="image" class="form-control">Image</label>
                                <input type="file" name="image" id="image" class="filepond" accept="image/*">
                            </div>

                            <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 shadow-sm">
                                <i class="fas fa-plus me-2"></i> Add Testimoni
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script>
        FilePond.registerPlugin(
            FilePondPluginImagePreview,
            FilePondPluginFileValidateType
        );

        // URL gambar lama dari server
        const existingImage = @json($testimoni->image ? asset('storage/' . $testimoni->image) : null);

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
    </script>
@endpush
