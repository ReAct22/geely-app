// Admin Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }

    // Active navigation highlighting
    setActiveNavigation();

    // Search functionality
    setupSearch();

    // Form handlers
    setupFormHandlers();

    // Table interactions
    setupTableActions();
});

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function setupSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.card').querySelector('table tbody');
            
            if (table) {
                const rows = table.querySelectorAll('tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(searchTerm) ? '' : 'none';
                });
            }
        });
    });
}

function setupFormHandlers() {
    // Car form handler
    const carForm = document.getElementById('carForm');
    if (carForm) {
        carForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleCarSubmit();
        });
    }

    // Color form handler
    const colorForm = document.getElementById('colorForm');
    if (colorForm) {
        colorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleColorSubmit();
        });
    }

    // Interior form handler
    const interiorForm = document.getElementById('interiorForm');
    if (interiorForm) {
        interiorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleInteriorSubmit();
        });
    }

    // Exterior form handler
    const exteriorForm = document.getElementById('exteriorForm');
    if (exteriorForm) {
        exteriorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleExteriorSubmit();
        });
    }

    // Pricing form handler
    const pricingForm = document.getElementById('pricingForm');
    if (pricingForm) {
        pricingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handlePricingSubmit();
        });
    }
}

function setupTableActions() {
    // Edit buttons
    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const id = row.dataset.id;
            editItem(id, this.dataset.type);
        });
    });

    // Delete buttons
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const id = row.dataset.id;
            deleteItem(id, this.dataset.type);
        });
    });
}

// Form submission handlers
function handleCarSubmit() {
    const formData = new FormData(document.getElementById('carForm'));
    const carData = Object.fromEntries(formData);
    
    // Add to table
    addCarToTable(carData);
    
    // Clear form
    document.getElementById('carForm').reset();
    
    showToast('Car added successfully!', 'success');
}

function handleColorSubmit() {
    const formData = new FormData(document.getElementById('colorForm'));
    const colorData = Object.fromEntries(formData);
    
    // Add to table
    addColorToTable(colorData);
    
    // Clear form
    document.getElementById('colorForm').reset();
    
    showToast('Color added successfully!', 'success');
}

function handleInteriorSubmit() {
    const formData = new FormData(document.getElementById('interiorForm'));
    const interiorData = Object.fromEntries(formData);
    
    // Add to table
    addInteriorToTable(interiorData);
    
    // Clear form
    document.getElementById('interiorForm').reset();
    
    showToast('Interior option added successfully!', 'success');
}

function handleExteriorSubmit() {
    const formData = new FormData(document.getElementById('exteriorForm'));
    const exteriorData = Object.fromEntries(formData);
    
    // Add to table
    addExteriorToTable(exteriorData);
    
    // Clear form
    document.getElementById('exteriorForm').reset();
    
    showToast('Exterior package added successfully!', 'success');
}

function handlePricingSubmit() {
    const formData = new FormData(document.getElementById('pricingForm'));
    const pricingData = Object.fromEntries(formData);
    
    // Add to table
    addPricingToTable(pricingData);
    
    // Clear form
    document.getElementById('pricingForm').reset();
    
    showToast('Pricing updated successfully!', 'success');
}

// Table manipulation functions
function addCarToTable(carData) {
    const tableBody = document.querySelector('#carsTable tbody');
    if (!tableBody) return;
    
    const newId = tableBody.children.length + 1;
    const row = createCarRow(newId, carData);
    tableBody.appendChild(row);
}

function addColorToTable(colorData) {
    const tableBody = document.querySelector('#colorsTable tbody');
    if (!tableBody) return;
    
    const newId = tableBody.children.length + 1;
    const row = createColorRow(newId, colorData);
    tableBody.appendChild(row);
}

function addInteriorToTable(interiorData) {
    const tableBody = document.querySelector('#interiorTable tbody');
    if (!tableBody) return;
    
    const newId = tableBody.children.length + 1;
    const row = createInteriorRow(newId, interiorData);
    tableBody.appendChild(row);
}

function addExteriorToTable(exteriorData) {
    const tableBody = document.querySelector('#exteriorTable tbody');
    if (!tableBody) return;
    
    const newId = tableBody.children.length + 1;
    const row = createExteriorRow(newId, exteriorData);
    tableBody.appendChild(row);
}

function addPricingToTable(pricingData) {
    const tableBody = document.querySelector('#pricingTable tbody');
    if (!tableBody) return;
    
    const newId = tableBody.children.length + 1;
    const row = createPricingRow(newId, pricingData);
    tableBody.appendChild(row);
}

// Row creation functions
function createCarRow(id, data) {
    const row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
        <td>${id}</td>
        <td>${data.brand || ''}</td>
        <td>${data.model || ''}</td>
        <td>${data.year || ''}</td>
        <td>${data.price || ''}</td>
        <td><span class="badge bg-success">Available</span></td>
        <td>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="car">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete" data-type="car">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    return row;
}

function createColorRow(id, data) {
    const row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
        <td>${id}</td>
        <td><div class="color-preview" style="background-color: ${data.colorCode || '#000000'}"></div></td>
        <td>${data.colorName || ''}</td>
        <td>${data.colorCode || ''}</td>
        <td><span class="badge bg-primary">${data.category || 'Standard'}</span></td>
        <td>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="color">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete" data-type="color">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    return row;
}

function createInteriorRow(id, data) {
    const row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
        <td>${id}</td>
        <td>${data.interiorName || ''}</td>
        <td>${data.material || ''}</td>
        <td>${data.interiorColor || ''}</td>
        <td class="text-primary fw-bold">${data.interiorPrice || '$0'}</td>
        <td>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="interior">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete" data-type="interior">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    return row;
}

function createExteriorRow(id, data) {
    const row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
        <td>${id}</td>
        <td>${data.exteriorName || ''}</td>
        <td><span class="badge bg-info">${data.category || 'Styling'}</span></td>
        <td class="text-primary fw-bold">${data.exteriorPrice || '$0'}</td>
        <td>${data.features || ''}</td>
        <td>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="exterior">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete" data-type="exterior">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    return row;
}

function createPricingRow(id, data) {
    const row = document.createElement('tr');
    row.dataset.id = id;
    row.innerHTML = `
        <td>${id}</td>
        <td>${data.carModel || ''}</td>
        <td>${data.basePrice || ''}</td>
        <td>${data.msrp || ''}</td>
        <td><span class="badge bg-warning">${data.discount || '0%'}</span></td>
        <td><span class="badge bg-success">Active</span></td>
        <td>
            <button class="btn btn-sm btn-outline-primary btn-edit me-1" data-type="pricing">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger btn-delete" data-type="pricing">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    return row;
}

// Action handlers
function editItem(id, type) {
    showToast(`Edit ${type} with ID: ${id}`, 'info');
}

function deleteItem(id, type) {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        if (row) {
            row.remove();
            showToast(`${type} deleted successfully!`, 'success');
        }
    }
}

// Toast notification system
function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }

    // Create toast element
    const toastId = 'toast-' + Date.now();
    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast align-items-center text-bg-${type} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;

    toastContainer.appendChild(toast);

    // Initialize and show toast
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();

    // Remove toast element after it's hidden
    toast.addEventListener('hidden.bs.toast', function() {
        toast.remove();
    });
}