const prompt = require('prompt');

const Player = require('./domain/player');
const Board = require('./domain/board');
const Die = require('./domain/die');

const RequestService = require('./infraestructure/request_service');

prompt.start();

let playerCount = null;
let boardDimens = { width: null, height: null };

async function main() {

    playerCount = await RequestService.requestNumber(['Player Count']);
    boardDimens.width = await RequestService.requestNumber(['Board Width']);
    boardDimens.height = await RequestService.requestNumber(['Board height']);
    initGame();

}

function initGame() {
    const board = new Board(boardDimens.height, boardDimens.width);
    const players = Array(playerCount).fill(0);
    players.forEach((_, i) => players[i] = new Player());
    console.log(players);
    let places = new Array();
    let turn = 0;

    while (places.length != players.length) {

        if (!places.includes(turn)) {
            const player = players[turn];

            const dieNumber = Die.roll();
            console.log(`The die rolls ${dieNumber}`);

            const initialPosition = player.position;
            player.position = initialPosition + dieNumber;

            if (player.position > board.size) {
                const newPosition = (2 * board.size) - player.position
                player.position = newPosition < 0 ? 0 : newPosition;
            }

            board.obstacles.forEach(e => {
                if (e.from == player.position) {
                    console.log(e.from > e.to ? 'Oops you fall on an snake' : 'Good Luck you can go up the stair');
                    player.position = e.to;
                    console.log(e);
                }
            });

            const step = Math.abs(player.position - initialPosition);
            console.log(`The player ${turn + 1} ${player.position > initialPosition ? 'advances' : 'goes back'} ${step} position${step > 1 ? 's' : ''}`);
            console.log(player.position);

            if ((player.position == board.size) || (places.length == (players.length - 1))) {
                places.push(turn);
            }

        }

        turn = turn == (players.length - 1) ? 0 : (turn + 1);
    }

    places.forEach((e, i) => {
        console.log(`${i}: Player ${e + 1}`);
    });
}

main();

