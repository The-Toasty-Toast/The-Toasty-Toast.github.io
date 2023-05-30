const button= document.
querySelector('#js-new-quote');

// checking that this is working 
//onsole.log(button)

const questionBtnClick= questionButton.addEventListener
('click', newTrivia);
const answerBtnClick= document
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

function newQuestion(){
    const output = await newTrivia();
    console.log(output);

    
}

async function newTrivia(){
    //console.log("button pressed!");
    try{
        const response = await fetch(endpoint);
        if(!responce.ok){
            throw Error(responce.statusText)
        }


   // console.log(responce);
        const jsonData = await response.json();
        const quoteTest=jsonData['question'];
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textConst= quoteText;
        //console.log(jsonData ['question']);
       //console.log(jsonData ['answer']);}
    }
    catch (err){
        console.log(err)
        alert ('Failed');
    
    }

var jsonData = "";
const answerArea= document.querySelector('#js-answer-text');
anwserArea. textContent = '';
 
function giveAnswer(){
    const answerText = jsonData['answer'];
    const answerArea = document.
}
}



