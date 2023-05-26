const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 30 minute hike back to the main trail, so :insertx: continued on up the mountain determined to summit that afternoon. When they got to :inserty:, they  decided to take a quick break. Eating a quick snack and having afew sips of water. Ater the short break they continued on. More and more walking and then :insertz: That did not deter :insertx: and they continued up the mountain. Eventualy content but tired :insertx: reached the top of the mountain and was able to see the far away dots of trees and rocks below.';
const insertX = ['Sam the subjectivly interested', 'Tom the beloved by some', 'Larry the long time old freind'];
const insertY = ['a nice flat lookout point', 'a large boulder', 'a steep section covered in snow'];
const insertZ = ['dark clouds drifted overhead and large drops of rain began to fall.', 'from above rocks shifted causing them to tumble down the side of the mountain.', 'a large snake slithered out of the rocks and blocked the path.'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);


  if (document.getElementById("Meters").checked) {
    const minutes = `30 minutes`;
    const  meters=  `48285 meters`;
    newStory = newStory.replaceAll('30 minute', minutes);
    newStory = newStory.replaceAll('48285', meters);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}