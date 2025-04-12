document.addEventListener('DOMContentLoaded', function() {
    // Welcome message handling
    const welcomeMessage = document.getElementById('welcome-message');
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 5000);

    // Profile photo zoom functionality
    const profilePhoto = document.getElementById('profilePhoto');
    let isZoomed = false;

    profilePhoto.addEventListener('click', function() {
        if (!isZoomed) {
            this.classList.add('zoomed');
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            document.body.appendChild(overlay);
            overlay.style.display = 'block';
            isZoomed = true;
            
            overlay.addEventListener('click', function() {
                profilePhoto.classList.remove('zoomed');
                overlay.style.display = 'none';
                isZoomed = false;
            });
        }
    });

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});