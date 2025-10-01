
// Navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
 navMenu.classList.toggle('active');
});
// Pricing table toggle
const pricingToggle = document.querySelectorAll('.pricing-toggle');
pricingToggle.forEach((toggle) => {
 toggle.addEventListener('click', () => {
 const pricingTable = toggle.parentNode.nextElementSibling;
 pricingTable.classList.toggle('active');
 });
});
// Contact form validation
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
contactForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const name = nameInput.value.trim();
 const email = emailInput.value.trim();
 const message = messageInput.value.trim();
 if (name === '' || email === '' || message === '') {
 alert('Please fill out all fields.');
 return;
 }
 // Submit form data to server or API
 console.log({ name, email, message });
});
// FAQ accordion
const faqToggles = document.querySelectorAll('.faq-toggle');
faqToggles.forEach((toggle) => {
 toggle.addEventListener('click', () => {
 const faqAnswer = toggle.parentNode.nextElementSibling;
 faqAnswer.classList.toggle('active');
 });
});
