import Question from "./Question.js";

class Q1 extends Question {
    constructor(C_target: any, A_target: any) {
        const title: string = "문제 1 : 클래스 생성 확인";
        const question_text: string = "문제 텍스트";
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }

    action(target: any) : string {
        return target.call();
    }
}

export default Q1;