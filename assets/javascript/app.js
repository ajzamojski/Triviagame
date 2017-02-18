// Javascript loads once html page has loaded
$(document).ready(function()
{	
	// Variables are initialized for the timer, audio sound and the number wrong/right
	var intervalId;
	var number = 30;
	var numCorrect = 0;
	var numWrong = 0;
	var click = new Audio("assets/Click-5.wav");
	// Plays a 'click' sound when buttons are pressed
	$("#buttonStart").on("click", function(){
		click.play();
	});

	// When the start button is clicked, the timer is started and function run gets called
	$("#buttonStart").on("click", run);
	$("#buttonStart").on("click", timer);

	// Function empties the start button and sets a 2sec interval for question 1 to appear
	function run() 
	{	
		numWrong = 0;
		numCorrect = 0;
		$(".startButton").empty();

		intervalId = setTimeout(Question1, 0);
	}

	//The first question
	function Question1 ()
	{	// Time is displayed immediately when page is loaded
		$(".timeRemaining").html("<h3> Time Remaining: " + number + "</h3>");

		// Variables for the answers and a div with and ul is created with Jquery
		var answers = ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");

		// Once 31sec runs down it will run the nested Timeout function
		intervalTime = setTimeout(Timeout, 30000);

		// Classes and text is added to the div created above
		Q1div.addClass("question");
		Q1div.html("<h2>What does CSS stand for?</h2>");

		// This for loop will cycle through the answers array and asign tags to each array element
		for (var i = 0; i < answers.length; i++)
		{
			// Initialized variables with added tags and classes
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			// Adds the array answers with added tags and appends to the button tag to Q1div
			// and assigns a number value to the button
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		} // Ends for loop

		// The Q1div, with all the added tags, gets added to an html div as well as the answer options
		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		// When an answer is clicked, it will gather the value that was assigned and perform a check
		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			// If the answer is this value, 1 in this case, if will increase the numbers correct
			if (anwserPress == 1) 
			{	
				// Once you guess an answer, it will stop the timers running and display a text
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				// Once the correct tab is displayed, it will last for 3.5sec and 
				// sets the timer to reset along with the next question
				setTimeout(Question2, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

			// Otherwise if the other answers are picked, display 'wrong' html
			else if (anwserPress == 0 || anwserPress == 2 || anwserPress == 3)
			{	
				// Clears the timer and sets new timers for the 2nd timer
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> Cascading Style Sheets");

				setTimeout(Question2, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		}); // Closes the onClick function

		// When the 30sec is up and an answer was not clicked, this function will execute
		function Timeout()
		{	
			// A time up html is displayed along with the next question being queued
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> Cascading Style Sheets");

			setTimeout(Question2, 3500);
			number = 31;
			setTimeout(timer, 2500);
		} // Ends function Timeout

	} // Ends function Question1

	// Starts Question2 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question2 ()
	{	number = 30;
		$(".content").empty();
		var answers = ["&ltlb&gt", "&ltbreak&gt", "&ltbr&gt", "&lttb&gt"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);		

		Q1div.addClass("question");
		Q1div.html("<h2>What is the correct HTML element for inserting a line break?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 2) 
			{
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question3, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 0 || anwserPress == 1 || anwserPress == 3)
			{	
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> &ltbr&gt ");

				setTimeout(Question3, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> &ltbr&gt");
			setTimeout(Question3, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	} //ends question2

	// Starts Question3 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question3 ()
	{	number = 30;
		$(".content").empty();
		var answers = ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);		

		Q1div.addClass("question");
		Q1div.html("<h2>Which of the following function of Number object forces a number to display in exponential notation?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{			
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 0) 
			{
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question4, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 1 || anwserPress == 2 || anwserPress == 3)
			{	
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: Exponential() Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.");

				setTimeout(Question4, 10000);
				number = 30;
				setTimeout(timer, 9000);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! correct answer is: Exponential() Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.");
			setTimeout(Question4, 7000);
			number = 31;
			setTimeout(timer, 6000);
		}

	} //ends question3

	// Starts Question4 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question4 ()
	{	$(".content").empty();
		var answers = ["&ltstylesheet&gtmystyle.css&lt/stylesheet&gt", "&ltstyle src='mystyle.css'&gt", "&ltlinkstyle rel='stylesheet' type='text/css' href='mystyle.css'&gt", "&ltlink rel='stylesheet' type='text/css' href='mystyle.css'&gt"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>What is the correct HTML for referring to an external style sheet?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 3) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question5, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 0 || anwserPress == 1 || anwserPress == 2)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> '&ltlink rel='stylesheet' type='text/css' href='mystyle.css'&gt'");

				setTimeout(Question5, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> '&ltlink rel='stylesheet' type='text/css' href='mystyle.css'&gt'");

			setTimeout(Question5, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	}// ends question4

	// Starts Question5 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question5 ()
	{	$(".content").empty();
		var answers = ["&ltb&gt", "&ltimportant&gt", "&ltstrong&gt", "&ltlegit&gt"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>Choose the correct HTML element to define important text</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 2) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question6, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 0 || anwserPress == 1 || anwserPress == 3)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> &ltstrong&gt");

				setTimeout(Question6, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> &ltstrong&gt");

			setTimeout(Question6, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	}//ends question5

	// Starts Question6 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question6 ()
	{	
		$(".content").empty();
		var answers = ["forEach()", "filter()", "concat()", "every()"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>Which of the following function of Array object calls a function for each element in the array?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 0) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question7, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 1 || anwserPress == 2 || anwserPress == 3)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answers is: <br> forEach()");

				setTimeout(Question7, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> forEach()");

			setTimeout(Question7, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	} //ends question6

	// Starts Question7 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question7 ()
	{	
		$(".content").empty();
		var answers = ["The Type Selector", "The Descendant Selector", "The Universal Selector", "The Class Selector"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>Which of the following selector matches all elements of a type?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 0) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question8, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 1 || anwserPress == 2 || anwserPress == 3)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> The Type Selector");

				setTimeout(Question8, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! Wrong! The correct answer is: <br> The Type Selector");

			setTimeout(Question8, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	}//ends question7

	// Starts Question8 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question8 ()
	{	$(".content").empty();
		var answers = ["section", "aside", "header", "article"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>Which of the following tag represents an independent piece of content of a document in HTML5?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 3) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question9, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 0 || anwserPress == 1 || anwserPress == 2)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> article");

				setTimeout(Question9, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> article");

			setTimeout(Question9, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	}// ends question8

	// Starts Question9 which is identical to the previous Question except the timers are 
	//switched for the next question to get triggered
	function Question9 ()
	{	$(".content").empty();
		var answers = ["sort()", "toSource()", "toString()", "unshift()"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);
		// setTimeout(timer, 31000);

		Q1div.addClass("question");
		Q1div.html("<h2>Which of the following function of Array object sorts the elements of an array?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 0) 
			{	
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Question10, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}
			else if (anwserPress == 1 || anwserPress == 2 || anwserPress == 3)
			{
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("<strong>Wrong! The corrct answer is: <br> sort()");

				setTimeout(Question10, 3500);
				number = 30;
				setTimeout(timer, 2500);
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The corrct answer is: <br> sort()");

			setTimeout(Question10, 3500);
			number = 31;
			setTimeout(timer, 2500);
		}

	}// ends question9

	// Starts Question10 which is identical to the previous Question except the timers are 
	//switched for the results to be displayed
	function Question10 ()
	{	$(".content").empty();
		var answers = ["arr[arr.length + 1] = new Arrays()", "arr[arr.length] = value", "arr[arr.length-1] = value", "arr[arr.length*1] = value"];
		var Q1div = $("<div>");
		var Q1ul = $("<ul>");
		intervalTime = setTimeout(Timeout, 30000);		

		Q1div.addClass("question");
		Q1div.html("<h2>How to append a value to an array of Java Script?</h2>");

		for (var i = 0; i < answers.length; i++)
		{
			var buttonAnswer = $("<button>");
			var answer = $("<li>");
			var libreak = $("<br>");

			buttonAnswer.addClass("buttonClass");
			answer.addClass("liClass");
			
			answer.html(answers[i]);
			buttonAnswer.attr("data-value", i);
			buttonAnswer.append(answer);
			Q1ul.append(buttonAnswer);
			Q1ul.append(libreak);
		}

		$(".content").append(Q1div);
		Q1div.append(Q1ul);

		$(".buttonClass").on("click", function()
		{
			click.play();
			var anwserPress = ($(this).attr("data-value"));

			if (anwserPress == 1) 
			{
				numCorrect += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Correct!");

				setTimeout(Results, 3500);
				number = 30;
			}
			else if (anwserPress == 0 || anwserPress == 2 || anwserPress == 3)
			{	
				numWrong += 1;
				clearInterval(intervalTime);
				clearInterval(intervalId);
				Q1div.html("Wrong! The correct answer is: <br> arr[arr.length] = value");

				setTimeout(Results, 3500);
				number = 30;
			}

		});

		function Timeout()
		{
			numWrong += 1;
			clearInterval(intervalId);
			Q1div.html("Time is up! The correct answer is: <br> arr[arr.length] = value");
			setTimeout(Results, 3500);
			number = 31;
		}

	} //ends question10

	//Displays the results of your answers
	function Results ()
	{
		$(".content").empty();
		$(".content").append("Here are your results: <br>");
		$(".content").append("Number Correct: " + numCorrect + "<br>");
		$(".content").append("Number Wrong: " + numWrong + "<br>");
		var button = $('<button class="btn btn-default" type="submit" id="buttonStart">');
		button.append("Start");
		//Displays a button that when clicked on restarts the questions and the timer
		$(".startButton").append(button);
		$("#buttonStart").on("click", run);
		$("#buttonStart").on("click", timer);
		$("#buttonStart").on("click", function()
		{
		click.play();
		$(".content").empty();
		});

	}

	//This function decrements a number (the seconds remaining) and displays it 
	function decrement()
	{
		number--;

		$(".timeRemaining").html("<h3> Time Remaining: " + number + "</h3>");

		if (number === 0) 
		{
			clearInterval(intervalId);
			// $(".content").html("Time ran out!");
		}
	}

	//Function timer sets and interval time of 1sec to call function decremet
	function timer () 
	{
		intervalId = setInterval(decrement, 1000);
	}	
});