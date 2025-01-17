document.getElementById('submit-answer').addEventListener('click', checkAnswer);
function checkAnswer(){
    const correctAnswer = 4;
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    if(Number(userAnswer.value) === correctAnswer){
        document.getElementById("feedback").textContent ="Correct! Well done."
        document.getElementById("feedback").style.color = 'green'
    } 
    else{
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"
        document.getElementById("feedback").style.color = 'red'
    }
    }
