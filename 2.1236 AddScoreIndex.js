// Let's modify our addScore function to only add 10 points to the first 3 players.

function addScore(players) {
    let newArray = [];
    
    players.map(function(player, i){
        if(i < 3){
        newArray.push( {
            id: player.id,
            score: player.score + 10
        })
        }else newArray.push( {
            id: player.id,
            score: player.score 
        })
    })
    return newArray
}