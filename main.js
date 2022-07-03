import QuestionPanel from "./src/view/QuestionPanel.js";
import Q1 from "./src/questions/Q1.js";
import Q2 from "./src/questions/Q2.js";
import Q3 from "./src/questions/Q3.js";
import Q4 from "./src/questions/Q4.js";
import Q5 from "./src/questions/Q5.js";
import CAnswer from "./src/questions/CAnswer.js";
import Answer from "./answer/Answer.js";

window.onload = () => {
    let question_zone = document.getElementById("question_zone");
    question_zone.innerHTML = "";

    const cAnswer = new CAnswer();
    const answer = new Answer();

    question_zone.innerHTML += new QuestionPanel(1, new Q1(cAnswer, answer)).render();
    question_zone.innerHTML += new QuestionPanel(2, new Q2(cAnswer, answer)).render();
    question_zone.innerHTML += new QuestionPanel(3, new Q3(cAnswer, answer)).render();
    question_zone.innerHTML += new QuestionPanel(4, new Q4(cAnswer, answer)).render();
    question_zone.innerHTML += new QuestionPanel(5, new Q5(cAnswer, answer)).render();
}
