var audio = new Audio()
var userchoice = 0;
var questionRight = 0;
var questionWrong = 0;
var questionincomplete = 0;
var timer;
var time = 60;
var myQuestions = [
  {
    question: "What year did the Blackhawks NOT win the Stanley Cup?",
    answers: {
      a: "1994",
      b: "2015",
      c: "2010",
      d: "2013",
    },
    correctAnswer: "a"
  },
  {
    question: "In what year did the Cubs win their latest World Series?",
    answers: {
      a: "2012",
      b: "1998",
      c: "2016",
      d: "2014",
    },
    correctAnswer: "c"
  },
  {
    question: "Who is Mr.Cub?",
    answers: {
      a: "Ron Santos",
      b: "Couch Q",
      c: "Willy Mays",
      d: "Ernie Banks"
    },
    correctAnswer: "d"
  },
  {
    question: "What was Walter Payton's nickname?",
    answers: {
      a: "PowerPlay Payton",
      b: "Walter Diva",
      c: "The Eagle",
      d: "Sweetness",
    },
    correctAnswer: "d"
  },
  {
    question: "What position did Brain Urlacher play?",
    answers: {
      a: "Middle Linebacker",
      b: "Strong Safety",
      c: "Fullback",
      d: "Punt Returner",
    },
    correctAnswer: "a"
  },
  {
    question: "Ferris Bueller ditches class to go watch a game at ____.",
    answers: {
      a: "Soldier Field",
      b: "Yankee Stadium",
      c: "The Madhouse on Madison",
      d: "Wrigley Field",
    },
    correctAnswer: "d"
  },
  {
    question: "The letters 'GSH' can be seen on the uniforms of which team?",
    answers: {
      a: "Chicago Bulls",
      b: "Chicago Bears",
      c: "Chicago Blackhawks",
      d: "Chicago White Sox",
    },
    correctAnswer: "b"
  },
  {
    question: "What lights up whenever the White Sox score at home?",
    answers: {
      a: "Chelsea Dagger",
      b: "The lollipops in the outfield stands",
      c: "Harry Caray's press box",
      d: "The visiting bullpen",
    },
    correctAnswer: "b"
  },
  {
    question: "Who is known as 'The Lovable Losers?'",
    answers: {
      a: "The 1985 Bears",
      b: "The Chicago Fire",
      c: "People who are cold at a game",
      d: "The Chicago Cubs",
    },
    correctAnswer: "d"
  },
  {
    question: "Who is the official deepdish pizza sponsor of the Cubs?",
    answers: {
      a: "Lou Malnati's",
      b: "Pizza Sapienza",
      c: "Giordano's",
      d: "Pizzaria Unos",
    },
    correctAnswer: "c"
  },

];

// *******FUNCTIONS********
// function for hiding start button div
$("#startButton").click(function () {
  $("#startGame").hide();
  $(".jumbotron").show();
  startGame()
  timer = setInterval(function () {
    time--;
    $("#timer").html("<h1>" + time + "</h1>")

    if (time === 0) {
      clearInterval(timer);
      endgame();

    }
    // call submit function
    // update html
  }, 1000);
  $("#startButton").addClass("hidden");
})

//function for the submit button
$(function () {
  $("#startGame").show();
  $(".jumbotron").hide();
})

$("#submit").click(endgame);
function endgame() {
  console.log("submitbuttomworks")
  for (var i = 0; i < myQuestions.length; i++) {
    console.log($("input[value='" + myQuestions[i].correctAnswer + "'][name='" + i + "']").checked)
    if ($("input[name=" + i + "]:checked").val() === myQuestions[i].correctAnswer) {
      questionRight++
      console.log("if statmejkadjfgbjkafg")
    }

  }
  questionWrong = myQuestions.length - questionRight;

  $("#correctanswers").html(questionRight)
  $("#incorrectanswers").html(questionWrong)

  questionRight = 0
  questionWrong = 0

  $("#results").removeClass("hidden");
  $("#quiz").addClass("hidden");
  $("#timer").addClass("hidden");
  $("#submit").addClass("hidden");
}

//function for starting game and displaying time and questions
function startGame() {
  console.log("hello")
  for (var i = 0; i < myQuestions.length; i++) {
    $("#quiz").append(myQuestions[i].question + "<br>");
    $("#quiz").append("<input type='radio' name='" + i + "' value='a'> " + myQuestions[i].answers.a + "<br>");
    $("#quiz").append("<input type='radio' name='" + i + "' value='b'> " + myQuestions[i].answers.b + "<br>");
    $("#quiz").append("<input type='radio' name='" + i + "' value='c'> " + myQuestions[i].answers.c + "<br>");
    $("#quiz").append("<input type='radio' name='" + i + "' value='d'> " + myQuestions[i].answers.d + "<br><br>");

  }
};


$("#Retry").click(function () {
  time = 60;
  for (var i = 0; i < myQuestions.length; i++) {
    var checked = $("input[name=" + i + "]:checked")
    checked.prop("checked", false);
    $("#quiz").removeClass("hidden");
    $("#results").addClass("hidden");
    $("#timer").removeClass("hidden");
    $("#submit").removeClass("hidden");

  };

})

// var all = resets all variables
// var time = 60000

// //  runs code after a certain amount of time
// to create a coiuntdown time use set timeout
// start at 60 sec
// when user begins game start counting down by 1 second every second to 0
// for submit quiz
// function to complete game
// clears timeout


// run code every specified amount of time


// cancel a timed, repeating action declared in a setinterval




//   //  Decrease number by one.
//   number--;

//   //  Show the number in the #show-number tag.
//   $("#show-number").html("<h2>" + number + "</h2>");


//   //  Once number hits zero...
//   if (number === 0) {

//     //  ...run the stop function.
//     stop();

//     //  Alert the user that time is up.
//     alert("Time Up!");
//   }
// }
// // function togglediv (invisable/visble)


// function showquestions()

// function timerstart
// function togglediv (invisable/visble)

// // psudo for game

// user clicks button to start Game, start game functions run, timer starts decreasing,
//     after timer start, questions appear start screen dissapear

// user clicks on buttons for answer choices

// game ends when timer runs out or user clicks submit 
// function grading of responses
// summary of right wrong in div (update html to show results and unhide results div)
// if right matches right = correct. if else = incorrect