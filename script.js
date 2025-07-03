document.querySelector('.join-btn').addEventListener('click', function() {
    alert('Thank you for your interest! Registration coming soon.');
});
document.querySelector('.trial-btn').addEventListener('click', function() {
    alert('You have selected a Free Trial Class! Details coming soon.');
});

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
}); 