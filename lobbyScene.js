var LobbyScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function LobbyScene() {
    Phaser.Scene.call(this, { key: "lobby" });
  },
  preload: function() {},
  create: function() {
    var g = this.add.graphics()
    g.fillStyle(0xe5e5e5, 1)
    g.fillRect(0,0, 640, 1136);
    this.add.text(400, 400, "lobby");
    this.scene.add("tab", TabScene, true, { x: 0, y: 176 });
    this.scene.add("header", HeaderScene, true, { x: 0, y: 0 });
    this.scene.add("tabControl", TabControlScene, true, { x: 0, y: 1117 });
  }
});
