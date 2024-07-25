let num1, num2, operator, correctAnswer, random;
generateQuestion();
function generateQuestion() {
    num1 = Math.floor(Math.random() * 901)+100;
    num2 = Math.floor(Math.random() * 901)+100;
    random = Math.floor(Math.random()*4);
    if (random===0)
    {
        operator='+';
        correctanswer=num1+num2;
    } else if (random===1)
    {
        operator='-';
        correctanswer=num1-num2;
    } else if (random===2)
    {
        num1 = Math.floor(Math.random() * 50)+5;
        num2 = Math.floor(Math.random() * 50)+5;
        operator='*';
        correctanswer=num1*num2;
    } else if (random===3)
    {
        operator='/';
        while (num1%num2!=0)
        {
            num2 = Math.floor(Math.random() * 50)+1;
        }
        correctanswer=num1/num2;
    }
    document.getElementById('question').innerText = `${num1} ${operator} ${num2} = ?`;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctanswer) {
        generateQuestion();
    } else {
        document.getElementById('result').innerText = correctanswer;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}