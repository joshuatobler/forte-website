const aboutCard = document.querySelector('.about-card');

aboutCard.addEventListener("click", () => {
  const isFlipped = aboutCard.classList.toggle("is-flipped");

  aboutCard.setAttribute("aria-expanded", String(isFlipped));
  aboutCard.setAttribute(
    "aria-label",
    isFlipped
      ? "Flip the Forte Shift card back to the front"
      : "Learn about the Forte Shift"
  );
});