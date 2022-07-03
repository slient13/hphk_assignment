import Question from "../questions/Question";
class QuestionPanel {
    q_number: number;
    question: Question;

    constructor(q_number: number, question: Question) {
        this.q_number = q_number;
        this.question = question;
    }

    render() {
        return (
            `<div id="q${this.q_number}">` +
                `<h1 class="title">${this.question.get_title()}</h1>` +
                `<p class="contents">${this.question.get_contents()}</p>` +
                `<div class="answer">` +
                    `<p class="correct_answer">${this.question.get_answer(true)}</p>` +
                    `<p class="user_answer">${this.question.get_answer(false)}</p>` +
                    `<p class="is_correct">${this.question.check()}</p>` +
                `</div>` +
            `</div>`
        );
    }
}

export default QuestionPanel;