console.log(window.innerWidth, window.innerHeight);
var app = document.getElementById('app');
app.setAttribute('width', window.outerWidth);
app.setAttribute('height', window.outerHeight);

var config  = {
    type: Phaser.AUTO,
    type: Phaser.AUTO,
    parent: 'app',
    width: 640,
    height: 1136,
    plugins: {
        global: [
            { key: 'Shapes', plugin: Shapes, start: true }
        ]
    },
    scene: [       
        BootScene,
        MenuScene,
        LobbyScene,
    ],
    extend: {
        rounded1: function(x, y, width, height, radius, color) {
            var graphics = new Phaser.GameObjects.Graphics(this, {x: x, y: y})
            graphics.fillStyle(color, 1);
            graphics.fillRoundedRect(x, y, width, height, radius);
            return graphics;
        }
          
    }
}

var game = new Phaser.Game(config);
game.scene.start('boot');