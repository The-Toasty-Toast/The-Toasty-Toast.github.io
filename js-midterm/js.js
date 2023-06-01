/*
<html>
  <head>
    <script type="application/javascript">
      var ctx = null;
      var x_icon = 0;
      var y_icon = 0;
      var stepX = 1;
      var stepY = 1;
      var size_x = 23;
      var size_y = 22;
      var canvas_size_x = 480;
      var canvas_size_y = 320;
      var anim_img = null;
      
      function draw() {
        var canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        anim_img = new Image(size_x, size_y);
        anim_img.onload = function() { setInterval('myAnimation()', 10); }
        anim_img.src = 'https://pbs.twimg.com/profile_images/3352183391/a16302aab7bd8742ad3e39a75454008a_normal.jpeg';
      }
      function myAnimation() {
        ctx.clearRect(0, 0, canvas_size_x, canvas_size_y);
       if (x_icon < 0 || x_icon > canvas_size_x - size_x) {stepX = -stepX; }
       if (y_icon < 0 || y_icon > canvas_size_y - size_y) {stepY = -stepY; }
          x_icon += stepX;
          y_icon += stepY;
       ctx.drawImage(anim_img, x_icon, y_icon);
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="480" height="320" style="border:solid 1px;"></canvas>
  </body>
</html>
*/



/*
make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'ear.png';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0, 50,50);}

    base_image.addEventListener("click", function(){ alert("This is an ear not the volume!");} );
    
  

   // base_image.onclick = function(){
       //alert("This is an ear not the volume!") ;}

}
 */
 const button = document.getElementById('ear-button');
         button.addEventListener('mouseover', function () {
             button.style.left = `${Math.ceil(Math.random() * 90)}%`;
             button.style.top = `${Math.ceil(Math.random() * 90)}%`;
         });
const button1 = document.getElementById('flamingo-button');
         button1.addEventListener('mouseover', function () {
             button1.style.left = `${Math.ceil(Math.random() * 90)}%`;
             button1.style.top = `${Math.ceil(Math.random() * 90)}%`;
         });
const button2 = document.getElementById('music-button');
         button2.addEventListener('mouseover', function () {
             button2.style.left = `${Math.ceil(Math.random() * 90)}%`;
             button2.style.top = `${Math.ceil(Math.random() * 90)}%`;
         });
const button3 = document.getElementById('pineapple-button');
         button3.addEventListener('mouseover', function () {
             button3.style.left = `${Math.ceil(Math.random() * 90)}%`;
             button3.style.top = `${Math.ceil(Math.random() * 90)}%`;
         });
const button4 = document.getElementById('speaker-button');
         button34.addEventListener('mouseover', function () {
             button4.style.left = `${Math.ceil(Math.random() * 90)}%`;
             button4.style.top = `${Math.ceil(Math.random() * 90)}%`;
         });

function Ear(){ 
alert("This is an ear not the volume!");
}
function Flamingo(){ 
    alert("Bobby the flamingo says hello!");
    }
function Music(){ 
    alert("That is a music note not the volume try again.");
        }
function Pineapple (){ 
    alert("That is a tropical fruit. The pineapple, (Ananas comosus), perennial plant of the family Bromeliaceae.");
                }
function Speaker (){ 
    alert("Ahh, at last now you can change the volume!");
         }

        
        





/*
var imgTag = new Image();
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var x = canvas.width;
var y = 0;

imgTag.onload = animate;
imgTag.src = "ear.png";



var h = window.innerHeight;
var w = window.innerWidth;

canvas.height = h;
canvas.width = w;


//moving image
var mover = {
  x: 0,
  y: 0,
  width: 40,
  height: 40,
  color: '#000',
  down: true,
  right: true
}

function animate() {
  clear();
  render();
  rID = requestAnimationFrame(animate);
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
  //set direction
  if (mover.down && mover.y >= h - mover.height)
    mover.down = false;

  if (!mover.down && mover.y <= 0)
    mover.down = true;

  if (mover.right && mover.x >= w - mover.width)
    mover.right = false;

  if (!mover.right && mover.x <= 0)
    mover.right = true;

  //make move
  if (mover.right)
    mover.x += 10;
  else
    mover.x -= 10;

  if (mover.down)
    mover.y += 10;
  else
    mover.y -= 10;

  //drawRectangle(mover);
  drawImage(mover);

}

function drawImage(mover) {
  context.drawImage(imgTag, mover.x, mover.y); // draw image at current position
}
*/