const passwordDisplay = document.getElementById("password");
const length = 10;

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "1234567890";

const specialCharacters = "~!@#$%^&*()_+=-|{}[]?><";

const all = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

let password = '';

function generatePassword(){
  for(i = 0; i < length; i++){
    let randomNumber = Math.floor(Math.random()*8);

    if (randomNumber === 0 || randomNumber === 4){
      let randomIndex = Math.floor(Math.random()*(upperCaseLetters.length));
      password += upperCaseLetters[randomIndex];
    } else if (randomNumber === 1 || randomNumber === 5){
        let randomIndex = Math.floor(Math.random()*(lowerCaseLetters.length));
        password += lowerCaseLetters[randomIndex];
    } else if (randomNumber === 2 || randomNumber === 6){
      let randomIndex = Math.floor(Math.random()*(numbers.length));
      password += numbers[randomIndex];
    } else if (randomNumber === 3 || randomNumber === 7){
      let randomIndex = Math.floor(Math.random()*(specialCharacters.length));
      password += specialCharacters[randomIndex];
    }
  }
  passwordDisplay.value = password;
  return password;
}

async function copyPassword() {
  passwordDisplay.select();
  try {
    await navigator.clipboard.writeText(password);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

const copyBtn = document.querySelector(".copy")
const generateButton = document.querySelector("button");

generateButton.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword)