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
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var imageE = "ear-button";
var imagef = "flamingo-button";
var imagem = "music-button";
var imagep = "pineapple-button";
var imagev = "volume-button";
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();

    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);















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