/**
 * Quiz
 */

// Only one question is in this array, but you will add all the questions.

$( document ).ready(function() {
    var quiz = (function() {
		var allQuestions = [
			{
				question: "Who is Prime Minister of the United Kingdom?",
				choices: ["Theresa May", "Jeffrey Corbyn", "Winston Churchill", "Tony Blair"],
				correctAnswer: 0
			},
			{
				question: "Who is President of the United States?",
				choices: ["Barrack Obama", "Donald Trump", "Jimmy Carter"],
				correctAnswer: 1
			}
		]
        var currentQuestion = -1;
        var correctAnswers = 0;
 
        var selectChoice = function(e) {
            e.preventDefault();
            var choice = e.target.id;
            if( choice == allQuestions[ currentQuestion ].correctAnswer ) {
                alert('Correct!');
                correctAnswers++;
                $( '.select-choice' ).off();
                $( '.select-choice' ).removeAttr("href");
            } 
            else {
                alert('Wrong!');
            }
            $( '#numCorrect').text( correctAnswers );
            $( '#numQuestions').text( currentQuestion+1 );
        };
 
        var nextQuestion = function() {
            currentQuestion++;
            if( currentQuestion >= allQuestions.length ) {
                $( '#container').hide();
            } else {
                $( '#question').text( allQuestions[ currentQuestion ].question);
                $( "#choices" ).empty();
                for( choice in allQuestions[ currentQuestion ].choices ) {
                    $( "#choices" ).append( '<li><a href="#" class="select-choice" id="'+choice+'">'+allQuestions[ currentQuestion ].choices[choice]+'</a></li>');
                };
            }
            $( '.select-choice' ).on('click', function(e) {
                selectChoice(e);
            });
        };
 
        return {
            nextQuestion: nextQuestion,
            selectChoice: selectChoice
        };
    })();
 
    quiz.nextQuestion();

    $( '#nextQuestion').on('click', function() {
        quiz.nextQuestion();
    });
});