@extends('layouts.app')
@section('title', 'Add New Interior')

@section('content')
    @if ($errors->any())
        <div aria-live="polite" aria-atomic="true" class="position-relative">
            <!-- Container Toast (fixed di kanan atas) -->
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
            <div class="col-lg-8 mb-4">
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-header bg-white border-bottom-0 py-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-couch text-primary fs-4 me-2"></i>
                            <div>
                                <h5 class="mb-0 fw-bold">Add Interior Option</h5>
                                <small class="text-muted">Create a new interior configuration for the car</small>
                            </div>
                        </div>
                    </div>

                    <div class="card-body px-4 py-4">
                        <form action="{{ route('interior.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf

                            {{-- Select Mobil --}}
                            <div class="mb-4">
                                <label for="id_mobil" class="form-label fw-semibold">Select Car</label>
                                <select name="id_mobil" id="id_mobil" class="form-select rounded-3 shadow-sm">
                                    <option value="">-- Silahkan Pilih Mobil --</option>
                                    @foreach ($cars as $item)
                                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                                    @endforeach
                                </select>
                            </div>

                            {{-- Nama Interior --}}
                            <div class="mb-4">
                                <label for="material" class="form-label fw-semibold">Interior Name</label>
                                <input type="text" name="name" id="material" class="form-control rounded-3 shadow-sm"
                                    placeholder="Silahkan masukkan nama interior...">
                            </div>

                            {{-- Deskripsi --}}
                            <div class="mb-4">
                                <label for="description" class="form-label fw-semibold">Description</label>
                                <textarea name="deskripsi" id="description" class="form-control rounded-3 shadow-sm" rows="5"
                                    placeholder="Silahkan masukkan deskripsi..."></textarea>
                            </div>

                            {{-- Gambar dengan FilePond --}}
                            <div class="mb-4">
                                <label for="image" class="form-label fw-semibold">Image</label>
                                <input type="file" name="image" id="image" class="filepond" accept="image/*">
                            </div>

                            {{-- Tombol Submit --}}
                            <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 shadow-sm">
                                <i class="fas fa-plus me-2"></i> Add Interior Option
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
        // Daftarkan plugin FilePond
        FilePond.registerPlugin(
            FilePondPluginImagePreview,
            FilePondPluginFileValidateType
        );

        // Inisialisasi FilePond di input file
        const pond = FilePond.create(document.querySelector('.filepond'), {
            allowMultiple: false,
            acceptedFileTypes: ['image/*'],
            labelIdle: 'Drag & Drop your image or <span class="filepond--label-action">Browse</span>',
            imagePreviewHeight: 100,
            stylePanelAspectRatio: 1,
            styleLoadIndicatorPosition: 'center bottom',
            styleProgressIndicatorPosition: 'right bottom',
            styleButtonRemoveItemPosition: 'right bottom',
            styleButtonProcessItemPosition: 'right bottom',
            storeAsFile: true
        });

        // Tambahkan event listener (optional)
        pond.on('addfile', (error, file) => {
            if (!error) console.log('File ditambahkan:', file.filename);
        });

        document.addEventListener("DOMContentLoaded", () => {
            const toastElList = document.querySelectorAll('.toast');
            toastElList.forEach(toastEl => new bootstrap.Toast(toastEl, {
                delay: 4000
            }).show());
        });
    </script>
@endpush
