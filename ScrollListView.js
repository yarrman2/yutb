class ScrollListView extends Phaser.GameObjects.Container {
    constructor (scene, x, y, width, height, childs, padding) {  
        super(scene, x, y)
        scene.add.existing(this);
        var container = this;
        var w = width;
        var h = height;
        padding = padding || 0;
        var scroller = scene.add.container(0, 0);
        var scrollHeight = padding;
        childs.forEach(function (child, idx) {
            child.y = scrollHeight;
            scrollHeight += child.height + padding;
        })
        

        //scroller.setSize(640, items[items.length - 1].y + items[items.length - 1].height);
        
        var scrollBg = scene.add.rectangle(0, 0,  width, scrollHeight, 0xffffff);
        scrollBg.setOrigin(0);
        container.add(scrollBg);
        scroller.add(childs);
        
        container.add(scroller);
        
        scrollBg.setInteractive();
        
        var drag = scene.plugins.get('rexDrag').add(scrollBg, {
            enable: true,
            axis: 2,      //0|'both'|'h&v'|1|'horizontal'|'h'|2|'vertical'|'v'
        });

        console.log(scrollBg.height)
        var scrollObj = {
            t0: 95 - scrollBg.height + 800,
            top: -scrollHeight + height,//-784 - r.height, 
            bottom: 0,
            y: 0,
            dy: 0,
            time: 0,
        }

        console.log(scroller);
        scrollBg.on('dragstart', function(pointer, dragX, dragY){
            scrollObj.y  = scrollBg.y;
            console.log('ry',scrollObj.top,scrollObj.bottom, scrollBg.y);

        });
        scrollBg.on('drag', function(pointer, dragX, dragY){ 
            scroller.y = scrollBg.y;
        });
        scrollBg.on('dragend', function(pointer, dragX, dragY, dropped){
            console.log('stop');
            console.log('ry', scrollBg.y);
            if (scrollBg.y > scrollObj.bottom) {
                scrollBg.y = scrollObj.bottom
            }
            if (scrollBg.y < scrollObj.top) {
                scrollBg.y = scrollObj.top
            }
            console.log('ry', scrollBg.y);
            scroller.y = scrollBg.y;
        });

    }
}

/* 

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
        
        return this;
    }
}; */