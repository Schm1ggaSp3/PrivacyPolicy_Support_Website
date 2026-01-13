/**
 * My little CookBook - Support Website JavaScript
 * Interactive functionality and animations
 */

// ==================== Global State ====================
let currentLang = 'de';

// ==================== Language Toggle ====================
function toggleLanguage() {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    
    // Update all elements with language attributes
    document.querySelectorAll('[data-de][data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-' + currentLang);
    });

    // Update button text
    const button = document.querySelector('.language-toggle button');
    button.textContent = currentLang === 'de' ? '🌐 English' : '🌐 Deutsch';

    // Save preference
    localStorage.setItem('preferredLanguage', currentLang);
    
    // Add animation
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
}

// ==================== Accordion Functionality ====================
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all accordions
    document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
    });

    // Toggle current accordion
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
        
        // Scroll to accordion if needed
        setTimeout(() => {
            const headerTop = header.getBoundingClientRect().top + window.pageYOffset;
            const navHeight = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: headerTop - navHeight - 20,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// ==================== Smooth Scrolling ====================
function initSmoothScrolling() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - navHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== Scroll Reveal Animation ====================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ==================== Platform Cards Animation ====================
function initPlatformCards() {
    const cards = document.querySelectorAll('.platform-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('reveal');
    });
}

// ==================== Stats Counter Animation ====================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = stat.getAttribute('data-target');
        if (target && target !== '∞' && target !== '100%' && target !== 'iOS 26') {
            const finalValue = parseInt(target);
            let current = 0;
            const increment = finalValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    stat.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        }
    });
}

// ==================== Parallax Effect ====================
function initParallax() {
    const particles = document.querySelectorAll('.particle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ==================== Feature Items Hover Effect ====================
function initFeatureHoverEffects() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

// ==================== Navigation Highlight ====================
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('nav').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - navHeight - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== Stat Cards Click Effect ====================
function initStatCardsEffect() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 122, 255, 0.5)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== App Icon Interaction ====================
function initAppIconInteraction() {
    const appIcon = document.querySelector('.app-icon');
    
    if (appIcon) {
        let rotation = 0;
        
        appIcon.addEventListener('click', function() {
            rotation += 360;
            this.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            this.style.transform = `rotate(${rotation}deg) scale(1.2)`;
            
            setTimeout(() => {
                this.style.transform = `rotate(${rotation}deg) scale(1)`;
            }, 400);
        });
        
        // 3D tilt effect on mouse move
        appIcon.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        appIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    }
}

// ==================== Easter Egg - Konami Code ====================
function initEasterEgg() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Create confetti effect
    const colors = ['#007AFF', '#5AC8FA', '#34C759', '#FF9500', '#FF3B30', '#AF52DE'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            const duration = 2000 + Math.random() * 1000;
            const endY = window.innerHeight + 10;
            const rotation = Math.random() * 360;
            
            confetti.animate([
                { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${endY}px) rotate(${rotation}deg)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => confetti.remove(), duration);
        }, i * 30);
    }
    
    // Show message
    const message = document.createElement('div');
    message.textContent = '🎉 You found the secret! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #007AFF, #5AC8FA);
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 24px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: popup 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popup {
            to {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'popup 0.3s reverse';
        setTimeout(() => message.remove(), 300);
    }, 2000);
}

// ==================== Cursor Trail Effect ====================
function initCursorTrail() {
    let timeout;
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            clearTimeout(timeout);
            
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: 0.6;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                transform: translate(-50%, -50%);
                transition: opacity 0.5s;
            `;
            
            document.body.appendChild(dot);
            trail.push(dot);
            
            if (trail.length > trailLength) {
                const oldDot = trail.shift();
                oldDot.remove();
            }
            
            timeout = setTimeout(() => {
                trail.forEach(d => {
                    d.style.opacity = '0';
                    setTimeout(() => d.remove(), 500);
                });
                trail.length = 0;
            }, 150);
        }
    });
}

// ==================== Initialize Everything ====================
document.addEventListener('DOMContentLoaded', () => {
    // Load preferred language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }
    
    // Initialize all features
    initSmoothScrolling();
    initScrollReveal();
    initPlatformCards();
    initParallax();
    initFeatureHoverEffects();
    initNavHighlight();
    initStatCardsEffect();
    initAppIconInteraction();
    initEasterEgg();
    
    // Optional: Enable cursor trail (can be disabled if too distracting)
    // initCursorTrail();
    
    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    console.log('%c🍳 My little CookBook Support Website', 'color: #007AFF; font-size: 20px; font-weight: bold;');
    console.log('%cMade with ❤️ in Germany', 'color: #34C759; font-size: 14px;');
    console.log('%cTry the Konami Code: ↑↑↓↓←→←→BA', 'color: #FF9500; font-size: 12px;');
});

// ==================== Performance Monitoring ====================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
});
