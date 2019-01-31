var TabScene = {
    create: function () {
        var player = this.game.player;
        var interface = this.game.interface;
        var w = 640;
        var h = 930;
        var t = 89;
        this.sceneContainer = this.add.container(0, t);

        var g = this.add.graphics();
        g.fillStyle(0xebebeb, 1);
        g.fillRect(0, 0 , w, h);
        this.sceneContainer.add(g);

        this.tabContainer = this.add.container(0,0);
        this.tabContainer.setSize(w * 6, h);
        this.sceneContainer.add(this.tabContainer);
        
        var tabsIdx = [2,3,4,5];
        var scene = this;
        var tabs = [
            new ProfileContainer(scene, 0, 0),
            new ThemeContainer(scene, w, 0)
        ];
        tabsIdx.forEach(function (t) {
            var s =  scene.add.container(t * w, 0);
            s.setSize(w, h);
            s.add(scene.add.text(w/2, h/2, t+1, { fontFamily: 'Arial', fontSize: 30, color: '#f00' }));
            tabs.push(s);
        });
        
        window.tabs = tabs;
        this.tabContainer.add(tabs);
        interface.on('changedata', function (go, key, value, lastValue) {
            if (key == 'mainTab') {
                if (value < lastValue ) {
                    tabs[value].x = -w;    
                    scene.tweens.add({
                        targets: tabs[value],
                        x: 0,
                        duration: 300,
                        ease:  'Sine.easeInOut',
                    })
                    scene.tweens.add({
                        targets: tabs[lastValue],
                        x: w,
                        duration: 300,
                        ease:  'Sine.easeInOut',
                    })
                } else if (value > lastValue) {
                    //tabs[lastValue].x = -w;
                    tabs[value].x = w;    
                    scene.tweens.add({
                        targets: tabs[value],
                        x: 0,
                        duration: 300,
                        ease:  'Sine.easeInOut',
                    })
                    scene.tweens.add({
                        targets: tabs[lastValue],
                        x: -w,
                        duration: 300,
                        ease:  'Sine.easeInOut',
                    })
                }
            }
        });


        /* 
        var pic1 = this.add.image(20,0,'eggHead');
        pic1.setOrigin(0);
        var pic2 = this.add.image(20,0,'flowerTop');
        pic2.setOrigin(0);
        var pic3 = this.add.image(20,0,'helmlok');
        pic3.setOrigin(0);
        var pic4 = this.add.image(20,0,'eggHead');
        pic4.setOrigin(0);
        var pic5 = this.add.image(20,0,'eggHead');
        pic5.setOrigin(0);
        var pic6 = this.add.image(20,0,'flowerTop');
        pic6.setOrigin(0);
        var pic7 = this.add.image(20,0,'helmlok');
        pic7.setOrigin(0);
        var pic8 = this.add.image(20,0,'eggHead');
        pic8.setOrigin(0);
        
        var scrollArea = new ScrollListView(this, 0, 176, w, h);
        scrollArea.scrollAdd(pic1);
        scrollArea.scrollAdd(pic2, 150);
        scrollArea.scrollAdd(pic3, 150);
        scrollArea.scrollAdd(pic4, 150);
        scrollArea.scrollAdd(pic5, 150);
        scrollArea.scrollAdd(pic6, 150);
        scrollArea.scrollAdd(pic7, 150);
        scrollArea.scrollAdd(pic8, 150); */

    }
};