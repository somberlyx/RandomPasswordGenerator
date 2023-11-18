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
    let randomNumber = Math.floor(Math.random()*8);
    console.log(randomNumber);

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
  console.log(password);
}