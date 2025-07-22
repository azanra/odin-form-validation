import validation from "./validation";

const formController = (function () {
  const validate = () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    validateEmail();
    validateCountry();
  };

  const validateEmail = () => {
    const email = document.querySelector("#email");
    const emailErrorMsg = document.querySelector(".emailError");
    email.addEventListener("input", () => {
      validation.check(email, emailErrorMsg);
    });
  };

  const validateCountry = () => {
    const country = document.querySelector("#country");
    const countryErrorMsg = document.querySelector(".countryError");
    country.addEventListener("input", () => {
      validation.check(country, countryErrorMsg);
    });
  };

  return { validate };
})();

export default formController;
