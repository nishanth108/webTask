// function submitForm(){
//     alert('Hii guys');
// }
function onClick() {
  // document.getElementsByClassName('nameErrorClass')[0].innerHTML = 'hello world';
  document.getElementsById("nameErrorId").innerHTML;
}

function submitForm() {
  let val = true;

  let nameInput = document.formName.nameName.value;
  let numberInput = document.formName.numName.value;
  // let emailInput=document.formName.emailName.value;
  // let genderInput=document.formName.genderName.value;8
  // let ageInput = document.formName.ageName.value;

  if (nameInput.length < 3 || nameInput.length > 20) {
    val = false;
    setError("nameErrorId", "Please provide minimum 3 & maximum 20 char");
  } else {
    clearForm("nameErrorId");
  }

  if (numberInput.length != 10) {
    val = false;
    setError("numErrorId", "The lenght should be 10 digit");
  } else {
    clearForm("numErrorId");
  }

  // if(ageInput.length <= 18){
  //     setError('','Age should be above 18');
  //    val = false;
  // }
  return val;
}

function setError(id, message) {
  document.getElementById(id).innerHTML = message;
}

function clearForm(id) {
  document.getElementById(id).innerHTML = "";
}

function onClick() {
  let nameInput = (document.formName.nameName.value = "");
  let numberInput = (document.formName.numName.value = "");
  clearForm(numErrorId);
  clearForm(nameErrorId);
}
