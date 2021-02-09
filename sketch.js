
var bg,bg_image;
var mouse,mouse_1,mouse_2,mouse_3;
var cat,cat_1,cat_2,cat_3;


function preload() {
    //load the images here
    bg_image=loadImage("garden.png");
    cat_1=loadAnimation("cat1.png");
    cat_2=loadAnimation("cat2.png","cat3.png");
    cat_3=loadAnimation("cat4.png");

    mouse_1=loadAnimation("mouse1.png");
    mouse_2=loadAnimation("mouse2.png","mouse3.png");
    mouse_3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1100,600);
bg=createSprite(400,300,200,200);
bg.addImage("bg",bg_image);
bg.scale=0.9;

cat=createSprite(600,500,80,30);
cat.addAnimation("catrunning",cat_1);
cat.scale=0.12;

mouse=createSprite(180,500,50,80);
mouse.addAnimation("mouserunning",mouse_1);
mouse.scale=0.12;
}


function draw() {

    background(255);
    
   
   if(cat.x - mouse.x < mouse.width/2 + cat.width/2){
    cat.velocityX=0;
    cat.addAnimation("catrunning",cat_3);
    mouse.addAnimation("mouserunning",mouse_3);
     }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catrunning",cat_2);

mouse.addAnimation("mouserunning",mouse_2);
 }
 
}
