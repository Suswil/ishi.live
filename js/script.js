// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '20px 0';
    }
});

// Copy contract address functionality
document.addEventListener('DOMContentLoaded', function() {
    const contractAddresses = document.querySelectorAll('.contract-address');
    
    contractAddresses.forEach(address => {
        address.addEventListener('click', async function() {
            const text = address.textContent.replace('CA: ', '').trim();
            try {
                await navigator.clipboard.writeText(text);
                
                // Create and show tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'var(--primary-color)';
                tooltip.style.color = 'var(--background-color)';
                tooltip.style.padding = '5px 10px';
                tooltip.style.borderRadius = '5px';
                tooltip.style.fontSize = '12px';
                tooltip.style.zIndex = '1000';
                
                // Position tooltip
                const rect = address.getBoundingClientRect();
                tooltip.style.top = `${rect.top - 30}px`;
                tooltip.style.left = `${rect.left + (rect.width / 2) - 30}px`;
                
                document.body.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
        
        // Add cursor pointer and hover effect
        address.style.cursor = 'pointer';
        address.title = 'Click to copy address';
    });
});

// Dynamic meme loading (placeholder)
const memeGrid = document.querySelector('.meme-grid');
const memeImages = [
    // Add your meme image URLs here
    // Example: 'images/meme1.jpg',
];

// Load memes if available
if (memeGrid && memeImages.length > 0) {
    memeImages.forEach(imageUrl => {
        const memeItem = document.createElement('div');
        memeItem.className = 'meme-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'ISHI Meme';
        
        memeItem.appendChild(img);
        memeGrid.appendChild(memeItem);
    });
}
