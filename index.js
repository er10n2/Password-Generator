const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//when the user clicks the generate password button, generate 2 random passwords. Each password should be 15 characters long
//Aditional features:
// ability to set password length
//copy on click. when the user clicks on a password, it should be copied to their clipboard

const buttonEl = document.getElementById("btn");
let p1 = document.getElementById("password1");
let p2 = document.getElementById("Password2");
let userInput = document.getElementById("userinputlength");

let pass1;
let pass2;
let DefaultpasswordLength = 15;

buttonEl.addEventListener("click", function(){

    pass1="";
    pass2="";

    let newPasswordLength = parseInt(userInput.value);
    if(isNaN(newPasswordLength) || newPasswordLength<=0){
        newPasswordLength =  DefaultpasswordLength;
    }
    
    
    for(let i =0; i<newPasswordLength; i++){

    let randompass1 = Math.floor(Math.random()*characters.length);
    let randompass2 = Math.floor(Math.random()*characters.length);

     pass1 +=  characters[randompass1];
     pass2 +=  characters[randompass2];

    }

   p1.textContent = pass1;
   p2.textContent = pass2;

})

  p1.addEventListener("click", function() {
  copyToClipboard(p1.textContent);
});

p2.addEventListener("click", function() {
  copyToClipboard(p2.textContent);
});

function copyToClipboard(text) {
  if (!text) return; // Don’t try copying empty passwords

  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard! ✅");
  }).catch(err => {
    console.error("Clipboard copy failed:", err);
  });
}