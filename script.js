// Pickr initialization
const pickr = Pickr.create({
    el: '#color-picker-button',
    theme: 'classic', // or 'monolith', 'nano'
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Handle color save and display the preview
pickr.on('save', (color) => {
    const hexColor = color.toHEXA().toString();
    
    // Create a new div for the color preview
    const colorPreview = document.createElement('div');
    colorPreview.classList.add('color-preview');
    colorPreview.style.backgroundColor = hexColor;
    colorPreview.textContent = hexColor;

    // Append the color preview to the saved colors section
    document.getElementById('savedColors').appendChild(colorPreview);
    pickr.hide();
});

// Handle click on saved color preview to copy the color code
document.getElementById('savedColors').addEventListener('click', (event) => {
    if (event.target.classList.contains('color-preview')) {
        const colorCode = event.target.textContent;
        
        // Copy color code to clipboard
        navigator.clipboard.writeText(colorCode).then(() => {
            alert(`Color code ${colorCode} copied to clipboard!`);
        }).catch(err => {
            console.error('Failed to copy color code: ', err);
        });
    }
});
