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
}