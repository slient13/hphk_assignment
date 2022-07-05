import Question from "./Question.js";
class Q3 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 3";
        const question_text = `두 클래스를 보니 동일하게 <code>name, sex</code> 속성을 가지고 있습니다. ` +
            `중복되는 코드를 줄이고자 공통된 부분을 모아 <code>Animal</code> 클래스로 분리하려고 합니다.<br/>` +
            `<code>Animal</code> 클래스는 <code>name, sex</code> 속성을 가지고 생성자로 입력을 받아 해당 값들을 초기화 합니다.` +
            `<code>Dog, Cat</code> 클래스에서는 <code>name, sex</code>를 직접 기입하는 대신 <code>Animal</code> 클래스를 상속하여 대신합니다.` +
            `최종적으로 1, 2번 문제의 결과가 동일하게 출력되면 정답이 됩니다. (단 <code>Animal</code> 클래스를 상속해야만 합니다.)`;
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        let output = "";
        let dog = target.create("Dog", "바둑이", 0);
        output +=
            `${dog.desc()}<br/>` +
                `${dog.cry()}<br/>` +
                `${dog.smiling()}<br/><br/>`;
        let cat = target.create("Cat", "때껄룩", 1);
        output +=
            `${cat.desc()}<br/>` +
                `${cat.cry()}<br/>` +
                `${cat.kneading()}<br/><br/>`;
        if (dog instanceof target.getType("Dog") && dog instanceof target.getType("Animal"))
            output += `<code>dog</code>는 <code>Dog</code>의 인스턴스인 동시에 <code>Animal</code>의 인스턴스 입니다.<br/>`;
        else if (dog instanceof target.getType("Dog"))
            output += `<code>dog</code>는 <code>Dog</code>의 인스턴스이지만 <code>Animal</code>의 인스턴스는 아닙니다.<br/>`;
        else
            output += `<code>dog</code>는 <code>Dog</code>의 인스턴스도 <code>Animal</code>의 인스턴스도 아닙니다.<br/>`;
        if (cat instanceof target.getType("Cat") && cat instanceof target.getType("Animal"))
            output += `<code>cat</code>는 <code>Dog</code>의 인스턴스인 동시에 <code>Animal</code>의 인스턴스 입니다.`;
        else if (cat instanceof target.getType("Cat"))
            output += `<code>cat</code>는 <code>Dog</code>의 인스턴스이지만 <code>Animal</code>의 인스턴스는 아닙니다.`;
        else
            output += `<code>cat</code>는 <code>Dog</code>의 인스턴스도 <code>Animal</code>의 인스턴스도 아닙니다.`;
        return output;
    }
}
export default Q3;
