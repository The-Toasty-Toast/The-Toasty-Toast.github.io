
function myFunction() {
let tname = prompt("What would you name the Toucan?");
if (tname != null) {
  document.getElementById("enter-name").innerHTML =
  "The name of the toucan is now " + tname +"!"}
}

function toucan(sw) {
    var pic;
    if (sw == 0) {
      pic = "toucan.png"
    } else {
      pic = "toucan2.png"
    }
    document.getElementById('myImage').src = pic;
  }