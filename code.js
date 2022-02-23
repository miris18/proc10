var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eb5b912b-a5d1-4bf5-80d6-07ac6944b51d","d488c65a-76ef-49ae-98f6-498c898f7e9a","280c4fc9-64a8-49e9-9e82-b1951a221ea7","2281369a-6385-4358-bc95-28d60f0d1bd9","6ab31589-4617-4dd1-9df8-8730b92f20b0"],"propsByKey":{"eb5b912b-a5d1-4bf5-80d6-07ac6944b51d":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B7nUqE7MHvtM.bH.nFWaMiZcfScwjIfx/category_backgrounds/farm_land.png"},"d488c65a-76ef-49ae-98f6-498c898f7e9a":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":400,"y":391},"frameCount":1,"looping":true,"frameDelay":12,"version":"aonJ0uXzpaCLAQNqiRUn2mKCmn4yygRM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":391},"rootRelativePath":"assets/d488c65a-76ef-49ae-98f6-498c898f7e9a.png"},"280c4fc9-64a8-49e9-9e82-b1951a221ea7":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":400,"y":311},"frameCount":1,"looping":true,"frameDelay":12,"version":"o_XnLdnb0YqsSkF6etruOVHsP.mCqcl4","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":311},"rootRelativePath":"assets/280c4fc9-64a8-49e9-9e82-b1951a221ea7.png"},"2281369a-6385-4358-bc95-28d60f0d1bd9":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":400,"y":491},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZNMEt7saZQOBPMFM44EbWWsI23gzL1_n","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":491},"rootRelativePath":"assets/2281369a-6385-4358-bc95-28d60f0d1bd9.png"},"6ab31589-4617-4dd1-9df8-8730b92f20b0":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png","frameSize":{"x":328,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState= "serve";
var goal =0;
var death = 0;
  
var b = createSprite(200, 200);
b.setAnimation("b");



var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,280,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,160,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"



hero.setAnimation("hero1");
hero.scale=.1;
enemy1.setAnimation("enemy1");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-8,0);
enemy2.setVelocity(8,0);
enemy3.setVelocity(-8,0);


function draw() {
  background("white");
  drawSprites();
  textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  

//fondo(b);




if (gameState=== "serve") {
  textSize(16);
  
  fill("blue");
  text("presiona la tecla de arriba", 192, 198);
  
}




if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
  gameState= "play"
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
createEdgeSprites();




enemy1.bounceOff(edges);
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
