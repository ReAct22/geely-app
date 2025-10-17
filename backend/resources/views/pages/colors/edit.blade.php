@extends('layouts.app')
@section('title', 'Update Color')

@section('content')
<div class="row justify-content-center">

    {{-- Error Toasts --}}
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
                            <button type="button" class="btn-close btn-close-white me-2 m-auto"
                                data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endif

    <!-- Update Color Form -->
    <div class="col-lg-8 mb-4">
        <div class="card card-custom">
            <div class="card-header">
                <h5 class="card-title mb-0">
                    <i class="fas fa-palette text-primary me-2"></i>
                    Update Color
                </h5>
                <small class="text-muted">Modify existing color details</small>
            </div>

            <div class="card-body">
                <form method="POST" enctype="multipart/form-data" action="{{ route('color.update', $color->id) }}">
                    @csrf
                    @method('PUT')

                    <div class="mb-3">
                        <label for="id_mobil" class="form-label">Car</label>
                        <select name="id_mobil" class="form-select" id="id_mobil">
                            <option value="" disabled>Silahkan Pilih mobil</option>
                            @foreach ($cars as $item)
                                <option value="{{ $item->id }}" {{ $item->id == $color->id_mobil ? 'selected' : '' }}>
                                    {{ $item->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="colorName" class="form-label">Color Name</label>
                        <input type="text" class="form-control" id="colorName" name="name"
                            placeholder="e.g., Midnight Black" value="{{ old('name', $color->name) }}">
                    </div>

                    <div class="mb-3">
                        <label for="colorCode" class="form-label">Color Code</label>
                        <div class="d-flex gap-2">
                            <input type="color" class="form-control form-control-color" id="colorPicker"
                                name="colorPicker" value="{{ old('hex', $color->hex) }}" style="width: 60px;">
                            <input type="text" class="form-control" id="colorCode" name="hex"
                                placeholder="#000000" value="{{ old('hex', $color->hex) }}">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="image" class="form-label">Image</label>
                        <input type="file" class="form-control" name="image" id="image">
                        @if ($color->image)
                            <img src="{{ asset('storage/' . $color->image) }}" id="preview"
                                style="max-width: 300px; margin-top: 10px;" alt="Current Image">
                        @else
                            <img src="" id="preview"
                                style="max-width: 300px; margin-top: 10px; display: none;" alt="">
                        @endif
                    </div>

                    <button type="submit" class="btn btn-primary-custom w-100">
                        <i class="fas fa-save me-2"></i> Update Color
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('script')
<script>
    // Color preview sync
    const colorPicker = document.getElementById('colorPicker');
    const colorCode = document.getElementById('colorCode');

    colorPicker.addEventListener('input', (e) => {
        colorCode.value = e.target.value;
    });

    colorCode.addEventListener('input', (e) => {
        if (e.target.value.startsWith('#') && e.target.value.length === 7) {
            colorPicker.value = e.target.value;
        }
    });

    // Image preview
    const ImageFile = document.getElementById('image');
    const preview = document.getElementById('preview');

    ImageFile.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            preview.src = imageURL;
            preview.style.display = "block";
        }
    });

    // Toast Action
    document.addEventListener("DOMContentLoaded", () => {
        const toastElList = document.querySelectorAll('.toast');
        toastElList.forEach(toastEl =>
            new bootstrap.Toast(toastEl, { delay: 4000 }).show()
        );
    });
</script>
@endpush
