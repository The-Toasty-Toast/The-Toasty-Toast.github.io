const button = document.querySelector ('#Fox-image');
const BtnClick = button.addEventListener('click', newImage);

const endpoint = "https://randomfox.ca/floof/?ref=apilist.fun";

async function newImage() {
       // const  = document.querySelector('#Fox-image');
        //answerArea.imageContent='';
    var response = await fetch(endpoint);
    if(!response.ok){
        throw Error(response.statusImage)
    }
console.log(statusImage)
    jsonData = await response.json();
    const imageF = jsonData['image'];
    const imageArea = document.querySelector('#Fox-image');
    imageArea.imageContent= imageF;  

catch (err){
    console.log(err)
    alert ('Failed');
}
}