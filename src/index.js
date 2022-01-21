const prompt = require('prompt');

const Player = require('./domain/player');
const Board = require('./domain/board');
const Die = require('./domain/die');

prompt.start();

function main() {

    prompt.get(['Player Count'], (err, res) => {
        if (err) return onErr(err);

        if (!Number.isInteger(parseInt(res['Player Count'])) || parseInt(res['Player Count']) < 1) {
            console.log('Please only enter positive integer numbers except 0');
            main();
        } else {

            const board = new Board(10, 10);
            const playerCount = parseInt(res['Player Count']);
            const players = Array(playerCount).fill(new Player());
            console.log(players);
            let winner = null;
            let turn = 0;

            while (winner == null) {

                let player = players[turn];

                let dieNumber = Die.roll();
                console.log(`The die rolls ${dieNumber}`);

                let initialPosition = player.position;
                player.position = initialPosition + dieNumber;

                if (player.position > board.size) {
                    let newPosition = (2 * board.size) - player.position
                    player.position = newPosition < 0 ? 0 : newPosition;
                }

                console.log(`The player ${turn + 1} ${player.position > initialPosition ? 'advances' : 'goes back'} ${Math.abs(player.position - initialPosition)} positions`);
                console.log(player.position);

                if (player.position == board.size) {
                    winner = player;
                    console.log(`The player ${turn + 1} won`);
                }

                turn = turn == (players.length - 1) ? 0 : (turn + 1);
            }

        }

    });

}

main();


