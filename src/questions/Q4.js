import Question from "./Question.js";
class Q4 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 4";
        const question_text = `두 클래스를 보니 <code>desc(), cry()</code> 메소드가 공통되게 포함되어 있습니다. ` +
            `<code>Animal</code> 클래스를 상속받는 다른 클래스들도 동일한 메소드를 가지고 있도록 하면 ` +
            `해당 클래스들을 특별히 구분하지 않고 마치 <code>Animal</code>이라는 클래스 하나만 있는 것처럼 활용할 수 있습니다.<br/>` +
            `이러한 약속을 만들기 위해 <code>Animal</code> 클래스에 ` +
            `<code>desc(), cry()</code> 메소드를 몸체가 정의되지 않은 추상 메소드 형태로 추가하여 <code>Animal</code> 클래스를 추상 클래스로 만들어주시기 바랍니다.`;
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        let output = "";
        let dog = target.create("Dog", "바둑이", 0);
        let cat = target.create("Cat", "때껄룩", 1);
        try {
            let animal = target.create("Animal");
            if (animal === undefined)
                throw "생성 실패";
            output += `<code>Animal</code>이 추상 클래스가 아닙니다.<br/><br/>`;
        }
        catch (e) {
            output += `<code>Animal</code>은 추상 클래스이기 때문에 <code>Animal</code> 유형의 인스턴스는 생성할 수 없습니다.<br/><br/>`;
        }
        output +=
            `${dog.desc()}<br/>` +
                `${dog.cry()}<br/>` +
                `${cat.desc()}<br/>` +
                `${cat.cry()}`;
        return output;
    }
}
export default Q4;
