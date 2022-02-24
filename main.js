
document.querySelector('#yell').addEventListener('click', run)


function run() {
    const fName = document.querySelector('#firstName').value.toUpperCase()
    const fMid = document.querySelector('#firstMiddle').value.toUpperCase()
    const lMid = document.querySelector('#middleName').value.toUpperCase()
    const lName = document.querySelector('#lastName').value.toUpperCase()

    document.querySelector('#placeToSee').innerText = `${fName} 
    ${fMid} ${lMid} ${lName} !!!`
}





// const synth = window.speechSynthesis; //Allows values to be read
// document.querySelector('#yell').addEventListener('click', run)


// function run() {
//     const fName = document.querySelector('#firstName').value
//     const fMid = document.querySelector('#firstMiddle').value
//     const lMid = document.querySelector('#middleName').value
//     const lName = document.querySelector('#lastName').value

//     const yellText = `${fName} ${fMid} ${lMid} ${lName}`


//     document.querySelector('#placeToSee').innerText = yellText;

//     let yellThis = new SpeechSynthesisUtterance(yellText);

//     synth.speak(yellThis);
// }

