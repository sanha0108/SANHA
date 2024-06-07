document.addEventListener('mousemove', function(e) {
    var circle = document.getElementById('circle');
    // 스크롤 위치를 고려하여 원의 위치를 업데이트
    var x = e.clientX + window.pageXOffset;
    var y = e.clientY + window.pageYOffset;
    circle.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.PJnav_link');
    const currentUrl = window.location.href.split('/').pop();

    navLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (currentUrl === linkUrl) {
            link.classList.add('active');
        }
    });
});