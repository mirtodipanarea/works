/* 찾아가는 공룡 엑스포 */
window.addEventListener('scroll', function() {
    var section02 = document.querySelector('.section02');
    var titleImg = document.querySelector('.title img');
    
    
    if (window.scrollY >= section02.offsetTop) {
        titleImg.style.opacity = '1';
    } else {
        titleImg.style.opacity = '0';
    }
});

// 스크롤을 따라가는 악어
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var dinoElement = document.querySelector('.dino_ani_01');
        var scrollPosition = window.scrollY;

        
        var newPosition = -200 + (scrollPosition / 5); 
        dinoElement.style.top = newPosition + 'px';
    });
});


