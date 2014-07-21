var Hangman = {
  initialize: function() {
    this.parts = 0;
  },
  create: function() {
    var newMan = Object.create(Hangman);
    newMan.initialize();
    return newMan;
  },
  addPart: function() {
    this.parts += 1;
    }
};

var Game = {
  initialize: function() {
    this.man = Hangman.create();
    this.words = ["basketball", "portland", "trapeze", "banana", "hamburger", "quiche", "target", "lawyer", "doctor", "hangman", "yellow", "bingo", "automobile", "pizza", "family", "vertigo", "island", "warrior", "lake", "skateboard"];
    this.ranWord();
    this.splitWords = this.splitWord();
    this.lettersFound = 0;
  },
  create: function() {
    var newGame = Object.create(Game);
    newGame.initialize();
    return newGame;
  },
  ranWord: function() {
    this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
  },
  splitWord: function() {
    return this.currentWord.split("");
  },
  hasLost: function() {
    return this.man.parts >= 5;
  }
};

$(document).ready(function(){
  var hangGame = Game.create();
  for(var i = 0; i < hangGame.splitWords.length; i++) {
    $("div.display").append("<div class='hide-text'>" + hangGame.splitWords[i] + "</div>" );
  }
  $("form#guess").submit(function(event) {
    event.preventDefault();
    var inputtedLetter = $("input#letter").val().toLowerCase();
    var letterFound = false;

    for(var j = 0; j<hangGame.splitWords.length; j++) {
      if(inputtedLetter === hangGame.splitWords[j]) {
        $("div.display div").eq(j).removeClass("hide-text");
        letterFound = inputtedLetter;
        hangGame.lettersFound += 1;
      }
    }
    if (letterFound === false) {
      hangGame.man.addPart();
    }
    $(".hangman").css({"height": 76*hangGame.man.parts})
    if (hangGame.hasLost()) {
      $("div.display div").removeClass("hide-text");
      alert("You Lose!");


    } else if (hangGame.lettersFound === hangGame.splitWords.length) {
      alert("You Win!");
    }
  $("input#letter").val("");
  })
});

