window.onload = function(){
    console.log("Hello world");
}

let encodingArr = [];
let message = '';
let els = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

function generateArray(){
    encodingArr = [];
    message = document.getElementById("input").value;
    message = message.split('');
    console.log(nextLetters(message[0]));
    if(message.length != 9){
        alert("Słowo musi zawierać 9 liter!");
    } else {
        console.log(message);
        for(let i = 0; i < 9; i++){

            encodingArr.push(nextLetters(message[i]));
            element = document.getElementById(els[i]);
            elementsTab = nextLetters(message[i]);
            element.innerHTML = '';
            for(let j = 0; j < 9; j++){
                element.innerHTML += elementsTab[j];
                element.innerHTML += ", ";
            }

        }

        console.table(encodingArr);

    }
    
}

function encode(){

    encodedMessage = [];
    encodedStr = '';
    input = document.getElementById("message").value;
    input = input.split('');
    console.log(input);
    for(let i=0; i<input.length; i++){
        let idx = findCharIndex(encodingArr, input[i]);
        encodedMessage.push(idx);
        encodedStr += idx[0];
        encodedStr += idx[1];
    }

    console.table(encodedMessage);
    console.log(encodedStr);
    
    messageDiv = document.getElementById("encoded-message");
    messageDiv.innerHTML = "Twoja zakodowana wiadomość to: " + encodedStr;
    
}

function findCharIndex(charArray, targetChar) {
    for (let i = 0; i < charArray.length; i++) {
      for (let j = 0; j < charArray[i].length; j++) {
        if (charArray[i][j] === targetChar) {
          return [i, j];
        }
      }
    }
    return null; // Zwracanie null, jeśli znak nie został znaleziony w tablicy
  }

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'y', 'z'];

function nextLetters(letter){

    id = alphabet.indexOf(letter);
    let nextLettersArr = [];
    for(let i=0; i<9; i++){
        nextLettersArr.push(alphabet[id]);
        id++;
        if(alphabet[id] == undefined){
            id = 0;
        }
    }

    return nextLettersArr;
}