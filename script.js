/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,name){
  this.name=name;
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return `<img width="${this.size}"
       height="${this.size}"
      src="${this.image}"
      style="top: ${this.top}px; left: ${this.left}px;position:absolute;" />`;
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }
  this.moveLeft =function (){
    this.left -=20;
  }
  this.moveUp = function (){
    this.top -=20;
  }
  this.moveDown = function (){
    this.top +=20;
  }

}
var hero = new Hero('dog.png', 20, 30, 200,'dog');

function start(){
  if((hero.left < window.innerWidth - hero.size)&&(hero.top==20)){
    hero.moveRight();
    document.getElementById(`${hero.name}`).innerHTML = hero.getHeroElement();
  }else if((hero.left >= window.innerWidth - hero.size)&&(hero.top<innerHeight-hero.size)){
    hero.moveDown();
    document.getElementById(`${hero.name}`).innerHTML = hero.getHeroElement();
  }else if ((hero.left >= 0 )&&(hero.top >= innerHeight-hero.size)){
    hero.moveLeft();
    document.getElementById(`${hero.name}`).innerHTML = hero.getHeroElement();
  }else if ((hero.left <= 30 )&&(hero.top > 20)){
    hero.moveUp();
    document.getElementById(`${hero.name}`).innerHTML = hero.getHeroElement();
  }
  setTimeout(start, 100)
}


start();

