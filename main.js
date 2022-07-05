import QuestionPanel from "./src/view/QuestionPanel.js";
import Footer from "./src/view/Footer.js";
import Q1 from "./src/questions/Q1.js";
import Q2 from "./src/questions/Q2.js";
import Q3 from "./src/questions/Q3.js";
import Q4 from "./src/questions/Q4.js";
import Q5 from "./src/questions/Q5.js";
import CAnswer from "./src/questions/CAnswer.js";
import Answer from "./src/answer/Answer.js"

window.onload = () => {
    let question_zone = document.getElementById("question_zone");
    question_zone.innerHTML = "";

    const cAnswer = new CAnswer();
    const answer = new Answer();
    let q_list = [
        new Q1(cAnswer, answer), 
        new Q2(cAnswer, answer), 
        new Q3(cAnswer, answer), 
        new Q4(cAnswer, answer), 
        new Q5(cAnswer, answer), 
    ];
    let check_list = [];

    for (let i = 0; i < q_list.length; ++i) {
        question_zone.innerHTML += new QuestionPanel(i+1, q_list[i]).render();
        check_list.push(q_list[i].check());
    }

    let footer = document.getElementById("footer");
    footer.innerHTML = new Footer(check_list).render();
}
