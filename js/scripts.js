var Hangman = {
  initialize: function() {
    this.head = false;
    this.neck = false;
    this.arms = false;
    this.torso = false;
    this.legs = false;
    this.lose = false;
  },
  create: function() {
    var newMan = Object.create(Hangman);
    newMan.initialize();
    return newMan;
  },
  addPart: function(number) {
    if(number === 1) {
      this.head = true;
    } else if(number === 2) {
      this.head = true;
      this.neck = true;
    } else if(number === 3) {
      this.head = true;
      this.neck = true;
      this.arms = true;
    } else if(number === 4) {
      this.head = true;
      this.neck = true;
      this.arms = true;
      this.torso = true;
    } else if(number === 5) {
      this.head = true;
      this.neck = true;
      this.arms = true;
      this.torso = true;
      this.legs = true;
      this.lose = true;
    }
  }
};

var Game = {
  initialize: function() {
    this.man = Hangman.create();
    this.words = ["basketball", "portland", "trapeze", "banana", "hamburger", "quiche", "target", "lawyer", "doctor", "hangman", "yellow", "bingo", "automobile", "pizza", "family", "vertigo", "island", "warrior", "lake", "skateboard"];
  },
  create: function() {
    var newGame = Object.create(Game);
    newGame.initialize();
    return newGame;
  }
};

