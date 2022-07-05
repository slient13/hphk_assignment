import Question from "./Question.js";
class Q1 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 1";
        const question_text = `당신은 개에 대한 정보를 담은 <code>Dog</code> 클래스를 만드려고 합니다.<br/>` +
            `<code>Dog</code> 클래스에는 <code>name, sex</code> 2개의 속성이 포함되어야 합니다. ` +
            `두 속성은 생성자로부터 입력 받아 할당되어야 합니다.<br/>` +
            `<code>Dog</code> 클래스는 <code>cry, smiling</code> 2개의 메소드를 가져야 합니다. ` +
            `<code>cry</code> 함수는 인수 없이 특정 문자열을 반환하는 함수입니다. 모범 출력을 참고해주세요. ` +
            `<code>smiling</code> 함수는 인수 없이 특정 문자열을 반환하는 함수입니다. 모범 출력을 참고해주세요. ` +
            `위 조건을 충족하도록 <code>Dog</code> 클래스를 완성시켜주시기 바랍니다.`;
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        let dog = target.create("Dog", "바둑이", 0);
        return "" +
            `${dog.desc()}<br/>` +
            `${dog.cry()}<br/>` +
            `${dog.smiling()}`;
    }
}
export default Q1;
