let encryptionBtn = document.querySelector("#encrypt-btn"); // click btn to encrpted
let eInput = document.querySelector("#encrypted"); // where encrpted display
let pInput = document.querySelector("#plaintxt"); // input PlainTxt
let inputs = [eInput,pInput]

inputs.forEach(input =>{
    input.oninput =() =>{
        input.value = input.value.toUpperCase() // turn all letters int capital
    }
})

function encrypt() {
    let  pInput = document.querySelector("#plaintxt").value; // input PlainTxt
    let solved = ''
    let shiftInput = parseInt(document.querySelector("#key").value) // parseInt() convert the value to int aka that we can work with
    for (let i = 0; i < pInput.length; i++) {
        let ascii_num = pInput[i].charCodeAt(); // will return invidual code for charcter
        let sum = ascii_num + shiftInput ; // it will shift the letters forward according to the value that is passed into the shifted input
        sum >= 65 && sum <= 90 ? solved += String.fromCharCode(sum) : sum > 90 ? Solved += String.fromCharCode(65 +(sum & 91)) : solved += pInput[i]

        
    }
    eInput.value = solved

    
}

encryptionBtn.addEventListener("click",encrypt)





