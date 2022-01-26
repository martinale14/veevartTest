// Here We import all the stuff we are going to use
const prompt = require('prompt'); // Command prompt input funcionallity
const Player = require('./domain/player'); // The Player class 
const Board = require('./domain/board'); // The Board class
const Die = require('./domain/die'); // The Die class
const RequestService = require('./infraestructure/request_service'); // The service writed for request data in the command prompt

prompt.start(); // Start the prompt service

let playerCount = null; // Initialize the variable thats control the player count
let boardDimens = { width: null, height: null }; // Initialize the variable that contains the information of the board

// Main asynchronous function to request user data
async function main() {

    playerCount = await RequestService.requestNumber(['Player Count']); // Requesting player count to the user
    boardDimens.width = await RequestService.requestNumber(['Board Width']); // Requesting the width of the board to the user
    boardDimens.height = await RequestService.requestNumber(['Board height']); // Requesting the width of the board to the user
    initGame(); // We start the game

}

// Init game function to start the game and control its game loop
function initGame() {
    const board = new Board(boardDimens.height, boardDimens.width); // Creation of the board itself
    const players = Array(playerCount).fill(0); // Creating and filling the array with 0s
    players.forEach((_, i) => players[i] = new Player()); // Filling the player array with players 
    console.log(players + '\n'); // Showing the players
    let places = new Array(); // Initializing the places for the end of the game
    let turn = 0; // Initializing the turns of the game

    // Declaring the loop game conrolled by comparing the lenght of the players with the lenght of the places array
    while (places.length != players.length) {

        if (!places.includes(turn)) { // Here we validate wheter the player has finish alredy so, if the player finish the game the turn is going to be skiped
            const player = players[turn]; // Choosing the player by turn

            const dieNumber = Die.roll(); // We roll the die 
            console.log(`The die rolls ${dieNumber}`); // Shows the number of the die

            const initialPosition = player.position; // Saving the initial position for calculating the steps
            player.position = initialPosition + dieNumber; // Moving our player

            if (player.position > board.size) { // Validating if the player exceed the maximun number of the board
                const newPosition = (2 * board.size) - player.position; // Calculating the ne position if the player goes back for exceed the board last number
                player.position = newPosition < 0 ? 0 : newPosition; // Changing the player position
            }

            board.obstacles.forEach(e => { // Initialize the loop that let us try all the obstacles
                if (e.from == player.position) { // Validating if the player is in an obstacle
                    console.log(e.from > e.to ? 'Oops you fall on an snake' : 'Good Luck you can go up the stair'); // Giving feedback about the obstacle
                    player.position = e.to; // Changing the player position
                    console.log(e); // Printing the obstacle
                }
            });

            const step = Math.abs(player.position - initialPosition); // Calculating the step between the initial position and the final position of the player
            console.log(`The player ${turn + 1} ${player.position > initialPosition ? 'advances' : 'goes back'} ${step} position${step > 1 ? 's' : ''}`); // Showing to the user the steps he moved and if is in positive or negative sense
            console.log(`The player ${turn + 1} is now on ${player.position}\n`); // Showing to the user his actual position

            if ((player.position == board.size) || (places.length == (players.length - 1))) { // Calculating if the player alredy wins
                places.push(turn); // Adding the player to his place when finish the game
            }

        }

        turn = turn == (players.length - 1) ? 0 : (turn + 1); // Changing the turn
    }

    places.forEach((e, i) => { // Loop that let us see all the places
        console.log(`${i + 1}: Player ${e + 1} ${i == 0 ? '(Winner)' : ''}`); // Printing the player with his place
    });
}

main();

