function submitForm() {
  let nameInput = document.formName.nameName.value.trim();
  let numberInput = document.formName.numberName.value;
  // let emailInput = document.formName.emailName.value;
  // let genderInput = document.formName.genderName.value;
  let ageInput = document.formName.ageInp.value;
  // alert(nameInput);
  // alert(numberInput);
  // alert(emailInput);
  // alert(genderInput);
  // alert(ageInput);

  let value =
    (numberInput.length === 10) & (nameInput.length > 5) & (ageInput > 18)
      ? true
      : false;

  if (value) {
    alert("Form submitted successfully!");
  } else {
    alert("Please enter a valid Input.");
  }
  return value;
}
