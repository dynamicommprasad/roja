// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const numberOfHearts = 40;
    
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Text animation for name
function animateText() {
    const textElements = document.querySelectorAll('.text-animation');
    textElements.forEach((element, index) => {
        element.style.animation = `appear 0.5s forwards ${index * 0.2}s`;
    });
}

// Scroll animation for gallery items
function checkGalleryItems() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const windowHeight = window.innerHeight;
    
    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        
        if (rect.top < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
}

// Scroll animation for sections
function checkSections() {
    const sections = [
        document.querySelector('.meaning-content'),
        document.querySelector('.letter-content')
    ];
    
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        if (section) {
            const rect = section.getBoundingClientRect();
            
            if (rect.top < windowHeight - 100) {
                section.classList.add('visible');
            }
        }
    });
}

// Audio controls
function setupAudio() {
    const audioControls = document.getElementById('audioControls');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    audioControls.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
        } else {
            bgMusic.pause();
            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';
        }
    });
}

// Initialize when page loads
window.addEventListener('load', () => {
    createHearts();
    animateText();
    checkGalleryItems();
    checkSections();
    setupAudio();
});

// Check elements on scroll
window.addEventListener('scroll', () => {
    checkGalleryItems();
    checkSections();
});