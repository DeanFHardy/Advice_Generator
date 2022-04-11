const adviceQuote = document.querySelector('.quote');
const adviceId = document.querySelector('.header');
const dice = document.querySelector('.circle');
let sllp, advice;

// Simple fetch API 
function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(blob => blob.json())
    .then(response => {
        console.log(response);
        slip = response.slip.id;
        advice = response.slip.advice;
        adviceId.textContent = `ADVICE #${slip}`;
        adviceQuote.textContent = `${advice}`;
        console.log(slip, advice);
    });
}

getAdvice(); // Call function

dice.addEventListener('click', getAdvice);