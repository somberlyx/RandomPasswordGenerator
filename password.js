const passwordDisplay = document.getElementById("password");
const length = 10;

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "1234567890";

const specialCharacters = "~!@#$%^&*()_+=-|{}[]?><";

const all = [upperCaseLetters, lowerCaseLetters, numbers, specialCharacters];

function generatePassword(){
  let password = '';
  for(i = 0; i < length; i++){
    let randomNumber = Math.round(Math.random()*7);
    console.log(randomNumber);

    if (randomNumber === 0 || randomNumber === 4){
      let randomIndex = Math.round(Math.random()*(upperCaseLetters.length-1));
      password += upperCaseLetters[randomIndex];
    } else if (randomNumber === 1 || randomNumber === 5){
        let randomIndex = Math.round(Math.random()*(lowerCaseLetters.length-1));
        password += lowerCaseLetters[randomIndex];
    } else if (randomNumber === 2 || randomNumber === 6){
      let randomIndex = Math.round(Math.random()*(numbers.length-1));
      password += numbers[randomIndex];
    } else if (randomNumber === 3 || randomNumber === 7){
      let randomIndex = Math.round(Math.random()*(specialCharacters.length-1));
      password += specialCharacters[randomIndex];
    }
  }
  console.log(password);
}