console.log(window.outerWidth, window.outerHeight);
window.app = document.getElementById('app');
app.setAttribute('height', window.outerWidth);
var ratio = window.outerHeight / window.outerWidth;
var ratioOrig = 1136/640;


var config  = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 640,
    height: 1136, 
    plugins: {
        global: [
            { key: 'Shapes', plugin: Shapes, start: true },
            { key: 'rexScroller', plugin: rexscrollerplugin, start: true},
            { key: 'rexDrag', plugin: rexdragplugin, start: true},
            { key: 'rexBuffData', plugin: rexbuffdataplugin, start: true},
        ]
    },
    scene: [       
        BootScene,
        TestScene,
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