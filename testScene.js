

var TestScene = new Phaser.Class({
    Extends: Phaser.Scene, 
    initialize: function TestScene () {
        Phaser.Scene.call(this, {key: 'test'});
    },
    create: function () {
        console.log('test');
        class State extends FSM {
            constructor () {
                super();
                this.i = 0;
                this.name = 'abc';
                this.goto('A');
            }
            next_A () {return 'B'}
            enter_A () {console.log('enterA', this.i)}
            exit_A () {console.log('exitA')}
            next_B () {return 'C'}
            enter_B () {console.log('enterB')}
            exit_B () {console.log('exitB')}
            next_C () {
                this.i++;
                if (this.i < 3) {
                    return 'A'
                } else {
                    return 'D'
                }
            }
            enter_C () {console.log('enterC')}
            exit_C () {console.log('exitC')}
            next_D () {return 'E'}
            enter_D () {console.log('enterD')}
            exit_D () {console.log('exitD')}
        }

        var state = new State();
        this.input.on('pointerup', function () {
            console.log(state);
            state.next();
        });
        
        window.data = this.plugins.get('rexBuffData').add(this);
        data.setBaseValue('at', 50);
        console.log('at', data.get('at'));
        data.setBuff('at', 'a', '50%');
        data.setBuff('at', 'b', +3);
        data.setBuff('at', 'c', '50%');

        console.log('at', data.get('at'));
        data.setBounds('at', 50, 100);
        //data.setBuff('at', 'a', '50%');
        console.log('at', data.get('at'));

        window.db = new loki();
        window.users = db.addCollection('users');
        var Between = Phaser.Math.Between;

        for(var i = 0; i < 1000; i++) {
            users.insert({
                id: i,
                coin: Between(10, 50)
            })
        }

        var result = users
            .chain() // start chain functions
            .simplesort('id')
            .data(); // get documents from result set
        console.log(result);
    }

    

});