
function superbowlWin(array) {
    let winningYear = array.find(game => game.result === "W")
    if (winningYear){
        return winningYear.year
    } else {
        return undefined
    }
}
