class ProfileContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        var container = this;
        var shapes = scene.plugins.get('Shapes');
        var player = scene.game.player;
        var getString =  function (key, curSym, dir, size) {
            size = size || 20;
            dir = dir || 1;
            curSym = curSym || '';
            return Phaser.Utils.String.Pad(
                curSym + ' ' + Utils.String.Spaces(player.data.get(key), size, " ", dir
            ));
        }
        scene.children.add(container);
        var g = scene.add.graphics();
        g.fillStyle(0xff0000, 1);
        g.fillRect(0, 0,  640, 88);
        container.add(g);
        
        var font = { fontFamily: 'Arial', fontSize: 30, color: '#f00' }
        var text = scene.add.text(-70, -18, 'Увеличить', font);

        var addSubscribersButton = shapes.getButton(scene, {x:430, y:20, width: 610-430, height:156 - 108, radius:3, frontColor: 0xffffff, activeColor: 0xf0f0f0}, text, function () {
            var subscribers = player.data.get('subscribers');
            console.log('plus', subscribers)
            player.data.set('subscribers', subscribers + 1000);
        });
        container.add(addSubscribersButton);

        var subscribersTextVal =  getString(SUBSCRIBERS, 'Подписчики: ', 2, 30);
        var subscribersText = scene.add.text(30, 28,  subscribersTextVal, {fontFamily: 'Arial', fontSize: 30, color: '#fff'});
        container.add(subscribersText);

        player.on('changedata', function (go, key, val, lastVal) {
            if (key == SUBSCRIBERS) {
                subscribersText.text = getString(SUBSCRIBERS, 'Подписчики: ', 2, 30);
            }
        })

        //start room
        var bgRoom = scene.add.image(0, 89, 'roomStart');
        bgRoom.setOrigin(0);
        window.outerWidth, window.outerHeight
        var heroPic = scene.add.image(20, 0, 'heroMan');
        heroPic.setOrigin(0);
        heroPic.y = 530 - 88 - heroPic.height;
        container.add([bgRoom, heroPic]);
        
        /* var name = scene.add.text(100, 300-88, 
        `${window.outerWidth} \n ${window.outerHeight} \n ${window.innerWidth} \n ${window.innerHeight}`, 
        {fontFamily: 'Arial', fontSize: 30, color: '#ff0'} )
        name.setOrigin(0)
 */
        var name = scene.add.text(601, 401-88, 'КОНСТАНТИН',  {fontFamily: 'Arial', fontSize: 40, color: '#fff'} )
        name.setOrigin(1)
        var age = scene.add.text(601, 446-88, '27 лет',  {fontFamily: 'Arial', fontSize: 30, color: '#fff'} )
        age.setOrigin(1)
        var profile = scene.add.text(601, 489-88, 'ПРОФИЛЬ',  {fontFamily: 'Arial', fontSize: 30, color: '#cecece'} )
        profile.setOrigin(1)

        container.add([name, age, profile]);

        var channelName = scene.add.container(0, 531-90);
        var g = scene.add.rectangle(0, 0, 640, 100, '0xffffff');
        g.setOrigin(0);
        var pic = scene.add.image(60, 50, 'channelIconStream');

        var typeChannelText = scene.add.text(110, 20, 'Стриминг', {fontFamily: 'Arial', fontSize: 30, color: '#666'})
        var nameChannelText = scene.add.text(110, 55, 'Канал Имя', {fontFamily: 'Arial', fontSize: 25, color: '#666'})
        channelName.add([g, pic, typeChannelText, nameChannelText]);


        // Ad 
        var adContainer = scene.add.container(0, 633 - 90);
        var g1 = scene.add.rectangle(0, 0, 640, 190, '0xffffff');
        g1.setOrigin(0);
        var adText = scene.add.text(40, 10, 'Реклама на канале', {fontFamily: 'Arial', fontSize: 30, color: '#666'})
        adContainer.add([g1, adText]);

        var shapes = scene.plugins.get('Shapes');
        var adsTitle = [
            {check: true, disabled: false, val: 10},
            {check: false, disabled: false, val: 100},
            {check: false, disabled: false, val: 2000},
            {check: false, disabled: true, val: 30000},
            {check: false, disabled: true, val: 400000},
            {check: false, disabled: true, val: 800000},
            {check: false, disabled: true, val: 1400000},
            {check: false, disabled: true, val: 34000000},
        ]


        var adsButtons = [];
        adsTitle.forEach(function (adt, i) {
            var sh = shapes.getButtonAd(scene, {x: 120 * i + 70, y:100, val: adt}, function () {
                console.log(i);
            });
            sh.type = 'adButton'
            adsButtons.push(sh);
            sh.setInteractive({draggable: true});
            scene.input.setDraggable(sh);
        });
        var adBg;
        var scroller;
        var timeTres = 200;
        var startDrag = false;
        var lastGO = null;
        var deltaX = 0;

        var limitFn = function () {
            if (adBg.x < -371) {
                adBg.x = -371
            }
            if (adBg.x > 0) {
                adBg.x = 0
            }
            scroller.x = adBg.x;
        }

        scene.input.on('dragstart', function(pointer, gameObject){ 
            if (gameObject.type == 'adButton') {
                deltaX = scroller.x - pointer.x;
                gameObject.time = Date.now();
                gameObject.pointerout = false;
                lastGO = gameObject;
                //startDrag = true;
                console.log('scene start', gameObject)
            }
        });

        scene.input.on('drag', function(pointer, gameObject, dragX, dragY){
            console.log('scene drag')
            if (gameObject == lastGO) {
                if (Date.now() - gameObject.time > timeTres) {
                    startDrag = true;
                }
            } else {
                startDrag = true;
            }
            if (startDrag) {
                adBg.x = deltaX + pointer.x;
                scroller.x = adBg.x;
            }
        });

        scene.input.on('dragend', function(pointer, gameObject, dropped){
            if (gameObject == lastGO) {
                if (Date.now() - gameObject.time < timeTres) {
                    lastGO.clickAction();
                }
            }
            lastGO = false;
            limitFn();
        });

        var adW = adsButtons[adsButtons.length - 1].x + adsButtons[adsButtons.length - 1].width;
        adBg = scene.add.rectangle(0, adsButtons[0].y + 4, adW, 118, 0xffffff);
        
        window.adBg = adBg;
        adBg.setOrigin(0, 0.5);
        adBg.setInteractive();

        scroller = scene.add.container(adContainer.x, 0);
        var drag = scene.plugins.get('rexDrag').add(adBg, {
            enable: true,
            axis: 1,      //0|'both'|'h&v'|1|'horizontal'|'h'|2|'vertical'|'v'
        });
        var dragLast;
        adBg.on('dragstart', function(pointer, dragX, dragY){ 
            var dx = dragLast - dragX;
            scroller.x = adBg.x;
        });
        adBg.on('drag', function(pointer, dragX, dragY){ 
            var dx = dragLast - dragX;
            console.log(adBg.x);
            scroller.x = adBg.x;
        });
        adBg.on('dragend', function(pointer, dragX, dragY){ 
            limitFn();
        });

        window.adContainer = adContainer;

        scroller.add(adsButtons);
        window.scr = scroller;
        adContainer.add(adBg);
        adContainer.add(scroller);
        //adBg.y += adContainer.y;
        

        var newsContainer = scene.add.container(0, 825 - 89);
        var g2 = scene.add.rectangle(0, 0, 640, 190, '0xffffff');
        g2.setOrigin(0);
        
        newsContainer.add([g2]);

        container.add([channelName, adContainer, newsContainer])
    }
}
