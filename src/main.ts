//
// Your implementations
// 
export function updateGameScore(player1Points: number, player2Points: number) {
    return [player1Points, player2Points];
}

export function decideGameWinner(game: number[]) {
    return game[0] > game[1] ? 'Player 1' : 'Player 2';
}

export function printScore(pointsArray: Array<number>) {
    if (pointsArray[0] >= 3 && pointsArray[1] >= 3) {
        if (pointsArray[0] === pointsArray[1]) {
            return 'deuce';
        } else {
            if (pointsArray[0] > pointsArray[1]) {
                return 'advantage player 1';
            } else {
                return 'advantage player 2';
            }
        }
    }
    const result = pointsArray.map(
        (obj: number) => {
            switch (obj) {
                case 0:
                    return 'love';
                case 1:
                    return 'fifteen';
                case 2:
                    return 'thirty';
                case 3:
                    return 'forty';
            }
        });
    return result[0] + ' - ' + result[1];
}