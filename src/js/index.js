document.addEventListener("DOMContentLoaded", () => {
  const manual = document.querySelector(".manual");
  const manualMenu = document.querySelector(".manual-menu");

  const feedback = document.querySelector(".feedback");
  const feedbackMenu = document.querySelector(".feedback-menu");

  const earnings = document.querySelector(".earnings");
  const earningsMenu = document.querySelector(".earnings-menu");

  const partners = document.querySelector(".partners");
  const partnersMenu = document.querySelector(".partners-menu");

  const english = document.querySelector(".english");
  const englishMenu = document.querySelector(".english-menu");

  const humburgerIcons = document.querySelector(".humburger-icons");
  const humburger = document.querySelector(".humburger");
  const close = document.querySelector(".close");
  const navbar = document.querySelector(".navbar-menu");

  manual.addEventListener("click", () => {
    manualMenu.classList.toggle("hidden");
  });

  feedback.addEventListener("click", () => {
    feedbackMenu.classList.toggle("hidden");
  });

  earnings.addEventListener("click", () => {
    earningsMenu.classList.toggle("hidden");
  });

  partners.addEventListener("click", () => {
    partnersMenu.classList.toggle("hidden");
  });

  english.addEventListener("click", () => {
    englishMenu.classList.toggle("hidden");
  });

  humburgerIcons.addEventListener("click", () => {
    navbar.classList.toggle("-translate-x-[100%]");
    humburger.classList.toggle("hidden");
    close.classList.toggle("hidden");
  });
});
