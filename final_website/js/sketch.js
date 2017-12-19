// var stage;
var fontChristmas;
var imgFrog, imgTree, imgHouse1, imgSantaBig;
var imgKeyEnter, imgKeyUp, imgKeyDown, imgKeyLeft, imgKeyRight;
var imgColor, imgBrown, imgGift;
var gameMusic, moveMusic, hurtMusic, winMusic;

// var myGif;
var numbers = [ "1", "2", "3", "4", "5", "6" ];
// var number = random(numbers);

function preload() {
  imgFrog = loadImage("assets/santa.png");
  imgTree = loadImage("assets/tree1.png");
  imgHouse1 = loadImage("assets/house1.png");
  imgSantaBig = loadImage("assets/santa_1.png");

  imgKeyEnter = loadImage("assets/key_enter.png");
  imgKeyUp = loadImage("assets/key_up.png");
  imgKeyDown = loadImage("assets/key_down.png");
  imgKeyLeft = loadImage("assets/key_left.png");
  imgKeyRight = loadImage("assets/key_right.png");

  imgColor = loadImage("assets/color.png");
  imgBrown = loadImage("assets/brown.png");

  var number = random(numbers);
  imgGift = loadImage("assets/gift" + number + ".png");
  fontChristmas = loadFont("assets/Christmas.ttf");

  gameMusic = loadSound("assets/game.mp3");
  moveMusic = loadSound("assets/move.wav");
  hurtMusic = loadSound("assets/hurt.wav");
  winMusic = loadSound("assets/win.wav");
}



let frog;
const lanes = [];

const grid = 50;

const resetGame = () => {
    // hurtMusic.setVolume(0.8);
    // hurtMusic.play();
    frog = new Frog(width / 2 - grid / 2, height - grid, grid, width);
    frog.attach(null);
};

function setup() {
    gameMusic.setVolume(1.2);
    gameMusic.loop();
    createCanvas(windowWidth, 800);
    // myGif = loadGif("assets/source.gif");
    resetGame();
    // stage = 0;
    lanes.push(new Safety(0, grid));
    lanes.push(new Safety(1, grid));
    lanes.push(new Lane(2, grid, "#995c0d", "LOG", 3, 1, 350, 2));
    lanes.push(new Lane(3, grid, "#995c0d", "LOG", 1, 3, 150, 3));
    lanes.push(new Lane(4, grid, "#995c0d", "LOG", 2, 3, 350, -2.5));
    lanes.push(new Lane(5, grid, "#995c0d", "LOG", 4, 1, 150, 1));
    lanes.push(new Lane(6, grid, "#995c0d", "LOG", 3, 2, 250, -1.7));
    lanes.push(new Safety(7, grid));
    lanes.push(new Lane(8, grid, "#e54291", "CAR", 2, 3, 350, -1.4));
    lanes.push(new Lane(9, grid, "#48ba48", "CAR", 5, 1, 150, 2.4));
    lanes.push(new Lane(10, grid, "#4787ff", "CAR", 3, 2, 150, -3.6));
    lanes.push(new Lane(11, grid, "#fcaf2a", "CAR", 3, 3, 250, 2.3));
    lanes.push(new Lane(12, grid, "#e22222", "CAR", 1, 4, 550, -3.5));
    lanes.push(new Safety(13, grid));
    lanes.push(new Safety(14, grid));
    lanes.push(new Safety(15, grid));

    fill(255);
    rect(0, 0, windowWidth, 800);
    textSize(70);
    fill(230, 66, 87);
    textFont(fontChristmas);
    text("Rules", 650, 120);
    fill(0, 0, 0);
    textSize(50);
    text("Use                           to contorl                 to move.", 300, 300);
    image(imgKeyUp, 490, 220, 50, 50);
    image(imgKeyLeft, 430, 280, 50, 50);
    image(imgKeyDown, 490, 280, 50, 50);
    image(imgKeyRight, 550, 280, 50, 50);
    image(imgSantaBig, 890, 220, 110, 110);
    text("Avoid                   , but attach to                     .", 330, 430);
    image(imgColor, 500, 360, 90, 90);
    image(imgBrown, 970, 360, 90, 90);
    text("Press                  to start!", 530, 550);
    image(imgKeyEnter, 690, 490, 80, 80);

    // image(myGif, 0, 0, 50, 50);
}

function draw() {
    // if (keyCode === ENTER) {
    //     // stage ++;
    //     background(255);
    //     lanes.forEach(function (lane) {
    //         lane.run();
    //     });
    //     const laneIndex = parseInt(frog.y / grid, 10);
    //     if (lanes[laneIndex].type !== "SAFETY") {
    //         lanes[laneIndex].check(frog);
    //     }
    //     fill(255, 100);
    //     frog.update();
    //     frog.show();

    //     image(imgHouse1, 700, 0, 100, 100);

    //     if (frog.y <= 50) {
    //         fill("rgba(0,0,0, 0.8)");
    //         rect(0, 0, windowWidth, 800);
    //         textSize(88);
    //         fill(0, 102, 153);
    //         text("YOU WIN!!", 500, 350);
    //     }
        
    // }
    background(255);
    lanes.forEach(function (lane) {
        lane.run();
    });
    const laneIndex = parseInt(frog.y / grid, 10);
    if (lanes[laneIndex].type !== "SAFETY") {
        lanes[laneIndex].check(frog);
    }
    fill(255, 100);
    frog.update();
    frog.show();

    image(imgHouse1, 680, 0, 100, 100);

    // textSize(90);
    // fill(0);
    // text("Gift is received!!", 450, 250);
    // text("Oh, you've got a box of            !!!", 250, 400);
    // textSize(50);
    // text("Press 'Enter' to start again.", 500, 750);
    // textSize(90);
    // fill(230, 66, 87);
    // text("Wishing you a Merry Christmas!", 200, 550);
    // image(imgGift, 1060, 300, 150, 150);

    if (frog.y <= 50) {
        gameMusic.stop();
        // winMusic.setVolume(0.5);
        // winMusic.setLoop(false);
        // winMusic.play();
        fill("rgba(0,0,0, 0.9)");
        rect(0, 0, windowWidth, 800);

        textSize(90);
        fill(255);
        text("Gift is received!!", 450, 250);
        text("Oh, you've got a box of            !!!", 250, 400);
        textSize(50);
        text("Press 'Enter' to start again.", 500, 750);

        textSize(90);
        fill(230, 66, 87);
        text("Wishing you a Merry Christmas!", 200, 550);
        image(imgGift, 1060, 300, 150, 150);

        if (keyCode === ENTER) {
            resetGame();
            gameMusic.setVolume(1.2);
            gameMusic.loop();
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        frog.move(0, -1);
        moveMusic.setVolume(0.5);
        moveMusic.play();
    } else if (keyCode === DOWN_ARROW) {
        frog.move(0, 1);
        moveMusic.setVolume(0.5);
        moveMusic.play();
    } else if (keyCode === RIGHT_ARROW) {
        frog.move(1, 0);
        moveMusic.setVolume(0.5);
        moveMusic.play();
    } else if (keyCode === LEFT_ARROW) {
        frog.move(-1, 0);
        moveMusic.setVolume(0.5);
        moveMusic.play();
    }
}