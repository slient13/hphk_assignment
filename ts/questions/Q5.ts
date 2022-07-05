import Question from "./Question.js";

class Q5 extends Question {
    constructor(C_target: any, A_target: any) {
        const title: string = "문제 5";
        const question_text: string =
            `개와 고양이 말고 오리에 대한 정보를 담은 클래스를 하나 추가하려 합니다. ` +
            `오리의 정보를 담은 클래스 [Duck]을 정의하시기 바랍니다.<br/>` +
            `[Duck] 클래스는 [Animal] 클래스를 상속받습니다. [desc(), cry()] 메소드의 출력은 모범 답안을 참고해주시기 바랍니다.<br/>` +
            `[Duck] 클래스는 [waddle] 이라는 고유한 메소드를 가지고 있습니다. 출력은 모범 답안 마지막 줄을 참고해주시기 바랍니다.`
            ;
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }

    action(target: any): string {
        let output: string = "";

        let duck = target.create("Duck", "꽥꽥이", 0);
        
        
        output +=
        `${duck.desc()}<br/>` +
        `${duck.cry()}<br/>` +
        `${duck.waddle()}<br/><br/>`

        if (duck instanceof target.getType("Duck") && duck instanceof target.getType("Animal"))
            output += `<code>duck</code>는 <code>Duck</code>의 인스턴스인 동시에 <code>Animal</code>의 인스턴스 입니다.<br/>`
        else if (duck instanceof target.getType("Duck"))
            output += `<code>duck</code>는 <code>Duck</code>의 인스턴스이지만 <code>Animal</code>의 인스턴스는 아닙니다.<br/>`
        else
            output += `<code>duck</code>는 <code>Duck</code>의 인스턴스도 <code>Animal</code>의 인스턴스도 아닙니다.<br/>`

        return output;
    }
}

export default Q5;