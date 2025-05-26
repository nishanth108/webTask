function submitForm() {
  let value = true;
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;

  if (name.length < 2 || name.length > 20) {
    setError("nameId", "Name must be between 2 and 20 characters long.");
    value = false;
  }

  if (number.length != 10) {
    setError("numberId", "Number must be 10 digits long.");
    value = false;
  }
  return value;
}

function setError(id, message) {
  let nameErrorElement = (document.getElementById(id).value = message);
}

console.log("hello world");
