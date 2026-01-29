const toggleSwitch = document.querySelector('#checkbox');
const iconSpan = document.querySelector('.icon');

const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
    toggleSwitch.checked = true;
    iconSpan.textContent = '☀️';
} else {
    iconSpan.textContent = '🌙';
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        iconSpan.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        iconSpan.textContent = '🌙';
    }
});

function createStaticStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'static-star-black';
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1;
        star.style.left = Math.floor(x) + "px";
        star.style.top = Math.floor(y) + "px";
        star.style.width = size + "px";
        star.style.height = size + "px";
        document.body.appendChild(star);
    }
}

createStaticStars(120);

function createShootingStar() {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    const darkColors = ['#ffffff', '#10b981', '#34d399', '#60a5fa', '#ff4d4d', '#fbbf24', '#f59e0b', '#fb923c'];
    const lightColors = ['#059669', '#2563eb', '#7c3aed', '#db2777', '#dc2626', '#b45309'];
    
    const colors = isLightMode ? lightColors : darkColors;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    star.style.setProperty('--star-color', randomColor);

    const startX = Math.random() * (window.innerWidth + 400); 
    const startY = Math.random() * (window.innerHeight / 2.5);
    const duration = Math.random() * 3.0 + 2.0; 
    
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(createShootingStar, 2500);