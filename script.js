// إنشاء نجوم متلألئة
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// إنشاء ثلج متساقط
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.fontSize = (Math.random() * 0.5 + 0.5) + 'em';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snowflake);
    }
}

// إنشاء قلوب متحركة
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        heartsContainer.appendChild(heart);
    }
}

// إنشاء جزيئات متلألئة حول الصورة
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const sparkleCount = 15;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.setProperty('--tx', randomX + 'px');
        sparkle.style.setProperty('--ty', randomY + 'px');
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        
        sparklesContainer.appendChild(sparkle);
    }
}

// تأثير 3D على الصورة عند حركة الماوس
const imageFrame = document.querySelector('.image-frame');
const animeImage = document.querySelector('.anime-image');

imageFrame.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    animeImage.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(1.05)
    `;
});

imageFrame.addEventListener('mouseleave', function() {
    animeImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
});

// تأثير الكتابة التدريجية
function typeWriter(element, text, speed = 50) {
    let i = 0;
    const originalText = text;
    element.textContent = '';
    
    function type() {
        if (i < originalText.length) {
            element.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// مراقبة ظهور العناصر
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
        }
    });
}, observerOptions);

// مراقبة جميع العناصر المتحركة
document.querySelectorAll('.gift-box, .footer-section').forEach(element => {
    observer.observe(element);
});

// إنشاء جزيئات قلوب عند النقر
document.addEventListener('click', function(e) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        createClickParticle(e.clientX, e.clientY, i);
    }
});

function createClickParticle(x, y, index) {
    const particle = document.createElement('div');
    const icons = ['❤️', '💕', '💖', '💗', '💝'];
    particle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = (Math.random() * 10 + 15) + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.transition = 'all 1.5s cubic-bezier(0.17, 0.67, 0.3, 1.33)';
    
    document.body.appendChild(particle);
    
    const angle = (Math.PI * 2 * index) / 8;
    const distance = 100 + Math.random() * 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 50;
    
    setTimeout(() => {
        particle.style.transform = `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`;
        particle.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        particle.remove();
    }, 1500);
}

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// تأثير الموسيقى (اختياري)
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;

musicToggle.addEventListener('click', function() {
    musicPlaying = !musicPlaying;
    
    if (musicPlaying) {
        this.style.animation = 'spin 2s linear infinite';
        this.innerHTML = '🎵';
    } else {
        this.style.animation = 'none';
        this.innerHTML = '🎵';
    }
});

// أنيميشن دوران
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// تأثير المؤشر المخصص
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.width = '5px';
    trail.style.height = '5px';
    trail.style.background = 'rgba(220, 38, 38, 0.5)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    trail.style.transition = 'all 0.5s ease';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(2)';
    }, 10);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// تأثير التحميل
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// رسالة في الكونسول
console.log('%c❤️ صُنع بكل حب لأجمل شخص في العالم ❤️', 
    'font-size: 24px; color: #dc2626; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);

console.log('%c💕 أحبك في كل لحظة من لحظات حياتي 💕', 
    'font-size: 16px; color: #991b1b; font-style: italic;'
);

// تهيئة كل التأثيرات
function init() {
    createStars();
    createSnowflakes();
    createHearts();
    createSparkles();
}

// تشغيل عند تحميل الصفحة
init();