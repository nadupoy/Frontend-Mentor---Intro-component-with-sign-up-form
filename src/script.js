// Receive an error message when the form is submitted if:
// - Any input field is empty.
// - The email address is not formatted correctly.


export function submitForm(event) {
  // Checks for any empty field. Displays error message if any is false. Does not submit the form.
  // Checks for email address format. Displays error message if format is incorrect. Does not submit the form.
  // Otherwise submits the form.

  let inputFields = document.getElementsByClassName("input-textbox");
  let emailAddress = document.querySelector("[type='email']");

  for (let inputField of inputFields) {
  // if (the value of inputField is empty) {
  //   display the error message and don't submit the form
  //   } else {
  //     submit the form
  //     }

    if (inputField.value == false) {
      let errorIcon = inputField.nextElementSibling;
      let errorMessage = errorIcon.nextElementSibling;

      errorIcon.style.display = "block";
      errorMessage.style.visibility = "visible";
      inputField.style.borderColor = "hsl(0, 100%, 74%)";

      event.preventDefault();
  }
}

  // if (the email address is not formatted correctly) {
  // display its error message and don't submit the form
  // } else {
  //   submit the form
  //   }

  let pattern = "[a-zA-Z0-9]+@[a-z]+\.com";
  let regExp = new RegExp(pattern);
  let emailInput = emailAddress.value;

  if (regExp.test(emailInput) === false) {
    let emailErrorIcon = emailAddress.nextElementSibling;
    let emailErrorMessage = emailErrorIcon.nextElementSibling;

    emailErrorIcon.style.display = "block";
    emailErrorMessage.style.visibility = "visible";
    emailAddress.style.borderColor = "hsl(0, 100%, 74%)";

    event.preventDefault();}
  }
