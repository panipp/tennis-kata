//
// Your implementations
// 
export function updateGameScore(player1Points: number, player2Points: number) {
    return [player1Points, player2Points];
}

export function decideGameWinner(game: number[]) {
    return game[0] > game[1] ? 'Player 1' : 'Player 2';
}

export function printScore([player1Points, player2Points]: [number, number]) {
    let player1 = '';
    let player2 = '';
    if (player1Points >= 3 && player2Points >= 3) {
        if (player1Points === player2Points) {
            return 'deuce';
        } else {
            if (player1Points > player2Points) {
                return 'advantage player 1';
            } else {
                return 'advantage player 2';
            }
        }
    }
    switch (player1Points) {
        case 0:
            player1 = 'love';
            break;
        case 1:
            player1 = 'fifteen';
            break;
        case 2:
            player1 = 'thirty';
            break;
        case 3:
            player1 = 'forty';
            break;
    }
    switch (player2Points) {
        case 0:
            player2 = 'love';
            break;
        case 1:
            player2 = 'fifteen';
            break;
        case 2:
            player2 = 'thirty';
            break;
        case 3:
            player2 = 'forty';
            break;
    }
    return player1 + ' - ' + player2;
}