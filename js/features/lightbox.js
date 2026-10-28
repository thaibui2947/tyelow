// ==================== IMAGE LIGHTBOX LOGIC ====================
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImage');
const closeLightbox = document.querySelector('.lightbox-close');

// Tìm tất cả ảnh trên trang, ngoại trừ ảnh logo trên thanh header hoặc footer
const pageImages = document.querySelectorAll('img:not(.custom-logo-img):not(.header-logo img)');

pageImages.forEach(img => {
    // Tự động thêm class hiển thị con trỏ kính lúp
    img.classList.add('zoomable-img');
    
    // Khi click vào ảnh hướng dẫn
    img.addEventListener('click', function() {
        lightbox.classList.add('show');
        lightboxImg.src = this.src;
    });
});

// Tắt popup khi bấm nút X
if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });
}

// Tắt popup khi bấm vào khoảng trống nền mờ bên ngoài ảnh
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });
}