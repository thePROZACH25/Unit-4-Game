$(document).ready(function() {
  // Var
  var snake = {
    one: {
      name: "one",
      value: 0
    },
    two: {
      name: "two",
      value: 0
    },
    three: {
      name: "three",
      value: 0
    },
    four: {
      name: "four",
      value: 0
    }
  };

  // Scores
  var totalScore = 0;
  var renHealth = 0;

  // Win & Losses
  var winCount = 0;
  var lossCount = 0;

  // Functions

  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var startGame = function() {
     totalScore = 0;

    renHealth = getRandom(19, 120);

    snake.one.value = getRandom(1, 12);
    snake.two.value = getRandom(1, 12);
    snake.three.value = getRandom(1, 12);
    snake.four.value = getRandom(1, 12);

    // -----------------------
    $("#total-score").html(totalScore);
    $("#renHealth").html(renHealth);

    console.log("-------------------------");
    console.log("Targer Score: " + renHealth);
    console.log(
      "one: " +
        snake.one.value +
        " | two: " +
        snake.two.value +
        " | three: " +
        snake.three.value +
        " | four: " +
        snake.four.value
    );
    console.log("-------------------------");
  };

//   =================

var addValues = function(snake){
    totalScore = totalScore + snake.value;
    $("#total-score").html(totalScore);
    checkWin();

    console.log("you score: " + totalScore);
}

var checkWin = function(){
    if (totalScore > renHealth){
        alert("You Lose!!!");
        console.log("you lose");

        lossCount++;
        $("#loss").html(lossCount);
        startGame();
    }
    else if(totalScore == renHealth){
        alert("You Win!!!");
        console.log("you wing");

        winCount++;
        $("#wins").html(winCount);
        startGame();
    }
}
  // Click prossess
  $("#one").click(function() {
    addValues(snake.one);
  });
  $("#two").click(function() {
    addValues(snake.two);
  });
  $("#three").click(function() {
    addValues(snake.three);
  });
  $("#four").click(function() {
    addValues(snake.four);
  });
  startGame();
});
