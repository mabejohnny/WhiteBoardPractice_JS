"Use strict"; 

//Reverse a string

function reverseAString(stringToReverse) {

    let reversedString = "";

    for(let i = stringToReverse.length - 1; i >= 0; i--) {

       reversedString += stringToReverse[i] 

       console.log(stringToReverse[i]);
          
    } 
    return stringToReverse; 
}
reverseAString('hello')


//Capitalize letter

function capitalizeFirstLetter(lowerCaseString) {

    let upperCaseString = " ";

    for(let i = 0; i < lowerCaseString.length; i++) {

        if(i === 0) {
            upperCaseString += lowerCaseString[0].toUpperCase();
        }
        else if(lowerCaseString[i] === " ") {
            upperCaseString += " ";
            upperCaseString += lowerCaseString[i + 1].toUpperCase();
        }
        else {
            upperCaseString += lowerCaseString[i];
        }
    }
    console.log(upperCaseString);
}
capitalizeFirstLetter('hello world');


//Compress a string

//empty string to hold new string
//loop through string to check 
//compare current to following
//if match counter++
//in for, save count and update

function compressAString(stringToCompress) {
    let compressedString = ' ';
    let counter = 1;

    for(let i = 0; i < stringToCompress.length; i++ ) {
        if(stringToCompress[i] === stringToCompress[i + 1]) {
            counter++
        }
        else {
            compressedString += counter;
            compressedString += stringToCompress;
            counter = 1;
        }
    }
    console.log(compressedString);
}
compressAString("aabbcc")

//Palindrome

//send word to reverseAString()
//statements: if reversedWord === palindromeCheck then it is, if not, it is not.
function checkForPalindrome(palindromeCheck) {
    let reversedWord = reverseAString(palindromeCheck)

    if(reversedWord === palindromeCheck) {
        console.log(reversedWord + " is a palindrome");
    }
    else {
        console.log(reversedWord +" is not a palindrome")
    }
}
checkForPalindrome("madam")