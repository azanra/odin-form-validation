const validation = (function () {
  const check = (input, errorElement) => {
    if (input.validity.valid) {
      errorElement.textContent = "";
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = `Please enter a proper ${input.name}`;
    } else if (input.validity.tooShort) {
      errorElement.textContent = `Entered characted should be at least ${input.minLength}, Current character are ${input.value.length}`;
    } else if (input.validity.tooLong) {
      errorElement.textContent = `Entered characted should be at least ${input.maxLength}, Current character are ${input.value.length}`;
    }
  };

  return { check };
})();

export default validation;
