document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var section1 = document.getElementById('section1');
    
    function checkScroll() {
        var section1Height = section1.offsetHeight;
        var section1Top = section1.getBoundingClientRect().top + window.pageYOffset;
        var triggerPoint = section1Top + (section1Height * 3 / 4);
        
        if (window.pageYOffset >= triggerPoint) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
});

document.addEventListener('mousemove', function(e) {
    var circle = document.getElementById('circle');
    // 스크롤 위치를 고려하여 원의 위치를 업데이트
    var x = e.clientX + window.pageXOffset;
    var y = e.clientY + window.pageYOffset;
    circle.style.transform = `translate(${x}px, ${y}px)`;
});