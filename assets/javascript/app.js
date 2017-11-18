var correct = 0;

var wrong = 0;

var answers;

var counter = 31;

var currentNumber = 0;

var Questions = [{
    question: "Who hit the game winning shot of the 2016 NBA Finals?",
    choices: ["Lebron James", "Kevin Love", "Kyrie Irving"],
    correctAnswer: 2
  },

  {
    question: "Which album belongs to Kid Cudi?",
    choices: ["The Chronic", "Man on the Moon", "Sgt. Peppers Lonely Hearts Club Band"],
    correctAnswer: 1
  },

  {
    question: "Which movie was released in 1993?",
    choices: ["Jurassic Park", "Jumanji", "E.T."],
    correctAnswer: 0
  },

  {
    question: "What team won the 2016 MLB World Series?",
    choices: ["Cleveland Indians", "Houston Astros", "Chicago Cubs"],
    correctAnswer: 2
  },

  {
    question: "Who was the first to perfect the Super Saiyan 2 form?",
    choices: ["Vegeta", "Gohan", "Goku"],
    correctAnswer: 1
  },

  {
    question: "Pharrell Williams is apart of what music group?",
    choices: ["Linkin Park", "N.E.R.D.", "Red Hot Chili Peppers"],
    correctAnswer: 1
  },

  {
    question: "Are you awesome?",
    choices: ["Yes", "No"],
    correctAnswer: 2
  }

  ];

  




setTimeout(timer, 500);

function timer(){
   
   if(counter > 0){		
   		counter--;
   		$('#time').text("Time Remaining: " + counter);
      setTimeout(timer, 1000);
   }
   console.log(counter);
}

	if (counter == 0) {

		function end () {
			clearTimeout(timer);

		} 
	};

	

	function onSubmit () {

	alert("hello");


}





// Psuedo coding \\

// create a loop that finds the value of the radio clicked and compares it to the correct answers indexed value

// if the answer is correct increment the correct score 

// if the answer is wrong then increment the wrong score

// when the user clicks submit the clock will stop and your score will be displyed

// if you run out of time your score up to that point will be displayed






