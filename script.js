// Add event listener to footer links
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        // Add your custom link behavior here
    });
});