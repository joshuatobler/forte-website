const aboutCard = document.querySelector(".about-card");
const formModal = document.querySelector(".form-modal");
const formTitle = document.querySelector(".form__title");
const formContainer = document.querySelector(".form__container");
const closeFormButton = document.querySelector(".form-modal__close");
const wipModal = document.querySelector(".wip-modal");
const wipCloseButton = document.querySelector(".wip-modal__close");
const wipConfirmButton = document.querySelector(".wip-modal__button");

const forms = {
  jot: {
    title: "Join Our Team",
    embed: `
      <div class="hs-form-frame" data-region="na1" data-form-id="85ff5c7d-62d5-4db2-a20a-12a16e8db9ec" data-portal-id="22760178"></div>
    `,
  },
  emp: {
    title: "Request An Event",
    embed: `
      <div class="hs-form-frame" data-region="na1" data-form-id="1823e604-5752-46c9-832c-53fdb7c8904d" data-portal-id="22760178"></div>
    `,
  },
  rfp: {
    title: "Request For Proposal",
    embed: `
      <div class="hs-form-frame" data-region="na1" data-form-id="199fc639-c2c7-4bf0-9d95-6e91edbebecc" data-portal-id="22760178"></div>
    `,
  },
};

aboutCard.addEventListener("click", () => {
  const isFlipped = aboutCard.classList.toggle("is-flipped");

  aboutCard.setAttribute("aria-expanded", String(isFlipped));
  aboutCard.setAttribute(
    "aria-label",
    isFlipped
      ? "Flip the Forte Shift card back to the front"
      : "Learn about the Forte Shift",
  );
});

document.querySelectorAll("[data-form]").forEach((button) => {
  button.addEventListener("click", () => {
    const form = forms[button.dataset.form];

    formTitle.textContent = form.title;
    formContainer.innerHTML = form.embed;
    formModal.showModal();
  });
});

closeFormButton.addEventListener("click", () => {
  formModal.close();
  formContainer.replaceChildren();
});

formModal.addEventListener("click", (event) => {
  if (event.target === formModal) {
    formModal.close();
    formContainer.replaceChildren();
  }
});

document.querySelectorAll("[data-wip]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    wipModal.showModal();
  });
});

function closeWipModal() {
  wipModal.close();
}

wipCloseButton.addEventListener("click", closeWipModal);
wipConfirmButton.addEventListener("click", closeWipModal);

wipModal.addEventListener("click", (event) => {
  if (event.target === wipModal) {
    closeWipModal();
  }
});