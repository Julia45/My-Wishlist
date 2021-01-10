let subscribeButton = document.querySelector(".subscribeButton")
let subscribeInput = document.getElementById("emailSubscribeInput")
subscribeButton.addEventListener("click", checkCorrectEmail)
let errorMessage = document.querySelector(".error")

function checkCorrectEmail() {
  let value = subscribeInput.value
  let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let message;
  if (!value) {
    message = "Email Is Required"
  } else if (!value.match(emailPattern)) {
    message = "It Is Not An Email"
  } else {
    message = ""
  }

  errorMessage.innerHTML = message;
  let subscribeInputClass =
    (message === undefined) ? 'emailSubscribeInput' :
      (message === "") ? 'emailSubscribeInput-valid' : 'emailSubscribeInput-invalid';
  subscribeInput.classList.add(subscribeInputClass)
}