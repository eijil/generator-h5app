class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {

    //this.game.scale.pageAlignHorizontally = true;

    //setup device scaling
    if (!this.game.device.desktop) {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
    }
    this.game.state.start('preloader');
  }


}

export default Boot;
