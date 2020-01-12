    var score = 0;
    var currentQuestion = 0;

    // trivia q&a's
    var questions = [{
        title: "which hobbit is my favorite?",
        answers: ['sam', 'pippin', 'frodo', 'merry'],
        correct: 0
    }, {
        title: "who is the ranger in the party?",
        answers: ['frodo', 'gimli', 'legolas', 'aragorn'],
        correct: 3
    }, {
        title: "who is arwen's father?",
        answers: ['barithor', 'legolas', 'elrond', 'sauron'],
        correct: 2
    }, {
        title: "who is the white wizard?",
        answers: ['gimli', 'sarumon', 'isildor', 'gandolf'],
        correct: 3
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

    // hides the quiz on start-up
    $(".quizbox").hide();

    // hides the summary page
    $(".summary").hide();

    // hides the welcome menu and shows the quiz
    $(".startbox").click(function(a) {
        a.preventDefault();
        $(".startbox").hide();
        $(".quizbox").show();
        showQuestion();
    });

    // highlights answer
    $(".quiz ul").on("click", "li", function(){
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    });
    
    // tells player to select an answer on submit
    $(".quiz a").click(function(e){
        e.preventDefault();
        if($("li.selected").length){
            let guess = $("li.selected").attr("id");
            // console.log(guess);
            checkAnswer(guess);
        } else {
            alert("Please select an answer.");
        }
    });

});

    // shows the first trivia question / creates radio buttons
    function showQuestion() {
    let question = questions[currentQuestion];
    $(".quiz h2").text(question.title);
    $(".quiz ul").html("");
    for(var i = 0; i < question.answers.length; i ++){
        $(".quiz ul").append("<li id='"+i+"'>"+ question.answers[i] + "</li>");
    };
}

    // updates the score
    function checkAnswer(guess) {
        let question = questions[currentQuestion];
        if(question.correct == guess){
            score++;
        }
        currentQuestion++;
        if(currentQuestion >= questions.length){
            showSummary();
        } else {
            showQuestion();
        }

}
    // hides the quiz and shows the summary page
    function showSummary() {
        $(".quiz").hide();
        $(".summary").show();
    // shows the total score
        $(".summary p").text("You scored " +score+ " out of " +questions.length+ "!");
}