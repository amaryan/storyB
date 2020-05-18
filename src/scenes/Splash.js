import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('background','assets/Backgrounds/backgroundColorFall.png')
    this.load.image('alien', 'assets/images/shipBlue_manned.png')
    this.load.image('bear','assets/images/animal/bear.png')
    this.load.image('crocodile','assets/images/animal/crocodile.png')
    this.load.image('dog','assets/images/animal/dog.png')
    this.load.image('frog','assets/images/animal/frog.png')
    this.load.image('gorilla','assets/images/animal/gorilla.png')
    this.load.image('monkey','assets/images/animal/monkey.png')
    this.load.image('mushroom','assets/images/mushroom2.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
