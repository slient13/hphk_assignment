import Question from "./Question.js";
class Q2 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 2";
        const question_text = `당신은 고양이에 대한 정보를 담은 <code>Cat</code> 클래스를 만드려고 합니다.<br/>` +
            `<code>Cat</code> 클래스에는 <code>name, sex</code> 2개의 속성이 포함되어야 합니다. ` +
            `두 속성은 생성자로부터 입력 받아 할당되어야 합니다.<br/>` +
            `<code>Cat</code> 클래스는 <code>cry, kneading</code> 2개의 메소드를 가져야 합니다. ` +
            `<code>cry</code> 함수는 인수 없이 특정 문자열을 반환하는 함수입니다. 모범 출력을 참고해주세요. ` +
            `<code>kneading</code> 함수는 인수 없이 특정 문자열을 반환하는 함수입니다. 모범 출력을 참고해주세요. ` +
            `위 조건을 충족하도록 <code>Cat</code> 클래스를 완성시켜주시기 바랍니다.`;
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        let cat = target.create("Cat", "때껄룩", 1);
        return "" +
            `${cat.desc()}<br/>` +
            `${cat.cry()}<br/>` +
            `${cat.kneading()}`;
    }
}
export default Q2;
