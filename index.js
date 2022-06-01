/*
Primary function: generatePassword(): This function takes the user's numeric input (n) and generates four random passwords of n length, outputting one on each of four buttons.

Secondary function: copyPassword(): This function copies the respective password to the clipboard when its button is clicked.
*/

/* Declare global variables */

let passwordOneEl = document.getElementById("passwordOne-el")
let passwordTwoEl = document.getElementById("passwordTwo-el")
let passwordThreeEl = document.getElementById("passwordThree-el")
let passwordFourEl = document.getElementById("passwordFour-el")
let passwordLength = passwordLengthEl.value
let finalPasswordArray = ["passwordOneEl", "passwordTwoEl", "passwordThreeEl", "passwordFourEl"]

/* PRIMARY FUNCTION TO GENERATE FOUR PASSWORDS */
function generatePassword() {
    /* DECLARE PARENT FUNCTION VARIABLES */
    //array of character types
    let charType = ["upperCase", "lowerCase", "stringNumber", "hyphen", "underscore", "special", "brackets"]
    let passwordLengthEl = document.getElementById("passwordLength")
    let temporaryPasswordArray = []

    /* DECLARE NESTED FUNCTION VARIABLES */
    //array of all uppercase English letters
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //array of all lowercase English letters
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // array of all numbers 0-9
    let stringNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    // hyphen
    let hyphen = "-"

    // underscore
    let underscore = "_"

    //array of special characters available
    let special = ["!", "#", "$", "%", "&", "'", "*", "+", ",", ".", "/", ":", ";", "=", "?", "@", "^", "`", "|", "~"]

    //array of brackets available
    let brackets = ["[", "]", "{", "}", "(", ")", "<", ">"]

    /* CHECK USER INPUT (password length) */
    if (passwordLengthEl.value < 8 || passwordLengthEl.value > 26) {
        alert("Please enter a number from 8 to 26")
        return
    }

    /* Nested function to determine a random character type */
    function determineCharType() {
        let indexCharSelect = Math.floor(Math.random() * 7)
        return charType[indexCharSelect]
    }

    /* Nested function to determine a random upper case letter */
    function getRandomUpperCase() {
        let indexUpperSelect = Math.floor(Math.random() * 26)
        return indexUpperSelect
    }

    /* Nested function to determine a random lower case letter */
    function getRandomLowerCase() {
        let indexLowerSelect = Math.floor(Math.random() * 26)
        return indexLowerSelect
    }

    /* Nested function to determine a random number from 0 to 9 */
    function getRandomStringNumber() {
        let indexNumberSelect = Math.floor(Math.random() * 10)
        return indexNumberSelect
    }

    /* Nested function to determine a random special character */
    function getRandomSpecial() {
        let indexSpecialSelect = Math.floor(Math.random() * 20)
        return indexSpecialSelect
    }

    /* Nested function to determine a random bracket */
    function getRandomBracket() {
        let indexBracketSelect = Math.floor(Math.random() * 8)
        return indexBracketSelect
    }

    /* PARENT FUNCTION */

    /* Step 1: Loop 4 times to generate 4 passwords */
    for (x = 0; x < 4; x++) {
        temporaryPasswordArray.push(upperCase[getRandomUpperCase()]) // Get a random upper case letter to start each password

        /* Step 2: Get n random additional characters for each password; n = user input from 8 to 26 */
        for (y = 0; y < (passwordLengthEl.value - 1); y++) {

            let charTypeSelection = determineCharType()
            if (charTypeSelection === "upperCase") {
                temporaryPasswordArray.push(upperCase[getRandomUpperCase()])
            } else if (charTypeSelection === "lowerCase") {
                temporaryPasswordArray.push(lowerCase[getRandomLowerCase()])
            } else if (charTypeSelection === "stringNumber") {
                temporaryPasswordArray.push(stringNumber[getRandomStringNumber()])
            } else if (charTypeSelection == "hyphen") {
                temporaryPasswordArray.push(hyphen)
            } else if (charTypeSelection == "underscore") {
                temporaryPasswordArray.push(underscore)
            } else if (charTypeSelection === "special") {
                temporaryPasswordArray.push(special[getRandomSpecial()])
            } else if (charTypeSelection === "brackets") {
                temporaryPasswordArray.push(brackets[getRandomBracket()])
            } else {
                temporaryPasswordArray.push("Something went wrong")
            }
        }
        if (x === 0) {
            /* passwordOneEl.textContent = temporaryPasswordArray.length */
            passwordOneEl.textContent = temporaryPasswordArray.join("")
        } else if (x === 1) {
            /* passwordTwoEl.textContent = temporaryPasswordArray.length */
            passwordTwoEl.textContent = temporaryPasswordArray.join("")
        } else if (x === 2) {
            /* passwordThreeEl.textContent = temporaryPasswordArray.length */
            passwordThreeEl.textContent = temporaryPasswordArray.join("")
        } else {
            /* passwordFourEl.textContent = temporaryPasswordArray.length */
            passwordFourEl.textContent = temporaryPasswordArray.join("")
        }
        temporaryPasswordArray = []
    }
}

/* SECONDARY FUNCTION TO COPY PASSWORD TO CLIPBOARD ONCLICK - incomplete */
function copyPassword(clicked) {
    alert(clicked + " was pushed") //determine which button was pushed
}