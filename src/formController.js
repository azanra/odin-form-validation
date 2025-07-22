import validation from "./validation";

const formController = (function () {
  const validate = () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    validateEmail();
  };

  const validateEmail = () => {
    const email = document.querySelector("#email");
    const emailErrorMsg = document.querySelector(".emailError");
    email.addEventListener("input", () => {
      validation.check(email, emailErrorMsg);
    });
  };

  return { validate };
})();

export default formController;
