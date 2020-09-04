export function updateGameScore(player1Points: number, player2Points: number) {
    // return array of game score, array[0] for player1 and array[1] for player2
    return [player1Points, player2Points];
}

export function decideGameWinner(game: number[]) {
    // receive array of game score and compare score between player1 and player2
    return game[0] > game[1] ? 'Player 1' : 'Player 2';
}

export function printScore(pointsArray: Array<number>) {
    // Check case player1 and player2 have score greater than or equal to 3 points.
    if (pointsArray[0] >= 3 && pointsArray[1] >= 3) {
        // if 2 players have equal scores, the score is “deuce”.
        if (pointsArray[0] === pointsArray[1]) {
            return 'deuce';
        } else {  
            // if a player has one more point than his opponent. 
            // the score of the game is “advantage” for the player in the lead.
            if (pointsArray[0] > pointsArray[1]) {
                return 'advantage player 1';
            } else {
                return 'advantage player 2';
            }
        }
    }
    // In case of some player has score less than 3 points.
    // map point with their description
    const result = pointsArray.map(
        (obj: number) => {
            switch (obj) {
                // 0 point is described as 'love'
                case 0:
                    return 'love';
                // 1 point described as 'fifteen'
                case 1:
                    return 'fifteen';
                // 2 point described as 'fifteen'
                case 2:
                    return 'thirty';
                // 3 point described as 'fifteen'
                case 3:
                    return 'forty';
            }
        });
    // return score's result with their description
    return result[0] + ' - ' + result[1];
}