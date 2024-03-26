// 로고
document.addEventListener("logo", function() {
    
    var logoElement = document.querySelector('.logo img');

    function animateLogo() {
        
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(timer); 
                var timer2 = setInterval(function() {
                    opacity += 0.1;
                    logoElement.style.opacity = opacity;
                    if (opacity >= 1) clearInterval(timer2); 
                }, 200); 
            } else {
                opacity -= 0.1;
                logoElement.style.opacity = opacity;
            }
        }, 200);
    }

    
    animateLogo();

    
    setInterval(animateLogo, 5000); 
});


/* 오른쪽 사람 */
document.addEventListener("DOMContentLoaded", function(event) {
   
    var sec01_bottom03 = document.querySelector('.sec01_bottom03');

    
    function startAnimation() {
       
        sec01_bottom03.style.transition = "transform 2s ease-in-out"; // 변경된 부분: 속도 조절
        sec01_bottom03.style.transform = "translateX(100px)"; // 시작 위치

       
        sec01_bottom03.addEventListener("telescope", function(event) {
           
            sec01_bottom03.removeEventListener("telescope", arguments.callee);
            
           
            sec01_bottom03.style.transform = "translateX(0)";
        });
    }

   
    startAnimation();

    
    setInterval(function() {
       
        startAnimation();
    }, 3000);
});


/* 로켓 */
document.addEventListener("DOMContentLoaded", function(event) { 

    var rocket = document.querySelector('.e01_rocket');
    var rocketImg = document.getElementById('rocket_img');
    
    rocket.addEventListener('transitionend', function() {
        
        rocket.classList.toggle('hover');
    });
    
   
    function moveRocket() {
        
        rocket.classList.toggle('hover');
    }

   
    setTimeout(moveRocket, 1000); 
});


/* 우주항공청은 어떤 곳인가요? */
window.addEventListener('scroll', function() {
    
    var triggerOffset = window.innerHeight * 0.7; 
    
    var sec03Title = document.querySelector('.sec03_title');
    var sec03TitleOffset = sec03Title.getBoundingClientRect().top;
    
    
    if (sec03TitleOffset < triggerOffset) {
        sec03Title.classList.add('animated');
    }
});

/* 우주항공청 왜 경상남도일까요? */
window.addEventListener('scroll', function() {
    
    var triggerOffset = window.innerHeight * 0.7; 
    
    var sec03Title = document.querySelector('.sec03_con02');
    var sec03TitleOffset = sec03Title.getBoundingClientRect().top;
    
    
    if (sec03TitleOffset < triggerOffset) {
        sec03Title.classList.add('animated');
    }
});


