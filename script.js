// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formFeedback').textContent = "Success! Thank you for subscribing.";
    this.reset();
});

// Like Button Counter Logic
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;

likeBtn.addEventListener('click', function() {
    count++;
    likeCount.textContent = count;
    this.style.backgroundColor = "#2d5a27";
    this.style.color = "white";
    this.textContent = "❤️ Liked!";
});
