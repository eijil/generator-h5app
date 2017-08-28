class Game extends Phaser.State {

    constructor() {
        super();

    }

    create() {

        this.gameText = this.add.text(this.game.world.centerX, this.game.world.centerY, "startGame", {
            font: '42px Arial',
            fill: '#ffffff',
            align: 'center'
        });
    }

    update() {

    }
}

export default Game;
