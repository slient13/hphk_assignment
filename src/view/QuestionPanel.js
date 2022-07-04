class QuestionPanel {
    constructor(q_number, question) {
        this.q_number = q_number;
        this.question = question;
    }
    render() {
        return (`<div id="q${this.q_number}">` +
            `<h1 class="title">${this.question.get_title()}</h1>` +
            `<p class="contents">${this.question.get_contents()}</p>` +
            `<div class="answer">` +
            `<div>` +
            `<h2 class="element_head">예상 출력</h2>` +
            `<p class="correct_answer">${this.question.get_answer(true)}</p>` +
            `</div>` +
            `<div>` +
            `<h2 class="element_head">실제 출력</h2>` +
            `<p class="user_answer">${this.question.get_answer(false)}</p>` +
            `</div>` +
            `<div>` +
            `<h2 class="element_head">정답 여부</h2>` +
            `<p class="is_correct">${this.question.check() ? "정답" : "오답"}</p>` +
            `</div>` +
            `</div>` +
            `</div>`);
    }
}
export default QuestionPanel;
