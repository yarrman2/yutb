var MenuScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function BootScene () {
        Phaser.Scene.call(this, {key: 'menu'});
    },
    preload: function ()  {
    
    },

    create: function ()  {
        console.log('menu')
        var font = { font: '24px Arial' };
        var text = this.add.text(200, 100, 'start', font);
        text.setInteractive(new Phaser.Geom.Rectangle(0, 0, text.width, text.height), Phaser.Geom.Rectangle.Contains);
        
        this.input.on('pointerdown', function (pointer, go) {
            console.log('down');
            this.scene.start('lobby');
        }, this);
    }
})

