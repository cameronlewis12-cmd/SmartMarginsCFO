document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.menu-toggle');
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  const form = document.querySelector('form[data-has-feedback]');
  const feedback = document.querySelector('.form-feedback');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => navbar.classList.toggle('open'));
  }

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
    });
  });

  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      feedback.textContent = 'Thanks! A strategist will reach out within one business day.';
      feedback.classList.add('active');
      form.reset();
    });
  }
});
