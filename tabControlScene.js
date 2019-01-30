var TabControlScene = {
    init: function (data) {
        console.log(data)
    },
    create: function () {
        var player = this.game.player;
        var interface = this.game.interface;
        var w = WIDTH;        
        var h = 118;
        var sceneContainer = this.add.container(0, 1018)
        var g = this.add.graphics();
        g.fillStyle(0xffffcc, 1);
        g.fillRect(0, 0, 640, 118);

        var font = { fontFamily: 'Arial', fontSize: 30, color: '#f00' }
        //var text = this.add.text(0, 0, 1, font);
        var shapes = this.plugins.get('Shapes');
        var titles = [0,1,2,3,4,5,6];
        var buts = [];
        var scene = this;
        buts = titles.map(function (t, i) {
            return shapes.getButton(scene, {x:((w * i)/6), y:0, width: w/6, height:118, radius:0, frontColor: 0xffffff, activeColor: 0xf0f0f0}, scene.add.text(0, 0, i + 1, font), function () {
                    interface.data.set('mainTab', i);
                    console.log(i);
                })
        });
        

        sceneContainer.add(g);
        sceneContainer.add(buts);
    }
};