let currentSlide = 1;   // Slide that is currently active

// Creates the slideshow of images that runs automatically
function slideshow() {
    let slides = document.getElementsByClassName('slide-image');

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Increment the current slide and display it
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].style.display = 'block';

    // Change the slide every 8 seconds
    setTimeout(slideshow, 8000);
}

slideshow();

// Function used by forward button
function nextSlide() {
    showSlide(currentSlide += 1);
}

// Function used by back button
function previousSlide() {
    showSlide(currentSlide -= 1);
}

// Shows a specific slide - will be used by back and forward buttons
function showSlide(slideIndex) {
    let slides = document.getElementsByClassName('slide-image');

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show the slide with the given index
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].style.display = 'block';
}

// Add functionality to back and forward buttons
document.getElementById('back').addEventListener('click', previousSlide);
document.getElementById('forward').addEventListener('click', nextSlide);