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
    validatePassword();
    validateConfirmPassword();
    onSubmit();
  };

  const validateEmail = () => {
    const email = document.querySelector("#email");
    email.addEventListener("input", () => {
      validation.check(email);
    });
  };

  const validateCountry = () => {
    const country = document.querySelector("#country");
    country.addEventListener("input", () => {
      validation.check(country);
    });
  };

  const validatePostalCode = () => {
    const postalCode = document.querySelector("#postalCode");
    postalCode.addEventListener("input", () => {
      validation.check(postalCode);
    });
  };

  const validatePassword = () => {
    const password = document.querySelector("#password");
    password.addEventListener("input", () => {
      validation.check(password);
    });
  };

  const validateConfirmPassword = () => {
    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#passwordConfirm");
    passwordConfirm.addEventListener("input", () => {
      validation.check(passwordConfirm);
      validation.checkPassword(password, passwordConfirm);
    });
  };

  const onSubmit = () => {
    const submitBtn = document.querySelector("#submitBtn");
    const form = document.querySelector("#form");
    submitBtn.addEventListener("click", () => {
      form.reportValidity();
      form.checkValidity() && alert("High Five !");
    });
  };

  return { validate };
})();

export default formController;
