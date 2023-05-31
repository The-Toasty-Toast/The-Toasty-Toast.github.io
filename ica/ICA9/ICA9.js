const questionButton = document.querySelector('#js-new-quote');

const questionBtnClick= questionButton.addEventListener
('click', newTrivia);
const answerButton= document.querySelector('#js-answer-btn');
const answerBtnClick=answerButton.addEventListener("click",giveAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


var jsonData = '';

async function newTrivia(){
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent='';

    try{
        var response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText)
        }

        jsonData = await response.json();
        const quoteText = jsonData['question'];
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent= quoteText;  
    }
    catch (err){
        console.log(err)
        alert ('Failed');
    }
}

function giveAnswer(){
    const answerText = jsonData['answer'];
        const answerArea = document.querySelector('#js-answer-text');
        answerArea.textContent= answerText;
}



