class Form{
    constructor(){
        //this.input = createInput("Name");
        //this.button = createButton('Play');
        //this.greeting = createElement('h2');
    }

    //hide(){
      //  this.greeting.hide();
        //this.button.hide();
       // this.input.hide();
    

  display(){
    var litle = createElement('h2');
    tlitle.html("Car Racing Game");
    tlitle.position(130,0);

    var input = createInput("name");
    var button = createButton("play");
    var greeting = createElement('h3');

    input.position(130,160);
    button.position(250,200);


    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();

      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);

      greeting.html("Hello" + player.name);
      greeting.position(130,160);
      //player.index = playerCount;
    });

  }
}