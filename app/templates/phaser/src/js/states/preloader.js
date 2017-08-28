class Preloader extends Phaser.State {

  constructor() {
    super();

  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  loadResources() {
    //加载资源

  }

  onLoadComplete() {
    this.game.state.start('menu');
  }
}

export default Preloader;
