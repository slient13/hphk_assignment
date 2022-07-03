import Question from "./Question.js";
class Q4 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 4";
        const question_text = "문제 텍스트 4";
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        return target.call_next();
    }
}
export default Q4;
