var HeaderScene = {
    
    create: function () {
        var player = this.game.player;
        
        var getString =  function (key, curSym, dir, size) {

            size = size || 20;
            dir = dir || 1;
            curSym = curSym || '';
            return Phaser.Utils.String.Pad(
                curSym + ' ' + Utils.String.Spaces(player.data.get(key), size, " ", dir
            ));
        }

        console.log(this);
        var g = this.add.graphics();
        g.fillStyle(0xffffff, 1);
        g.fillRect(0, 0, 640, 88);

       /*  g.fillStyle(0xff0000, 1);
        g.fillRect(0,88,  640, 88); */
        var thickness = 2;
        var color = 0xe5e5e5;
        var alpha = 1;
        g.lineStyle(thickness, color, alpha);
        g.strokeRoundedRect(313, 21, 520-313, 68-21, 3);

        this.add.image(19, 21, 'logo').setOrigin(0);
        
        
        var shapes = this.plugins.get('Shapes');
        
        var cross = this.add.graphics();
        cross.fillStyle(0xffffff, 1);
        cross.fillRect(-2, -12, 4, 24);
        cross.fillRect(-12, -2, 24, 4);

        this.val = 1111;
        var plusButton = shapes.getButtonGraph(this, {x:524, y:20, width:48, height:48, radius:3, frontColor: 0x095fd4, activeColor: 0x0b72ff}, cross, function () {
            var money = player.data.get('money');
            console.log('plus', money)
            player.data.set('money', money + 1000);
        });
        
        var dots = this.add.graphics();
        dots.fillStyle(0xc5c5c5, 1);
        dots.fillCircle(-0, -10, 4);
        dots.fillCircle(-0, 0, 4);
        dots.fillCircle(-0, 10, 4);
        
        var dotButton = shapes.getButtonGraph(this, {x:590, y:20, width:32, height:48, radius:3, frontColor: 0xffffff, activeColor: 0xf0f0f0}, dots, function () {
            console.log(this.val)

        });
/* 
        var font = { fontFamily: 'Arial', fontSize: 30, color: '#f00' }
        var text = this.add.text(-70, -18, 'Увеличить', font);

        var addSubscribersButton = shapes.getButton(this, {x:430, y:108, width: 610-430, height:156 - 108, radius:3, frontColor: 0xffffff, activeColor: 0xf0f0f0}, text, function () {
            var subscribers = player.data.get('subscribers');
            console.log('plus', subscribers)
            player.data.set('subscribers', subscribers + 1000);
        });
        console.log(game.data); */

        var moneyTextVal =  getString(MONEY, '$', 1);
        var moneyText = this.add.text(330, 28,  moneyTextVal, {fontFamily: 'Arial', fontSize: 30, color: '#333'});
        
        /* var subscribersTextVal =  getString(SUBSCRIBERS, 'Подписчики: ', 2, 30);
        var subscribersText = this.add.text(30, 115,  subscribersTextVal, {fontFamily: 'Arial', fontSize: 30, color: '#fff'});
 */
        player.on('changedata', function (go, key, value) {
            if(key == 'money') {
                moneyText.text = getString(MONEY, '$', 1);
            }else if(key == 'subscribers') {
                //subscribersText.text =  getString(SUBSCRIBERS, 'Подписчики: ', 2, 30);
            }
        })
    }
};