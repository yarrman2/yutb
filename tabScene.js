var TabScene = {
    create: function () {
        var player = this.game.player;
        var w = 640;
        var h = 842;
        var t = 174;
        this.sceneContainer = this.add.container(0, t);

        var g = this.add.graphics();
        g.fillStyle(0xffccff, 1);
        g.fillRect(0, 0 , w, h);
        this.sceneContainer.add(g);
        
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
        scrollArea.scrollAdd(pic8, 150);

    }
};