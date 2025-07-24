const validation = (function () {
  const check = (input) => {
    if (input.validity.typeMismatch) {
      input.setCustomValidity(`Please enter a proper ${input.name}`);
    } else if (input.validity.tooShort) {
      input.setCustomValidity(
        `Entered characted should be at least ${input.minLength}, Current character are ${input.value.length}`,
      );
    } else if (input.validity.tooLong) {
      input.setCustomValidity(
        `Entered characted should be at least ${input.maxLength}, Current character are ${input.value.length}`,
      );
    } else if (input.validity.valueMissing) {
      input.setCustomValidity("Field can't be empty");
    } else if (input.validity.patternMismatch) {
      input.setCustomValidity(
        "Please enter a proper postal code of your country",
      );
    } else {
      input.setCustomValidity("");
    }
    input.reportValidity();
  };

  const checkPassword = (password, passwordConfirm) => {
    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setCustomValidity("Confirmed password is wrong!");
    }
    passwordConfirm.reportValidity();
  };

  return { check, checkPassword };
})();

export default validation;
