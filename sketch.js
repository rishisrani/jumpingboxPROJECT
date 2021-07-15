var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(0,580,360,30)
    block1.shapeColor="blue"

    block2 = createSprite(295,580,200,30)
    block2.shapeColor="orange"

    block3 = createSprite(515,580,200,30)
    block3.shapeColor="red"

    block4 = createSprite(740,580,220,30)
    block4.shapeColor="green"

    box = createSprite(random(20,750),108,40,40)
    box.shapeColor="yellow"
    box.velocityX=4;
    box.velocityY=9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites()
    box.bounceOff(edges)
    
    if(block1.isTouching(box)){
        box.shapeColor = "blue"
        music.play()
    }

    if(block2.isTouching(box)){
        box.shapeColor = "orange"
        music.play()
    }

    if(block3.isTouching(box)){
        box.shapeColor = "red"
        music.play()
    }

    if(block4.isTouching(box)){
        box.shapeColor = "green"
        music.play()
    }
drawSprites()
    //add condition to check if box touching surface and make it box
}
