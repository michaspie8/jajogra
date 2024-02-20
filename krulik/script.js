const canvas = document.getElementById("myCanvas");

let posX = canvas.offsetWidth / 2;
let posY = canvas.offsetHeight - 50;
const playerSize = 50;
const canvasHeight = 700;
canvas.height = canvasHeight;
var ctx = canvas.getContext("2d");

const playerTXT = new Image()
playerTXT.src = 'pixil-frame-0.png';

// document.addEventListener('keydown', function(event) {
//     if(event.key == "A" || event.key == "a") {
//         posX -= 5;
//     }
//     else if(event.key == "D" || event.key == "d") {
//         posX += 5;
//     }
// });

class Entity{
    constructor({position, velocity, txt}) {
        this.position = position;
        this.velocity = velocity;
        this.txt = txt;
        
        this.width = 50;
        this.height = 50;
    };

    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw(){
        ctx.drawImage(this.txt, this.position.x - 32, this.position.y - 32);
    }
}

const player = new Entity({
    position: {
        x: canvas.offsetWidth / 2,
        y: canvasHeight - 50
    },
    velocity: {
        x: 0,
        y: 0
    },
    txt: playerTXT
});

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },

  };

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
        if(keys.a.pressed == false){
            player.velocity.x -= 4;
            keys.a.pressed = true;
            console.log("gowno");
        }
        break;
      case 'd':
        if(keys.d.pressed == false){
            player.velocity.x += 4;
            keys.d.pressed = true;
        }
        break;
    }
  });

  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case 'a':
        if(keys.a.pressed == true){
        player.velocity.x += 4;
        keys.a.pressed = false;
        console.log("gowno");
    }
        break;
      case 'd':
        if(keys.d.pressed == true){
            player.velocity.x -= 4;
            keys.d.pressed = false;
        }
        break;
    }
  });
    
function animate(){

    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    player.update();
    player.draw();
    // ctx.drawImage(playerTXT, 0, 0);  
    
    
    window.requestAnimationFrame(animate);
}


animate();