// Print out the newest and the oldest game from the list.
function printTheNewestAndOldestGame(games) {
    let newGame = games[0];
    let oldGame = games[0];
    for(const game of games)
    {
        if(game.releaseYear > newGame.releaseYear )
        {
            newGame = game;
        }
        if(game.releaseYear < oldGame.releaseYear)
        {
            oldGame = game;
        }
    }
    console.log(newGame)
   console.log(oldGame)

}
printTheNewestAndOldestGame([
    { name: 'GTA V', releaseYear: new Date('September 17, 2013') },
    { name: 'CSGO', releaseYear: new Date('August 21, 2012') },
    { name: 'FIFA 14', releaseYear: new Date('September 23, 2013') },
])
/* Expected output:
Newest game: FIFA 14
Oldest game: CSGO
*/
