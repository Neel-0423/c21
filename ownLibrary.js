function bounceOff(object1,object12){

    if (object1.x - object12.x < object12.width/2 + object1.width/2
      && object12.x - object1.x < object12.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object12.velocityX = object12.velocityX * (-1);
  }
  if (object1.y - object12.y < object12.height/2 + object1.height/2
    && object12.y - object1.y < object12.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object12.velocityY = object12.velocityY * (-1);
  }
  }
  function isTouching(object1,object12){
    if (object1.x - object12.x < object12.width/2 + object1.width/2
        && object12.x - object1.x < object12.width/2 + object1.width/2
        && object1.y - object12.y < object12.height/2 + object1.height/2
        && object12.y - object1.y < object12.height/2 + object1.height/2) {
      return true;
    }
    else {
      return false;
    }
}