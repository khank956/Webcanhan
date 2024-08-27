// Cuộn mượt mà cho các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng phóng to ảnh trong thư viện
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Hiệu ứng đổ bóng cho tiêu đề khi cuộn
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
// Hiệu ứng Parallax Scrolling
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    let parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(function(el) {
        let depth = el.getAttribute('data-depth');
        let movement = -(scrollPosition * depth);
        el.style.transform = `translateY(${movement}px)`;
    });
});

// Hiệu ứng Text Typing (Gõ Chữ)
document.addEventListener('DOMContentLoaded', function() {
    const typingText = "Chào Mừng Đến Với Trang Cá Nhân Của Tôi!";
    let i = 0;
    const speed = 100; // Tốc độ gõ chữ

    function typeWriter() {
        if (i < typingText.length) {
            document.getElementById('typing-effect').innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
