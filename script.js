document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing');
    const text = 'Full Stack Developer'; // The text you want to type
    let i = 0;
    let isDeleting = false; // Flag to track if the text is being deleted

    function typeAndDelete() {
        if (isDeleting) {
            // Erase characters
            typingElement.innerHTML = text.substring(0, i);
            i--;
            if (i === 0) {
                isDeleting = false; // When text is fully erased, start typing again
            }
        } else {
            // Type characters
            typingElement.innerHTML = text.substring(0, i);
            i++;
            if (i === text.length) {
                isDeleting = true; // Once the text is fully typed, start deleting
            }
        }

        setTimeout(typeAndDelete, isDeleting ? 100 : 150); // Speed up deletion (100ms), slow down typing (150ms)
    }

    typeAndDelete(); // Start the typing and deleting loop
});
