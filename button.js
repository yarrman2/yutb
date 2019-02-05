class TextButton extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, style, callback) {
    super(scene, x, y, text, style);

    this.setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.enterButtonHoverState())
      .on("pointerout", () => this.enterButtonRestState())
      .on("pointerdown", () => this.enterButtonActiveState())
      .on("pointerup", () => {
        this.enterButtonHoverState();
        callback();
      });
    scene.children.add(this);
  }

  enterButtonHoverState() {
    this.setStyle({ fill: "#ff0 " });
  }

  enterButtonRestState() {
    this.setStyle({ fill: "#0f0 " });
  }

  enterButtonActiveState() {
    this.setStyle({ fill: "#0ff" });
  }
}

class curSym extends Phaser.GameObjects.Container {
    constructor (scene, x, y,  val, text) {
        super(scene, x, y);
        var container = this;
        
        var circle = scene.add.circle(10, 10, 19, 0xff0000);
        circle.setOrigin(0);
        var curText = scene.add.text(19, 19, '$', {fontFamily: 'Arial', fontSize: 25, color: '#fff'});
        curText.setOrigin(0.5);
        var valText = scene.add.text(65, 19, val, {fontFamily: 'Arial', fontSize: 25, color: '#f00'});
        valText.setOrigin(0.5);
        var rightPad = 65 - 19;
        var textText = scene.add.text(valText.x + valText.width + rightPad, 19, text, {fontFamily: 'Arial', fontSize: 25, color: '#000'});
        textText.setOrigin(0.5);

        container.add([circle, curText, valText, textText]);
        return container;
    }
}    

class Shapes extends Phaser.Plugins.BasePlugin {

    constructor (pluginManager)
    {
        super('Shapes', pluginManager);

        this.syllables = [ 'fro', 'tir', 'nag', 'bli', 'mon', 'fay', 'shi', 'zag', 'blarg', 'rash', 'izen' ];
    }

    init ()
    {
        console.log('Plugin is alive');
    }

    getRounded (scene, x, y, width, height, radius, color) {
        var graphics = new Phaser.GameObjects.Graphics(scene, {x: x, y: y})
        graphics.fillStyle(color, 1);
        graphics.fillRoundedRect(x, y, width, height, radius);
        return graphics;
    }

    getButtonGraph (scene, {x, y, width, height, radius, frontColor, activeColor}, graph, callback) {
        var _bgt = this.getRounded(scene, 0, 0, width, height, radius, frontColor);
        let _d = Date.now();
        _bgt.generateTexture('plusFront' + _d, width, height)
        var _bg = scene.add.image(0, 0, 'plusFront' + _d)
        var _bgta = this.getRounded(scene, 0, 0, width, height , radius, activeColor);
        _bgta.generateTexture('plusActive' + _d, width, height)
        var _bgActive = scene.add.image(0, 0, 'plusActive' + _d)
        _bgActive.visible = false;
        var cont =  scene.add.container(x + width / 2, y + height / 2, [_bg, _bgActive,  graph ]);

        cont.setSize(_bg.width,_bg.height);
        cont.setInteractive();
        cont.on("pointerdown", () => {
            console.log(1)
            _bgActive.visible = true;
        }, scene);
        cont.on("pointerup", () => {
            console.log(2)
            _bgActive.visible = false;
            callback && callback.call(scene);
        }, scene);
        return cont;
    }

    getButton (scene, {x, y, width, height, radius, frontColor, activeColor}, label, callback) {
        var _bgt = this.getRounded(scene, 0, 0, width, height, radius, frontColor);
        let _d = Date.now();
        _bgt.generateTexture('plusFront' + _d, width, height)
        var _bg = scene.add.image(0, 0, 'plusFront' + _d)
        var _bgta = this.getRounded(scene, 0, 0, width, height , radius, activeColor);
        _bgta.generateTexture('plusActive' + _d, width, height)
        var _bgActive = scene.add.image(0, 0, 'plusActive' + _d)
        _bgActive.visible = false;
            window.l = label;
        
        //if (width <= label.width) {
        /* label.x = -width / 2 + label.width / 2; 
        label.y = -height / 2;
         */
        window.cont =  scene.add.container(x + width / 2, y + height / 2, [_bg, _bgActive,  label ]);

        cont.setSize(_bg.width,_bg.height);
        cont.setInteractive();
        cont.on("pointerdown", () => {
            _bgActive.visible = true;
        }, scene);
        cont.on("pointerup", () => {
            _bgActive.visible = false;
            callback && callback.call(scene);
        }, scene);
        return cont;
    }

    getButtonAd (scene, {x, y,  val} , callback) {
        var cont =  scene.add.container(x, y);
        var circleBg = scene.add.circle(0,0, 50);
        circleBg.setFillStyle(0xffffff);
        var circleBgActive = scene.add.circle(0,0, 50);
        circleBgActive.setFillStyle(0xe5e5e5);
        circleBgActive.visible = false;
        

        var circle = scene.add.circle(0, 0, 50);
        circle.setStrokeStyle(2, 0xe5e5e5);
        var pic = scene.add.image(0, 8, 'coffePic');
        
        //var valBg = scene.add.circle(0, 48, 18)
        var valBg = scene.add.graphics();
        valBg.lineStyle(2, 0xffffff, 1);
        var v = null
        if (val.check) {
            v = scene.add.graphics();
            v.x = -10;
            v.y = 40;
            v.lineStyle(3, 0xffffff, 1);
            v.beginPath();
            v.moveTo(0, 4);
            v.lineTo(8, 16);
            v.lineTo(20, 0);
            //v.closePath();
            v.strokePath();
            
            valBg.fillStyle(0x8c8c8c);
            valBg.fillRoundedRect(-19, 30, 36, 36, 18)
            valBg.strokeRoundedRect(-19, 30, 36, 36, 18)
        } else {
            if (val.disabled) {
                valBg.fillStyle(0x8c8c8c);
            } else {
                valBg.fillStyle(0x095fd4);
            }
            v = scene.add.text(0,50, val.val, {fontFamily: 'Arial', fintSize: 20, color: '#fff'})
            console.log(v.width);
            valBg.fillRoundedRect(v.width <= 30 ? -19 : -19 - (v.width - 21) / 2 , 30, v.width <= 30 ? 36 : v.width + 15, 36, 18)
            valBg.strokeRoundedRect(v.width <= 30 ? -19 : -19 - (v.width - 21) / 2 , 30, v.width <= 30 ? 36 : v.width + 15, 36, 18)
            v.setOrigin(0.5);
        }
        
        var r = scene.add.rectangle(0, 0, 100, 108, 0x666)
        r.visible = false;

        cont.add([circleBg, circleBgActive, circle, r, pic, valBg, v]);
        cont.setSize(100, 108);
        cont.clickAction = function () {
            circleBgActive.visible = true;
                setTimeout(function () {
                    circleBgActive.visible = false;
                    console.log('click');
                }, 200)
        }
        /* cont.setInteractive({ draggable: true });
        scene.children.add(cont);

        cont.isDowning = false;
        var timeTresh = 200;
        cont.isPointerout = true;
        console.log(cont);
        cont.on("dragstart", (pointer, localX, localY) => {
            cont.isDragg = true;
            cont.isDown = false;
            circleBgActive.visible = false;
            cont.deltaX = localX;
            console.log('start drag', cont.x, localX);
            cont.timeStart = Date.now();
            cont.isPointerout = false;
        })
        cont.on("drag", (pointer, localX, localY) => {
            //console.log('drag', localX, localY);
            if (cont.isPointerout || Date.now() - cont.timeStart > timeTresh) {
                console.log('dragging');
            }
        })

        cont.on("dragend", () => {
            console.log('end drag')
            cont.isDragg = false;
            cont.isDown = false;
            if ( Date.now() - cont.timeStart < timeTresh ) {
                circleBgActive.visible = true;
                setTimeout(function () {
                    circleBgActive.visible = false;
                    console.log('click');
                }, 200)
            }
        })

        cont.on("pointerout", () => { 
            cont.isPointerout = true;
        }); */

        /* cont.on("pointerdown", () => {
            //_bgActive.visible = true;
            if (!cont.isDragg ) {
                circleBgActive.visible = true;
                console.log(0);
            } else {
                cont.isDown = true;
            }
        }, scene);



        cont.on("pointerup", () => {
            //_bgActive.visible = false;
            if (cont.isDown) {
                cont.isDown = false;
                console.log(1);
                circleBgActive.visible = false;
                callback && callback.call(scene);
            }
        }, scene); */

        return cont;
    }
}