var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10;
var obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20;
var obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30;
var obs31,obs32,obs33,obs34,obs35,obs36,obs37,obs38,obs39,obs40;
function preload() {


}

function setup() {
  
createCanvas(1200,600);

  obs1 = createSprite(600,1,1200,20);
  obs1.shapeColor="White";

  obs2 = createSprite(1200,1,20,1200);
  obs2.shapeColor="white";
  
  obs3 = createSprite(1,1,20,1200);
  obs3.shapeColor="white";
  
  obs4 = createSprite(600,595,1200,20);
  obs4.shapeColor="white";
  
  obs5 = createSprite(120,56,100,20);
  obs5.shapeColor="white";
  
  obs6 = createSprite(80,120,20,120);
  obs6.shapeColor="white";
  
  obs7 = createSprite(119,188,100,20);
  obs7.shapeColor="white";
  
  obs8 = createSprite(70,260,200,20);
  obs8.shapeColor="white";
  
  obs9 = createSprite(160,300,20,100);
  obs9.shapeColor="white";
  
  obs10 = createSprite(70,350,200,20);
  obs10.shapeColor="white";

  obs11 = createSprite(82,520,20,150);
  obs11.shapeColor="white";

  obs12 = createSprite(300,57,100,20);
  obs12.shapeColor="white";

  obs13 = createSprite(360,117,20,140);
  obs13.shapeColor="white";

  obs14 = createSprite(235,305,20,100);
  obs14.shapeColor="white";

  obs15 = createSprite(269,188,200,20);
  obs15.shapeColor="white";

  obs16 = createSprite(200,433,100,20);
  obs16.shapeColor="white";

  obs17 = createSprite(177,544,20,100);
  obs17.shapeColor="white";

  obs18 = createSprite(456,109,20,200);
  obs18.shapeColor="white";

  obs19 = createSprite(560,100,200,20);
  obs19.shapeColor="white";

  obs20 = createSprite(352,290,100,20);
  obs20.shapeColor="white";

  obs21 = createSprite(340,410,20,100);
  obs21.shapeColor="white";

  obs22 = createSprite(286,529,100,20);
  obs22.shapeColor="white";

  obs23 = createSprite(429,422,20,150);
  obs23.shapeColor="white";

  obs24 = createSprite(520,357,180,20);
  obs24.shapeColor="white";

  obs25 = createSprite(617,417,20,140);
  obs25.shapeColor="white";

  obs26 = createSprite(577,485,100,20);
  obs26.shapeColor="white";

  obs27 = createSprite(548,230,20,120);
  obs27.shapeColor="white";

  obs28 = createSprite(697,510,20,150);
  obs28.shapeColor="white";

  obs29 = createSprite(700,236,180,20);
  obs29.shapeColor="white";

  obs30 = createSprite(750,228,20,200);
  obs30.shapeColor="white";

  obs31 = createSprite(820,70,200,20);
  obs31.shapeColor="white";

  obs32 = createSprite(847,395,200,20);
  obs32.shapeColor="white";

  obs33 = createSprite(870,241,20,150);
  obs33.shapeColor="white";

}

function draw() {
  background("black");
text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}