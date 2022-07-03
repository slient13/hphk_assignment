class Todo {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;

    constructor(title: string, description: string, startDate: Date, endDate: Date) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    show(): string {
        let output = "";
        output += `title: ${this.title}<br/>`;
        output += `description: ${this.description}<br/>`;
        output += `startDate: ${this.startDate}<br/>`;
        output += `endDate: ${this.endDate}<br/>`;
        output += `end`;

        return output;
    }
}

class CAnswer {
    action(): string {
        const todo = new Todo(
            "화분 물주기",
            "작은 화분은 반컵, 큰 화분은 두컵씩",
            new Date("2022-07-04"),
            new Date("2022-07-04"),
        )
        return todo.show();
    }
}

export default CAnswer;