import Question from "./Question.js";
class Q1 extends Question {
    constructor(C_target, A_target) {
        const title = "문제 1 : 클래스 생성";
        const question_text = "당신은 자기 관리를 위한 프로그램을 만들기로 하였습니다. " +
            "자기 관리를 위해서는 [할 일]에 대한 정보를 관리할 수 있어야 합니다. " +
            "[할 일] 정보를 다루기 위한 클래스의 이름은 [ToDo]로 하며, default로 export 하도록 합니다. " +
            "[ToDo] 클래스에는 다음과 같은 속성이 있습니다. 각 속성의 이름은 예시로 반드시 일치할 필요는 없습니다. { " +
            "[title]은 해당 할 일의 제목을 의미합니다. " +
            "[description]은 해당 할 일의 상세한 설명을 의미합니다. " +
            "[startDate]는 시작일을 표현하는 속성입니다. Date 유형입니다. " +
            "[endDate]는 종료일을 표현하는 속성입니다. Date 유형입니다. " +
            "} " +
            "[ToDo] 클래스에는 다음과 같은 메소드가 포함되어 있습니다. { " +
            "생성자가 존재하며, 생성자는 위 속성을 기술한 순서대로 인수를 받아 자신의 속성에 대입합니다. " +
            "[show()] 메소드는 해당 할 일에 대한 설명을 출력합니다. 출력 유형은 모범 답안의 출력형을 참고해주세요. " +
            "} " +
            "이상의 조건에 해당하는 클래스 [ToDo]를 구현해주시기 비랍니다. " +
            "(테스트 코드는 정해진 형태로 [ToDo] 클래스의 객체를 생성하고 [show()] 메소드를 호출할 것입니다.)";
        super(title, question_text);
        this.C_target = C_target;
        this.A_target = A_target;
    }
    action(target) {
        return target.action();
    }
}
export default Q1;
