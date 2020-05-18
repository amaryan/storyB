/* globals __DEV__ */
import Phaser from 'phaser'

import Character from '../sprites/Character'

var mouseInput 

 class GamePlayScene extends Phaser.Scene {
   constructor () {
    super({ key: 'GamePlayScene' })
  }
  init () {}
  preload () {}

  create () {
  
  //el fondo
    mouseInput = this.input
    this.add.image(400,300,'background')
    text = this.add.text(250, 400, 'Drag the bear to the board!!', {
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

    // Aqui controlamos que el oso este en sus dos posibles casillas
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
        
          
        
      }else{
        bear.x = 80
        bear.y = 700
      }
      
      console.log('la x: '+bear.x+' la y: '+bear.y+'la y del mono es : '+monkey.y)
    })
    
    
    //Si los tres espacios estan ocupados entonces empezaran a atacar al alien
    
    
   

   this.add.existing(bear)
   this.add.existing(this.alien)
   this.add.existing(this.dog)
   this.add.existing(this.frog)
   this.add.existing(this.gorilla)
   this.add.existing(crocodile)
   this.add.existing(monkey)


  }
}
export default GamePlayScene;


