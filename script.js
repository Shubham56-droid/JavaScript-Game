let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',(e)=>{
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spritWidth = 575;
const spritHeight = 523;



let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimation = [];

const animationState = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }

];
animationState.forEach((state,index)=>{
    let frames  = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spritWidth;
        let positionY = index * spritHeight;
        frames.loc.push({x:positionX,y: positionY});
    }
    spriteAnimation[state.name] = frames;
});

console.log(spriteAnimation);

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    // ctx.fillRect(100,50,100,100);

    // sx - sprit x axis
    // sy - sprit y axis
    // dx - destination x axis
    // ctx.drawImage( image, sx, sy, sw, sh, dx, dy, dw, dh);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[playerState].loc.length;
    
    let frameX = spritWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;

    ctx.drawImage(playerImage,frameX ,frameY, spritWidth,spritHeight, 0, 0,spritWidth,spritHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();

