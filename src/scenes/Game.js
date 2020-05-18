/* globals __DEV__ */
import Phaser from 'phaser'

import Character from '../sprites/Character'

var mouseInput 
var firstY = 0
var firstX = 0
var tim = 0
var text;
var textTime;
var timedEvent;
 class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {}
  preload () {}

  create () {
  
  //el fondo
    mouseInput = this.input
    this.add.image(400,300,'background')
    //const dragText = this.add.dynamicBitmapText(this.sys.game.config.width/2,this.sys.game.config.height-40,'Bangers','DRAG THE BEAR TO THE BOARD!!',30).setOrigin(0.5);
      /*  this.tweens.add({
            targets: dragText,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });*/
    text = this.add.text(250, 400, 'Arrastra el oso hacia delante!!', {
      font: '30px Bangers',
      fill: '#7744ff'
    })
    //el enemigo 
    this.alien = new Character({
      scene: this,
      x: 400,
      y: 200,
      asset: 'alien'
    })
    //Las cartas para arrastrar
    var bear = this.bear
    bear = new Character({
      scene: this,
      x: 80,
      y: 700,
      asset: 'bear'
    })
    firstY = bear.y
    firstX = bear.x 
    console.log(firstX,firstY)

   
    this.dog = new Character({
      scene: this,
      x: 300,
      y: 690,
      asset: 'dog'
    })

    this.frog = new Character({
      scene: this,
      x: 500,
      y: 700,
      asset: 'frog'
    })

    this.gorilla = new Character({
      scene: this,
      x: 700,
      y: 700,
      asset: 'gorilla'
    })
    
    //El tablero definido con un espacio en blanco 
    var crocodile = this.crocodile
    crocodile = new Character({
      scene: this,
      x: 180,
      y: 500,
      asset: 'crocodile'
    })
    
    var monkey = this.monkey
    monkey = new Character({
      scene: this,
      x: 640,
      y: 500,
      asset: 'monkey'
    })

    dragBear(bear)
   /* group = this.add.group({
      classType: Phaser.GameObjects.Image,
      defaultKey: null,
      defaultFrame: null,
      active: true,
      maxSize: -1,
      runChildUpdate: false,
      createCallback: null,
      removeCallback: null,
      createMultipleCallback: null
  })*/
 textTime = this.add.text(32,32,'', {
  font: '30px Bangers',
  fill: '#7744ff'
});
 timedEvent = this.time.addEvent({
   delay: 5000,
   callback: startBattle,
   callbackScope: this
 })
 textTime.setText('La batalla comienza en 5 segundos!')

  
   this.add.existing(bear)
   this.add.existing(this.alien)
   this.add.existing(this.dog)
   this.add.existing(this.frog)
   this.add.existing(this.gorilla)
   this.add.existing(crocodile)
   this.add.existing(monkey)
  
  /* group.add(bear)
   group.add(monkey)
   group.add(crocodile)*/

  }
  update(){
    //textTime.setText('Tiempo transcurrido:  '+timedEvent.getProgress().toString().substr(0,4))
  }
}


// Aqui controlamos que el oso este en sus dos posibles casillas
function dragBear(bear){
  bear.setInteractive({ draggable:  true})
  bear.on('drag',function(pointer, gameObject, dragX, dragY){
    console.log('me has intentado arrastrar')
    bear.x = mouseInput.x
    bear.y = mouseInput.y
   
   //controlo que no se salga sus dos posibles casillas
    if(bear.y<650 || bear.x > 150 ){
      bear.y = 500
      bear.x = 400
      console.log('estoy aqui')
      return

    }else{
      bear.x = 80
      bear.y = 700
    }
    
    console.log('la x: '+bear.x+' la y: '+bear.y)
  })
}

function startBattle(){
  //console.log('termino el time')
  text.setText('')
  textTime.setText('La batalla ha comenzado!!')
 

}



export default GameScene;


