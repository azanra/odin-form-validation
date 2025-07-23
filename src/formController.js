import validation from "./validation";

const formController = (function () {
  const validate = () => {
    const form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    validateEmail();
    validateCountry();
    validatePostalCode();
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

  const validatePostalCode = () => {
    const postalCode = document.querySelector("#postalCode");
    const postalErrorMsg = document.querySelector(".postalError");
    postalCode.addEventListener("input", () => {
      validation.check(postalCode, postalErrorMsg);
    });
  };

  return { validate };
})();

export default formController;
