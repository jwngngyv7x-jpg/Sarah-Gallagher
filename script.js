// 1. Newsletter Form Confirmation (Requirement 52, 53)
const newsletterForm = document.getElementById('newsletterForm');
const formFeedback = document.getElementById('formFeedback');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stops the page from refreshing
        formFeedback.textContent = "Success! Thank you for subscribing to Holistic Herbs.";
        formFeedback.style.color = "#2d5a27";
        formFeedback.style.fontWeight = "bold";
        this.reset(); // Clears the form fields
    });
}

// 2. Like Button Counter Logic
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;

if (likeBtn) {
    likeBtn.addEventListener('click', function() {
        count++;
        likeCount.textContent = count;
        
        // Visual feedback when clicked
        this.style.backgroundColor = "#2d5a27";
        this.style.color = "white";
        this.textContent = "❤️ Liked!";
        
        // Optional: Disable after one click so they can't spam it
        this.disabled = true;
        this.style.cursor = "default";
    });
}

