//* encrypt function
let encrypt = function (input) {
  let result = "";
  let shift = 3;
  let inputarea = input.target.value;
  for (var i = 0; i < inputarea.length; i++) {
    if (inputarea[i].charCodeAt(0) >= 65 && inputarea[i].charCodeAt(0) <= 90) {
      result += String.fromCharCode(
        ((inputarea[i].toLowerCase().charCodeAt(0) - shift - 122) % 26) +
          122
      );
    } else if (
      inputarea[i].charCodeAt(0) >= 97 &&
      inputarea[i].charCodeAt(0) <= 122
    ) {
      result += String.fromCharCode(
        ((inputarea[i].toLowerCase().charCodeAt(0) - shift - 122) % 26) +
          122
      );
    } else result += String.fromCharCode(inputarea[i].charCodeAt(0));
  }
  document.getElementById("output").textContent = result;
};

//* decrypt function
let decrypt = function (output) {
  let result = "";
  let shift = 3;
  let outputarea = output.target.value;

  for (var i = 0; i < outputarea.length; i++) {
    if (
      outputarea[i].charCodeAt(0) >= 65 &&
      outputarea[i].charCodeAt(0) <= 90
    ) {
      result += String.fromCharCode(
        ((outputarea[i].toLowerCase().charCodeAt(0) + shift - 97) % 26) + 97
      );
    } else if (
      outputarea[i].charCodeAt(0) >= 97 &&
      outputarea[i].charCodeAt(0) <= 122
    ) {
      result += String.fromCharCode(
        ((outputarea[i].toLowerCase().charCodeAt(0) + shift - 97) % 26) + 97
      );
    } else result += String.fromCharCode(outputarea[i].charCodeAt(0));
  }
  document.getElementById("input").textContent = result;
};

//*input part
document.getElementById("input").addEventListener("input", function (e) {
  encrypt(e);
});

//* output part
document.getElementById("output").addEventListener("input", function (e) {
  decrypt(e);
});

