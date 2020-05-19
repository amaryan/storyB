/* globals __DEV__ */
/* globals __DEV__ */
import Phaser from 'phaser'

import Character from '../sprites/Character'

var mouseInput 
var firstY = 0
var firstX = 0
var position = false
var text;
var textTime
var timedEvent
var finalText 
var bear
var monkey
var crocodile
var alien
var giraffe
var moose
var alienLife = 3
var button1
var downloadText
var titleText
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
    text = this.add.text(250, 400, 'Arrastra el oso hacia delante!!', {
      font: '30px Bangers',
      fill: '#7744ff'
    })
  
   var dog = this.dog
   dog = new Character({
      scene: this,
      x: 300,
      y: 690,
      asset: 'dog'
    })
    var frog = this.frog
    frog = new Character({
      scene: this,
      x: 500,
      y: 700,
      asset: 'frog'
    })
    var gorilla = this.gorilla
    gorilla = new Character({
      scene: this,
      x: 700,
      y: 700,
      asset: 'gorilla'
    })
    
    bear = this.add.image(80,700,'bear')
    alien = this.add.image(400,200,'alien')
    crocodile = this.add.image(180,500,'crocodile')
    monkey = this.add.image(640,500,'monkey')
    button1 = this.add.image(400,500,'button')
    giraffe = this.add.image(500,220,'giraffe')
    moose = this.add.image(300,220,'moose')

    giraffe.setVisible(false)
    moose.setVisible(false)
    button1.visible = false


    bear.setInteractive({ draggable:  true})
    bear.on('drag',function(pointer, gameObject, dragX, dragY){
    //Arrastro dependiendo de la posicion del raton
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
  })
//Aqui tenemos el temporizador de 5 segundos (Tengo que poner esto en un texto para que se vea el tiempo pasar en el juego)
  timedEvent = this.time.addEvent({
    delay: 5000,
    callback: startBattle,
    callbackScope: this
  })
     //Los diferentes textos que iran apareciendo 
    textTime = this.add.text(32,32,'', {
      font: '30px Bangers',
      fill: '#7744ff'
    });
    textTime.setText('La batalla comienza en 5 segundos!')
    finalText = this.add.text(600,700,'', {
      font: '50px Bangers',
      fill: '#DAAF34'
    });



    titleText = this.add.text(200,280,'', {
      font: '80px Bangers',
      fill: '#74A016'
    });

//Añadimos las cositas para que se vean (o para exactamente lo contrario)


   this.add.existing(button1)
   this.add.existing(bear)
   this.add.existing(alien)
   this.add.existing(dog)
   this.add.existing(frog)
   this.add.existing(gorilla)
   this.add.existing(crocodile)
   this.add.existing(monkey)
   this.add.existing(moose)
   this.add.existing(giraffe)
   downloadText = this.add.text(320,477,'', {
    font: '30px Bangers',
    fill: '#DA6134'
  });
   //Hago esto para poder usarlos bien en las funciones de momento
   this.dog = dog
   this.bear = bear
   this.gorilla = gorilla
   this.frog = frog
   this.crocodile = crocodile
   this.monkey = monkey
   this.button1 = button1
   this.moose = moose
   this.giraffe = giraffe
  }
  update(){
    
  }
}

function startBattle(){
  text.setText('Haz click para empezar!')
  this.input.on('pointerdown', function (pointer) {

    console.log('down');
    textTime.setText('')
    //No se porque se sigue pudiendo arrastrar si lo he puesto en false
   // this.bear.setInteractive({ draggable:  false})
    this.dog.visible = false
    this.frog.visible = false
    this.gorilla.visible = false
    //El ataque del oso
   // console.log(alienLife)
   //Animacion del oso atacando hacia la posicion del alien
    this.tweens.add({
      targets: this.bear,
      y: 200,
      duration: 500,
      //Cada vez que realiza la accion llama al metodo que resta vida al alien
      onUpdateCallback: killAlien,
      ease: function (t){
        return Math.pow(Math.sin( t*3),3);
      },
      delay: 500,
      repeat : 3
    })
    text.setText('')
   
}, this);
 

}

function failedGame(){
  text.setText('Se te ha acabado el tiempo... Intentalo de nuevo!')
  textTime.setText('')
  //No se porque se sigue pudiendo arrastrar si lo he puesto en false
 // this.bear.setInteractive({ draggable:  false})
  this.dog.visible = false
  this.frog.visible = false
  this.gorilla.visible = false

  this.registry.destroy(); // destroy registry
  this.events.off();﻿ // disable all active events
  this.scene.restart();﻿﻿﻿﻿ // restart current scene
}
function killAlien (){
  console.log(alienLife)
  if(alienLife > 0){
    alienLife--
    console.log('La vida del alien es de: '+alienLife)
  }else if(alienLife == 0){
      finalScreen()
  }

}
function finalScreen(){
  bear.visible = false
  crocodile.visible = false
  monkey.visible = false
  alien.visible = false
  titleText.setText('SAFARY ATTACK')
  finalText.setText('VICTORY!!!')
  downloadText.setText('DOWNLOAD HERE')
 button1.visible = true
 giraffe.setVisible(true)
 moose.setVisible(true)
}

export default GameScene;