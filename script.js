const quizDB = [
    {
        question: "Q1: An HTML document can contain?",
        a: " Attributes",
        b: " Tags",
        c: " Raw Text",
        d: " All the answers are true",
        ans: "ans4"
       
    },
    {
        question: "Q2: Which of the following tag is used to add rows in the table?",
        a: "<td> and </td>",
        b: "<th> and </th>",
        c: "<tr> and </tr>",
        d: "None of the above.",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTML?",
        a: "Hello To My land",
        b: "Hey To My lady",
        c: "Hypertext Markup language",
        d: "Hypertext Makeup language",
        ans: "ans4"
       
    },
    {
       
        question: "Q4: Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q5: If we want to place text around an image, which CSS property should we use?",
        a: "push",
        b: "float",
        c: "align",
        d: "wrap",
        ans: "ans2"
    },
    {
        question: "Q6: A page designed in HTML is called?",
        a: " Application",
        b: " Cover page",
        c: " Front-end",
        d: " Web Page",
        ans: "ans4"
        
    },
    {
        question: "Q7: How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "enum",
        ans: "ans1"
    },
    {
        question: "Q8: What does the 'toLocateString()' method do in JS?",
        a: "Returns a localised object representation.",
        b: "Returns a parsed string.",
        c: "Returns a localized string representation of an object.",
        d: "None of the above.",
        ans: "ans3"
        
    },
    {
        question: "Q9: What is the use of the <noscript> tag in Javascript?",
        a: "The contents are displayed by non-JS-based browsers.",
        b: "Clears all the cookies and cache.",
        c: "Both A and B.",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question: "Q10: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Style",
        ans: "ans1"
       
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const Submit = document.querySelector('#Submit');

const answers = document.querySelectorAll('.answer');

const TotalScore = document.querySelector('#TotalScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


Submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        TotalScore.innerHTML = `
           <h3> You Scored 👍${score}/${quizDB.length}  </h3>
           <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        TotalScore.classList.remove('ScoreArea');
    }
});