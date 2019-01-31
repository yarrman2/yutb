var ScrollListView = function (scene, x, y, width, height, container, dir) {
    //this.dir = dir || 1;
    return this.create(scene, x, y, width, height, container, dir);
}
ScrollListView.prototype = {
    scrollAdd:  function (child, padding) {
        var container = this.scrollable;
        container.scrollHeight = container.scrollHeight || 0;
        padding = padding || 0;
        container.add(child);
        child.y = container.scrollHeight + padding;
        container.scrollHeight = child.y + child.height;
        container.setSize(container.width, container.scrollHeight);
    },
    create: function (scene, x, y, width, height, container, dir) {
        var w = width;
        var h = height;

        var bgContainer = scene.add.container(0, 0);
        this.scrollable = bgContainer;
        var sceneContainer = scene.add.container(x, y);
        sceneContainer.add(bgContainer);
        container.add(sceneContainer);

        this.sceneContainer = sceneContainer;
        this.bgContainer = bgContainer;
        bgContainer.setSize(640, 0);
        
        /* var g = scene.add.graphics();
        g.fillStyle(0xffccff, 1);
        g.fillRect(0, 0 , w, h);
        bgContainer.add(g); */
     
        sceneContainer.setSize(2000, 1600);

        sceneContainer.setInteractive();
        scene.input.setDraggable(sceneContainer);
        var tween = null;
        var limitPadding = 150;
        scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
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

        scene.input.on('dragend', function (pointer, gameObject) {
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
        
        return this;
    }
};