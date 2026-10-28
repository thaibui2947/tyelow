// ==================== IMAGE LIGHTBOX ====================
const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImage');
const closeLightbox = document.querySelector('.lightbox-close');

if (lightbox && lightboxImg) {
    // 1. Tìm tất cả ảnh trên trang (trừ logo) và gán sự kiện click mở Lightbox
    const pageImages = document.querySelectorAll('img:not(.custom-logo-img):not(.header-logo img)');

    pageImages.forEach(img => {
        img.classList.add('zoomable-img');
        
        img.addEventListener('click', function() {
            lightbox.classList.add('show');
            lightboxImg.src = this.src;
        });
    });

    // 2. Đóng Popup khi BẤM TRỰC TIẾP VÀO HÌNH PHÓNG TO
    lightboxImg.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });

    // 3. Đóng Popup khi bấm ra nền tối ngoài hoặc nút X
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
        }
    });

    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('show');
        });
    }

    // 4. Đóng Popup khi VUỐT TRÊN ĐIỆN THOẠI (Swipe Gesture)
    let touchStartY = 0;
    let touchStartX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        let touchEndY = e.changedTouches[0].clientY;
        let touchEndX = e.changedTouches[0].clientX;

        let diffY = Math.abs(touchEndY - touchStartY);
        let diffX = Math.abs(touchEndX - touchStartX);

        // Nếu người dùng vuốt tay quá 40px theo bất kỳ hướng nào -> Tắt Lightbox
        if (diffY > 40 || diffX > 40) {
            lightbox.classList.remove('show');
        }
    }, { passive: true });
}