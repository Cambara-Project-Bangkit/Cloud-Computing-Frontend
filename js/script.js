const questionFaq = document.querySelectorAll('.container-question-faq');
const answerFaq = document.querySelectorAll('.container-answer-faq');
const faqArrowDown = document.querySelectorAll('.fa-chevron-down');
const faqArrowRight = document.querySelectorAll('.fa-chevron-up');
const anchors = document.querySelectorAll('a[href^="#"]');
const navMobile = document.querySelector('.navbar-links-mobile');
const hamburgerbutton = document.getElementById('menu');

// navbar mobile
hamburgerbutton.addEventListener('click', () => {
	navMobile.classList.toggle('show');
	hamburgerbutton.classList.toggle('show');
});

// accordian logic
questionFaq.forEach((question, i) => {
    question.addEventListener('click', () => {
        const isAnswerHidden = answerFaq[i].classList.contains('d-none');

        answerFaq[i].classList.toggle('d-none');
        answerFaq[i].classList.toggle('d-block');

        faqArrowDown[i].classList.toggle('d-none', isAnswerHidden);
        faqArrowRight[i].classList.toggle('d-none', !isAnswerHidden);
        faqArrowRight[i].classList.toggle('d-block', isAnswerHidden);
    });
});

// scroll animation smooth
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        // const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
