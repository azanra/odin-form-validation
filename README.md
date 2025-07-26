# Odin Form Validation

This is a solution to the [Odin Form Validation](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Input an email, country, postal code, password, and confirm password
- All input element will be validated as the user input

### Screenshot

![](./src/asset/odin-form-ui.png)

### Links

- Live Site URL: [Live Preview](https://azanra.github.io/odin-form-validation/)

## My process

### Built with

- HTML, CSS, Javascript

### What I learned

Validating an form fields, and checking the form field state with validity object and setting custom error message depending on their validity state.
And since the form haven no validate attribute i need to check the validity
of the form element with reportValidity. And to check whether the form is valid or not, i can use checkValidity method that will return boolean value
of whether the form is valid or not

```js
if (input.validity.typeMismatch) {
  input.setCustomValidity(`Please enter a proper ${input.name}`);
}
```

```js
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#form");
submitBtn.addEventListener("click", () => {
  form.reportValidity();
  form.checkValidity() && alert("High Five !");
});
```

### Useful resources

- [MDN Client side validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript) [MDS Constrain validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation) (On explaining how to check validation of form control elements with javascript)
