// Get all the image containers
const imageContainers = document.querySelectorAll('.image-container');

// Add click event listeners to each image container
imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Remove the "selected" class from all image containers
        imageContainers.forEach(item => {
            item.classList.remove('selected');
        });

        // Add the "selected" class to the clicked image container
        container.classList.add('selected');
        
        // Display the clicked image in a larger view
        displayImage(container);
    });
});

// Function to display the clicked image in a larger view
function displayImage(container) {
    const selectedImage = container.querySelector('img');
    const imageSrc = selectedImage.getAttribute('src');
    
    // Update the larger view container with the selected image
    const largerView = document.querySelector('#larger-view');
    largerView.innerHTML = `<img src="${imageSrc}" alt="Selected Image">`;
}
