class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  question.hide()
    //write code to change the background color here
  background("yellow")
    //write code to show a heading for showing the result of Quiz
  textSize(30)
  text("result of the quiz",340,50)
  text("-----------------------------",320,65)
    //call getContestantInfo( ) here
  Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
  if(allContestants!==undefined){
    var displayanswer=230
    fill("blue")
    textSize(30)
    text("note: contestant who answer correct are highlighted in green color",130,230)
    for(var plr in allContestants){
      var correctanswer="2"
      if(correctanswer===allContestants[plr].answer){
        fill("green")
      }
      else{
        fill("red")
      }
      displayanswer+=30
      textSize(30)
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayanswer)
    }
  }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
