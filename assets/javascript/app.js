var score = 0;
var currentQuestion = 0;
var clockTimer = 60;

// trivia q&a's
var questions = [{
    title: "What is the name of the ferry the hobbits use to escape the Black Riders in 'The Fellowship of the Ring'?",
    answers: ['Cranberry Ferry', 'Blackberry Ferry', 'Huckleberry Ferry', 'Bucklebury Ferry'],
    correct: 3
}, {
    title: "In 'The Fellowship of the Ring', Bilbo gives Frodo a sword for protection. What is the name of that sword?",
    answers: ['Mithril', 'Thrasher', 'Sting', 'Slice'],
    correct: 2
}, {
    title: "Who is the first voice we hear in the beginning of 'The Fellowship of the Ring'?",
    answers: ['Arwen', 'Gandalf', 'Eowyn', 'Galadriel'],
    correct: 3
}, {
    title: "What is the name of the Ent who carries Pippin and Merry through Fangorn Forest?",
    answers: ['Treebeard', 'Greybranch', 'Quickbeam', 'Barktree'],
    correct: 0
}, {
    title: "In 'The Return of the King', who kills the Witch King of Angmar?",
    answers: ['Frodo', 'Aragorn', 'Eowyn', 'Arwen'],
    correct: 2
}, {
    title: "After Sauron, who kept the One Ring?",
    answers: ['Isildur', 'Elrond', 'Gollum', 'Saruman'],
    correct: 0
}, {
    title: "What is the name of the inn where Frodo was supposed to meet Gandolf in 'The Fellowship of the Ring'?",
    answers: ['The Laughing Boar', 'The Green Dragon', 'The Prancing Pony', 'The Salty Toad'],
    correct: 2
}, {
    title: "Who says 'It will be the farthest away from home I've ever been.'?",
    answers: ['Pippin', 'Merry', 'Frodo', 'Sam'],
    correct: 3
}];

// starts game
$(document).ready(function () {

// loops through the question array
// for (var i = 0, i = questions.length; i < 3; i++) {
//     var obj = questions.length[i]
// ;}

// hides the quiz on start-up
    $(".quizbox").hide();

// hides the summary page
    $(".summary").hide();

// hides the fail page
    $(".fail").hide();

// hides the welcome menu and shows the quiz
    $(".startbox").click(function (a) {
        a.preventDefault();
        $(".startbox").hide();
        $(".quizbox").show();
        showQuestion();
    });

    // countdown clock
    var clockTimer = 60;
    var startTime = setInterval(function () {
        clockTimer--;
        document.getElementById("countdown").textContent = clockTimer; if (clockTimer < -1)
            clearInterval(startTime);
// if clock runs out and no answer is selected
        else if (clockTimer === -1) {
            clearInterval(startTime);
            $(".quiz").hide();
            $(".fail").show();
            $("#countdown").hide();
        }
    }, 1000);

// return to start page if no answer is selected
    $(".fail a").click(function(e){
        e.preventDefault();
        $(".startbox").show();
        $(".quiz").show();
        $(".fail").hide();
        $("#countdown").show();
    });

// "button" customization
    $(".quiz ul").on("click", "li", function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    });

// tells player to select an answer on submit
    $(".quiz a").click(function (e) {
        e.preventDefault();
        if ($("li.selected").length) {
            let guess = $("li.selected").attr("id");
// console.log(guess);
            checkAnswer(guess);
        } else {
            alert("Please select an answer.");
        }
    });

});

// shows the first trivia question / creates "buttons"
function showQuestion() {
    let question = questions[currentQuestion];
    $(".quiz h2").text(question.title);
    $(".quiz ul").html("");
    for (var i = 0; i < question.answers.length; i++) {
        $(".quiz ul").append("<li id='" + i + "'>" + question.answers[i] + "</li>");
    };
}

// updates the score
function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if (question.correct == guess) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }
}

// hides the quiz and shows the summary page
function showSummary() {
    $(".fail").remove();
    $("#countdown").hide();
    $(".quiz").hide();
    $(".summary").show();
// shows the total score
    $(".summary p").text("You scored " + score + " out of " + questions.length + "!");

    
// returns player back to the main page
    $(".summary a").click(function(e) {
        e.preventDefault();
        $(".summary").hide();
        $(".quiz").show();
        $("#countdown").show();
        score = 0;
        currentQuestion = 0;
        restartQuiz();
        showQuestion();

        document.getElementById("countdown").textContent = clockTimer; if (clockTimer < -1)
            clearInterval(startTime);
// if clock runs out and no answer is selected
        else if (clockTimer === -1) {
            clearInterval(startTime);
            $(".quiz").hide();
            $(".fail").show();
            $("#countdown").hide();
        }
    });
}
