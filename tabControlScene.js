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

        //var text = this.add.text(0, 0, 1, font);
        var shapes = this.plugins.get('Shapes');
        var titles = [
            {title: 'Главная', icon: 'mainIcon', activeIcon: 'mainIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
            {title: 'Тема', icon: 'themeIcon', activeIcon: 'themeIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
            {title: 'Студия',  icon: 'studioIcon', activeIcon: 'studioIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
            {title: 'Камера',  icon: 'cameraIcon', activeIcon: 'cameraIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
            {title: 'Обучение', icon: 'learnIcon', activeIcon: 'learnIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
            {title: 'Реквизит',  icon: 'propIcon', activeIcon: 'propIconRed', tx: 0, ty: 40, x: 0, y: 0, color: '#666', activeColor: '#f00' },
        ];
        
        var buts = [];
        var butContainers = [];
        var scene = this;
        
        var font = { fontFamily: 'Arial', fontSize: 20, color: '#666' };
        buts = titles.map(function (t, i) {
            var title = scene.add.text(t.tx, t.ty, t.title, font);
            title.setOrigin(0.5);
            
            var icon = scene.add.image(t.x, t.y,t.icon);
            var iconActive = scene.add.image(t.x, t.y,t.activeIcon);
            iconActive.visible = false;
            if (i == 0) {
                title.setColor('#f00');
                iconActive.visible = true;
                icon.visible = false;
            }
            var butCont = scene.add.container(0, 0, [icon, iconActive, title]); 
            butCont.add(title);
            butContainers.push(butCont);
            return shapes.getButtonGraph(scene, {x:((w * i)/6), y:0, width: w/6, height:118, radius:0, frontColor: 0xffffff, activeColor: 0xf0f0f0}, butCont, function () {
                var lastTab = interface.data.get('mainTab');
                butContainers[lastTab].list[0].visible = true;
                butContainers[lastTab].list[1].visible = false;
                butContainers[lastTab].list[2].setColor('#666');

                interface.data.set('mainTab', i);
                butContainers[i].list[0].visible = false;
                butContainers[i].list[1].visible = true;
                //butContainers[i].list[2].style.color = '#f00';
                butContainers[i].list[2].setColor('#f00')

            })
        });
        
        //interface.data.set('mainTab', 1);

        sceneContainer.add(g);
        sceneContainer.add(buts);
    }
};