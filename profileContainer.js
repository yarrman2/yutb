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
        var heroPic = scene.add.image(20, 0, 'heroMan');
        heroPic.setOrigin(0);
        heroPic.y = 530 - 88 - heroPic.height;
        container.add([bgRoom, heroPic]);

        var name = scene.add.text(601, 401-88, 'КОНСТАНТИН',  {fontFamily: 'Arial', fontSize: 40, color: '#fff'} )
        name.setOrigin(1)
        var age = scene.add.text(601, 446-88, '27 лет',  {fontFamily: 'Arial', fontSize: 30, color: '#fff'} )
        age.setOrigin(1)
        var profile = scene.add.text(601, 489-88, 'ПРОФИЛЬ',  {fontFamily: 'Arial', fontSize: 30, color: '#cecece'} )
        profile.setOrigin(1)

        container.add([name, age, profile]);

    }
}
