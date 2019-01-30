var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function BootScene () {
        Phaser.Scene.call(this, {key: 'boot'})
    },
    preload: function ()  {
        this.load.path = 'img/';
        this.load.image('cameraIcon', 'cameraIcon.png');
        this.load.image('learnIconRed', 'learnIconRed.png');
        this.load.image('slotBody', 'slotBody.png');
        this.load.image('cameraIconRed', 'cameraIconRed.png');
        this.load.image('logo', 'logo.png');
        this.load.image('star', 'star.png');
        this.load.image('channelIconStream', 'channelIconStream.png');
        this.load.image('mainIcon', 'mainIcon.png');
        this.load.image('studioIcon', 'studioIcon.png');
        this.load.image('coffePic', 'coffePic.png');
        this.load.image('mainIconRed', 'mainIconRed.png');
        this.load.image('studioIconRed', 'studioIconRed.png');
        this.load.image('eggHead', 'eggHead.png');
        this.load.image('plusMoney', 'plusMoney.png');
        //this.load.image('plusFront', 'plusFront.png');
        //this.load.image('plusActive', 'plusActive.png');
        this.load.image('themeIcon', 'themeIcon.png');
        this.load.image('flowerTop', 'flowerTop.png');
        this.load.image('propIcon', 'propIcon.png');
        this.load.image('themeIconRed', 'themeIconRed.png');
        this.load.image('helmlok', 'helmlok.png');
        this.load.image('propIconRed', 'propIconRed.png');
        this.load.image('vDots', 'vDots.png');
        this.load.image('heroMan', 'heroMan.png');
        this.load.image('roomStart', 'roomStart.png');
        this.load.image('youtuber_lobby_03', 'youtuber_lobby_03.png');
        this.load.image('learnIcon', 'learnIcon.png');
        this.load.image('skully', 'skully.png');
        this.load.image('bigpic', 'bigpic.jpg');
        
        //game.setDataEnabled();
        //game.setData({ money: 1000000, subscribers: 1000});
    },
    create: function ()  {
        console.log('init')
        console.log(this.scene);

        this.game.player = new Phaser.GameObjects.Container(this, 0,0);
        this.game.player.setDataEnabled();
        this.game.player.setData({money: 100000, subscribers: 1000});
        this.scene.start('lobby');
        this.game.player.on('changedata', function (go, key, val) {
            console.log('from boot', key, val);
        })

    }
});