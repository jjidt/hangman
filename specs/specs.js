describe("Hangman", function() {
  describe("initialize", function() {
    it("initializes the hangman's body parts", function() {
      var testMan = Object.create(Hangman);
      testMan.initialize();
      testMan.head.should.equal(false);
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
      testMan.addPart(1);
      testMan.head.should.equal(true);
    });
    it("takes a number greater than 1 and adds all the body parts up to that number", function() {
      var testMan = Hangman.create();
      testMan.addPart(3);
      testMan.arms.should.equal(true);
    });
  });
});

describe("Game", function() {
  describe("initialize", function() {
    it("initializes the Game with a Hangman object", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.man.head.should.equal(false);
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
      (typeof testGame.word).should.equal("string");
    });
  });
});
