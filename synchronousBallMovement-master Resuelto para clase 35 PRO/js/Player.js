class Player{
    constructor(){}

getCount(){
    var playerCountRef = database.ref ('playerCount');
    playerCount.on("value", (data)=>{
        playerCount = data.val();
    })
}

updateCount(){
    database.ref = ('/').update({
    playerCount: count
    });
  
}
update(name){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex),set({
        name: this.name,
        distance: this.distance
    });
  }

//static getPlayerInfo(){
  //  var playerInfoRef = database.ref('players');
   // playerInfoRef.on("value",(data)=>{
     //   allPlayers = data.val();
   // })
// }  
}