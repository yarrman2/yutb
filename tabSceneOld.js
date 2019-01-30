var TabScene = {
    create: function () {
        var player = this.game.player;
        var w = 640;
        var h = 842;
        var t = 174;
        this.bgContainer = this.add.container(0, 0);
        this.sceneContainer = this.add.container(0, t);
        this.sceneContainer.add(this.bgContainer);
        window.sceneContainer = this.sceneContainer;
        window.bgContainer = this.bgContainer;
        this.bgContainer.setSize(640, 0);

        var scrollAdd =  function (container, child, padding) {
            container.scrollHeight = container.scrollHeight || 0;
            padding = padding || 0;
            container.add(child);
            child.y = container.scrollHeight + padding;
            container.scrollHeight = child.y + child.height;
            container.setSize(container.width, container.scrollHeight);
        }
        
        var g = this.add.graphics();
        g.fillStyle(0xffccff, 1);
        g.fillRect(0, 0 , w, h);
        this.bgContainer.add(g);
        
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
        scrollAdd(this.bgContainer, pic1);
        scrollAdd(this.bgContainer, pic2, 150);
        scrollAdd(this.bgContainer, pic3, 150);
        scrollAdd(this.bgContainer, pic4, 150);
        scrollAdd(this.bgContainer, pic5, 150);
        scrollAdd(this.bgContainer, pic6, 150);
        scrollAdd(this.bgContainer, pic7, 150);
        scrollAdd(this.bgContainer, pic8, 150);
        sceneContainer.setSize(2000, 1600);


        sceneContainer.setInteractive();
        this.input.setDraggable(sceneContainer);
        var tween = null;
        var limitPadding = 150;
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            console.log('drag')
            if (!bgContainer.startDrag) {
                bgContainer.limitTop = -(bgContainer.height - h)
                bgContainer.limitEnd = 0;
                bgContainer.deltaY = bgContainer.y - dragY;
                bgContainer.startY = bgContainer.y;
                bgContainer.startDrag = true;
                bgContainer.startTime = Date.now();
                if (tween) {
                    tween.stop()
                }
            }
            var nextY = dragY + bgContainer.deltaY;
            if (nextY > bgContainer.limitEnd + limitPadding) {
                nextY = bgContainer.limitEnd + limitPadding;
            }
            if (nextY < bgContainer.limitTop - limitPadding) {
                nextY = bgContainer.limitTop - limitPadding;
            }
            bgContainer.y = nextY;

        });
        var scene = this;

        
        var between = (a, b, v)  => {
            if (v < a) return a;
            if (v > b) return b;
            return v;
        }

        this.input.on('dragend', function (pointer, gameObject) {
            bgContainer.startDrag = false;
            time = Date.now() - bgContainer.startTime;
            delta = bgContainer.startY - bgContainer.y;
            speed = delta / time;
            console.log('enddrag', time/1000, delta, speed);
            var durTime = time * 3//between(100, 2000, speed * 10);
            if (durTime < 500) {
                durTime = 500;
            }
            if (durTime > 2000) {
                durTime = 2000;
            }
            console.log('durTime', durTime);
            var nextY = bgContainer.y - speed * durTime;
            var easeFunc = 'Sine.easeOut'
            
            var canTween = true;
            if (Math.abs(speed) >= 0.8 && Math.abs(delta) >= 100) {
                if (nextY > bgContainer.limitEnd) {
                    nextY = bgContainer.limitEnd;
                    easeFunc = 'Back.easeOut';
                    durTime = 500;
                }
                if (nextY < bgContainer.limitTop) {
                    nextY = bgContainer.limitTop;
                    easeFunc = 'Back.easeOut';
                    durTime = 500;
                }
            } else {
                if (bgContainer.y > bgContainer.limitEnd && nextY > bgContainer.limitEnd) {
                    nextY = bgContainer.limitEnd;
                    easeFunc = 'Back.easeOut';
                    durTime = 500;
                } else if ( bgContainer.y < bgContainer.limitTop && nextY < bgContainer.limitTop) {
                    nextY = bgContainer.limitTop;
                    easeFunc = 'Back.easeOut';
                    durTime = 500;
                } else {
                    canTween = false;
                }
            }

            if (canTween) {
                console.log('endSpeed', speed, easeFunc)
                tween = scene.tweens.add({
                    targets: bgContainer,
                    y: nextY,
                    duration: durTime,
                    ease:  easeFunc,
                });
            }
        });
       

        
        //var container = this.add.container(0, 0)
    },
    update() {

        if (this.sceneContainer.startDrag) {

        }
    }
};