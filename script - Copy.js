function goToPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'flex';
}

// Add some randomness to the animations
function randomizeAnimations() {
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(element => {
        const delay = Math.random() * 2;
        element.style.animationDelay = `${delay}s`;
    });
}

// Call this function when the page loads
window.onload = randomizeAnimations;