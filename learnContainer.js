class LearnItem extends Phaser.GameObjects.Container {
    constructor(scene, x, y, text, val, valText) {
        super(scene, x, y);
        var container = this;
        container.setSize(WIDTH, 248);

        var rect = scene.add.rectangle(40, 20, 208, 248, 0xe5e5e5);
        rect.setOrigin(0);

        var title = scene.add.text(283, 20, text, {fontFamily: 'Arial', fontSize: 30, color: '#000'});

        var goldContainer = new curSym(scene, 283, 100, val, valText);
        
        var shapes = scene.plugins.get('Shapes');
        var t = scene.add.text(0, 0, 'Принять', {fontFamily:'Arial', fontSize: 25, color: '#fff'});
        t.setOrigin(0.5)
        var succBut = shapes.getButton(scene, {x: 283, y: 150, width:300, height:62, radius:6, frontColor: 0x095fd4, activeColor: 0xa0c2ee}, t, function () {})
        
        container.add([rect, title, goldContainer, succBut]);
        return container;
    }
}

class LearnContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        var container = this;
        var w = WIDTH;
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

        var bg1 = scene.add.rectangle(0, 0, w, 90, 0xffffff);
        bg1.setOrigin(0);
        var leftArrow = scene.add.image(28, 45, 'leftArrow');
        leftArrow.setOrigin(0, 0.5);
        var themeTitle = scene.add.text(w/2, 45, 'Обучение', {fontFamily: 'Arial', fontSize: 40, color: '#000'});
        themeTitle.setOrigin(0.5, 0.5);
        
        var bg2 = scene.add.rectangle(0, 92, w, 834, 0xffffff);
        bg2.setOrigin(0);

        container.add([bg2]);
        
        var item1 = new LearnItem(scene, 0, 0, 'Курс 1', 60, 'в месяц', function () {
            console.log('item');
        });

        var item2 = new LearnItem(scene, 0, 0, 'Курс 2', 80, 'в месяц', function () {
            console.log('item');
        });

        var item3 = new LearnItem(scene, 0, 0, 'Курс 3', 160, 'в месяц', function () {
            console.log('item');
        });

        var item4 = new LearnItem(scene, 0, 0, 'Курс 4', 280, 'в месяц', function () {
            console.log('item');
        });

        var item5 = new LearnItem(scene, 0, 0, 'Курс 5', 560, 'в месяц', function () {
            console.log('item');
        });

        /* var scrollArea = new ScrollListView(scene, 0, 95, w,  832);
        scrollArea.scrollAdd(item1, 20);
        scrollArea.scrollAdd(item2, 20);
        scrollArea.scrollAdd(item3, 20);
        scrollArea.scrollAdd(item4, 20);
        scrollArea.scrollAdd(item5, 20);
         */
        
        var scrollArea = new ScrollListView(scene, 0, 95, w, 832, [item1, item2, item3, item4, item5], 20);
        container.add([scrollArea, bg1, leftArrow, themeTitle]);
        return container;
    }
    
    update () {
       
    }
}
