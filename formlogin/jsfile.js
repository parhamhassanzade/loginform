let imgB = document.querySelector("#imageBox");
let wellcomeText = document.querySelector("#wellcomeText");

var time = new Date();
var hour = time.getHours();
//*chnage the text and picture
let change = () => {
  if (hour > 6 && hour < 12) {
    imgB.classList.add("morning");
    wellcomeText.textContent = "GoodMorning";
  } else if (hour >= 12 && hour < 19) {
    imgB.classList.add("evning");
    wellcomeText.textContent = "GoodEvning";
  } else {
    imgB.classList.add("night");
    wellcomeText.textContent = "GoodNight";
  }
};
//*call change
change();

let btn = document.querySelector("button");
//*userNameValidation

let flaguser = false;
document.querySelector("#email").addEventListener("change", function (e) {
  let emaillvalu = e.target.value;
  if (emaillvalu.includes("@")) {
    flaguser = true;
    document.querySelector("#eamilerror").textContent = "";
    e.target.style.border = "1px solid green";
  } else {
    document.querySelector("#eamilerror").textContent = "email format is wrong";
    flaguser = false;
    e.target.style.border = "1px solid red";
  }
});

//*password validation

let flagpass = false;
let passwordInput = document
  .querySelector("#password")
  .addEventListener("change", function (e) {
    let passvalue = e.target.value;

    let regex = /[A-Z]/g;
    let regNum = /[0-9]/g;

    if (
      passvalue.length >= 6 &&
      passvalue.search(regex) != -1 &&
      passvalue.search(regNum) != -1
    ) {
      flagpass = true;
      e.target.style.border = "1px solid green";
      document.querySelector("#passerror").textContent = "";
    } else {
      e.target.style.border = "1px solid red";
      flagpass = false;
      document.querySelector("#passerror").textContent =
        "password must bigger than 6 character and have uperCase character and number";
    }
  });

//*button=> when account is created
btn.addEventListener("click", function (e) {
  if (flagpass == true && flaguser == true) {
    let compliteText = document.createElement("h3");
    document.querySelector("form").style.display = "none";
    compliteText.style.color = "green";
    compliteText.textContent =
      "Your Account is created. Please Check Your Email for Verification Step";

    document.querySelector("#wellcomeText").appendChild(compliteText);
  } else {
    e.preventDefault();
    document.querySelector("#passerror").textContent = "Requirements";
    document.querySelector("#eamilerror").textContent = "Requirements";
  }
});
