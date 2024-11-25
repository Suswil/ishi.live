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
                tooltip.style.position = 'fixed';
                tooltip.style.padding = '8px 16px';
                tooltip.style.background = 'rgba(124, 92, 255, 0.9)';
                tooltip.style.color = 'white';
                tooltip.style.borderRadius = '4px';
                tooltip.style.fontSize = '14px';
                tooltip.style.zIndex = '1000';
                tooltip.style.transition = 'opacity 0.3s';
                
                // Position tooltip near the cursor
                const rect = address.getBoundingClientRect();
                tooltip.style.top = rect.bottom + 'px';
                tooltip.style.left = rect.left + 'px';
                
                document.body.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(tooltip);
                    }, 300);
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
});

// Image Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // First, add the modal HTML to the page
    const modalHTML = `
        <div id="imageModal" class="modal">
            <span class="close-modal">&times;</span>
            <img id="modalImage" class="modal-content">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Add the modal styles
    const modalStyles = `
        .modal {
            display: none;
            position: fixed;
            z-index: 9999;
            padding-top: 50px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(5px);
        }
        .modal-content {
            margin: auto;
            display: block;
            max-width: 90%;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(124, 92, 255, 0.3);
        }
        .close-modal {
            position: absolute;
            right: 35px;
            top: 15px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }
        .close-modal:hover {
            color: var(--primary-color);
        }
        .grid-image {
            cursor: pointer;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Set up modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    const gridImages = document.querySelectorAll('.grid-image');

    gridImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
