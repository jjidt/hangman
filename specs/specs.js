describe("Hangman", function() {
  describe("initialize", function() {
    it("initializes the hangman's body parts", function() {
      var testMan = Object.create(Hangman);
      testMan.initialize();
      testMan.parts.should.equal(0);
    });
  });
  describe("create", function() {
    it("creates a new hangman object and initializes it", function() {
      var testMan = Hangman.create();
      Hangman.isPrototypeOf(testMan).should.equal(true);
    });
  });
  describe("addPart", function() {
    it("takes a number and adds the amount of body parts to the hangman", function() {
      var testMan = Hangman.create();
      testMan.addPart();
      testMan.parts.should.equal(1);
    });
  });
});

describe("Game", function() {
  describe("initialize", function() {
    it("initializes the Game with a Hangman object", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.man.parts.should.equal(0);
    });
    it("initializes the game with a 20 word array", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.words.length.should.equal(20);
    });
  });
  describe("create", function() {
    it("creates a new Game object and initializes it", function() {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe("ranWord", function() {
    it("chooses a random word from the words array", function() {
      var testGame = Game.create();
      testGame.ranWord();
      (typeof testGame.currentWord).should.equal("string");
    });
  });
  describe("splitWord", function() {
    it("splits the currentWord into an array", function() {
      var testGame = Game.create();
      testGame.splitWords.length.should.equal(testGame.currentWord.length);
    });
  });
  describe("hasLost", function() {
    it("should return true if body parts are equal to 5", function() {
      var testGame = Game.create();
      testGame.man.addPart();
      testGame.man.addPart();
      testGame.man.addPart();
      testGame.man.addPart();
      testGame.man.addPart();
      testGame.hasLost().should.equal(true);
    });
  });
});






