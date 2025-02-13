// Navbar transparency effect on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = '#141414';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, transparent)';
    }
});

// Function to handle horizontal scrolling for movie rows
const handleRowScroll = () => {
    const rows = document.querySelectorAll('.row-posters');
    
    rows.forEach(row => {
        let isDown = false;
        let startX;
        let scrollLeft;

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            row.style.cursor = 'grabbing';
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
            row.style.cursor = 'grab';
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
            row.style.cursor = 'grab';
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 2;
            row.scrollLeft = scrollLeft - walk;
        });
    });
};

// Initialize horizontal scrolling
handleRowScroll();

// Add hover effect for movie posters
const posters = document.querySelectorAll('.poster-wrapper');

posters.forEach(poster => {
    poster.addEventListener('mouseenter', () => {
        // Add a slight delay to the scale effect
        setTimeout(() => {
            poster.style.transform = 'scale(1.08)';
            poster.style.zIndex = '2';
        }, 150);
    });

    poster.addEventListener('mouseleave', () => {
        poster.style.transform = 'scale(1)';
        poster.style.zIndex = '1';
    });
});

// Simulate loading state for images
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// Add click handlers for banner buttons
const playButton = document.querySelector('.banner-button');
if (playButton) {
    playButton.addEventListener('click', () => {
        alert('Playing Money Heist...');
    });
}

// Handle navigation menu clicks
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
    });
});
