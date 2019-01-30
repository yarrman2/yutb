var TabControlScene = {
    init: function (data) {
        console.log(data)
    },
    create: function () {
        var player = this.game.player;
        var g = this.add.graphics();
        g.fillStyle(0xffffcc, 1);
        g.fillRect(0, 1136-118, 640, 118);
    }
};