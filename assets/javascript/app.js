    var score = 0;
    var currentQuestion = 0;

    // trivia q&a's
    var questions = [{
        question: "which hobbit is my favorite?",
        answer: ["sam", "pippin", "frodo", "merry"],
        correctAnswer: 0
    }, {
        question: "who is the ranger in the party?",
        answer: ["frodo", "gimli", "legolas", "aragorn"],
        correctAnswer: 3
    }, {
        question: "who is arwen's father?",
        answer: ["barithor", "legolas", "elrond", "sarumon"],
        correctAnswer: 2
    }];

    // countdown clock
    var clockTimer = 30;
    var startTime = setInterval(function () {
        clockTimer--;
        document.getElementById("countdown").textContent = clockTimer; if (clockTimer <= 0)
            clearInterval(startTimer);
    }, 1000);

    // starts game
    $(document).ready(function () {

    // hides the welcome menu and shows the quiz
    $(".startbox").click(function(a) {
        a.preventDefault();
        $(".startbox").hide();
        $(".quizbox"). show();
        showQuestion();
    });

});

function startQuiz() {

}

// function showQuestion() {
//     let question = questions[currentQuestion];
//     $(".quiz h2").text(questions.title);
//     $(".quiz ul").html("");
//     for(var i = 0; i < questions.answer.length; i ++){
//         $(".quiz ul").append("buttonhere)

// }

function checkAnswer() {

}

function showSummary() {

}