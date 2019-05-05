window.onload = function() {
    new Vue({
        el: '#app',
        data: {
            gameRunning: false,
            turns: [],
            player: {
                health: 100,
            },
            monster: {
                health: 100,
            },
        },
        methods: {
            randInt: function(min, max) {
                return Math.floor(Math.random() * (+max - +min)) + +min;
            },
            attack: function(min, max) {
                this.playerAttacks(min, max);
                if (this.checkWin()) {
                    return;
                }
                this.monsterAttacks(min, max);
            },
            playerAttacks: function(min, max) {
                let damage = this.randInt(min, max);
                this.monster.health -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: `Player hits monster for ${damage}`,
                });
            },
            monsterAttacks: function(min, max) {
                let damage = this.randInt(min, max);
                this.player.health -= damage;
                this.turns.unshift({
                    isPlayer: false,
                    text: `Monster hits player for ${damage}`,
                });
                this.checkWin();
            },
            heal: function() {
                let health = this.randInt(2, 10);
                if (this.player.health + health <= 100) {
                    this.player.health += health;
                    this.turns.unshift({
                        isPlayer: true,
                        text: `Player heals for ${health}`,
                    });
                }
                this.monsterAttacks(0, 10);
            },
            giveUp: function() {
                this.gameRunning = false;
            },
            checkWin: function() {
                if (this.monster.health <= 0) {
                    if (confirm('You win! New Game?')) {
                        this.newGame()
                    } else {
                        this.gameRunning = false;
                    }
                    return true;
                } else if (this.player.health <= 0) {
                    if (confirm('You lose! New Game?')) {
                        this.newGame()
                    } else {
                        this.gameRunning = false;
                    }
                    return true;
                }
                return false;
            },
            newGame: function() {
                this.gameRunning = true;
                this.player.health = 100;
                this.monster.health = 100;
                this.turns = [];
            },
        },
    });
};