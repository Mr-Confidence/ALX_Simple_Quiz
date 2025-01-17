function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }

  // Step 2: Add event listener to the submit button
  const submitButton = document.getElementById('submit-answer');
  submitButton.addEventListener('click', checkAnswer);