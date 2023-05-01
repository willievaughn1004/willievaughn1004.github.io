// Variables

let question = document.querySelector('.question');
let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let answerD = document.getElementById('d');
let answers = document.querySelector('.answer-choices');
let i = 0;
let correct = 0;

// Question Array

const questions = [
    {
        question: "Who holds the triforce of power?",
        answers: {
          a: "Link",
          b: "Zelda",
          c: "Ganon",
          d: "Tingle"
        },
        correctAnswer: "Ganon"
    },
    {
      question: "In which game did Link first obtain the Master Sword?",
      answers: {
        a: "The Legend of Zelda",
        b: "The Adventure of Link",
        c: "A Link to the Past",
        d: "Ocarina of Time"
      },
      correctAnswer: "A Link to the Past"
    },
    {
      question: "Which of these is NOT one of the three goddesses?",
      answers: {
        a: "Din",
        b: "Nayru",
        c: "Farore",
        d: "Hylia"
      },
      correctAnswer: "Hylia"
    },
    {
      question: "Which game introduced the concept of time travel?",
      answers: {
        a: "Majora's Mask",
        b: "Ocarina of Time",
        c: "Twilight Princess",
        d: "Skyward Sword"
      },
      correctAnswer: "Ocarina of Time"
    },
    {
      question: "What is the name of Link's horse?",
      answers: {
        a: "Epona",
        b: "Zelda",
        c: "Ganondorf",
        d: "Navi"
      },
      correctAnswer: "Epona"
    }
  ];


  // Event Listeners

  answers.addEventListener("click", function(e) {

    if (e.target.innerText === questions[i].correctAnswer) {
        alert("Correct!");
        correct++;
    }

    if (i < questions.length) {
        i++;
    }

    console.log(correct, i)

    if (i === questions.length) {
        alert(`You got ${correct} questions correct!`)
        i = 0;
        correct = 0;
    }

    question.innerText = questions[i].question;
    answerA.innerText = questions[i].answers.a;
    answerB.innerText = questions[i].answers.b;
    answerC.innerText = questions[i].answers.c;
    answerD.innerText = questions[i].answers.d;

});