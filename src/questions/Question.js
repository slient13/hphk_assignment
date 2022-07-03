class Question {
    constructor(title, contents) {
        this.title = title;
        this.contents = contents;
        this.C_target = undefined;
        this.A_target = undefined;
        this.C_target_output = undefined;
        this.A_target_output = undefined;
    }
    get_title() {
        return this.title;
    }
    get_contents() {
        return this.contents;
    }
    check() {
        if (this.get_answer(true) === this.get_answer(false)) {
            return true;
        }
        else
            return false;
    }
    get_answer(isCorrectAnswer) {
        if (isCorrectAnswer) {
            if (this.C_target_output === undefined)
                this.C_target_output = this.output_answer(this.C_target);
            return this.C_target_output;
        }
        else {
            if (this.A_target_output === undefined)
                this.A_target_output = this.output_answer(this.A_target);
            return this.A_target_output;
        }
    }
    output_answer(target) {
        let output = "";
        try {
            output = this.action(target);
        }
        catch (error) {
            if (error instanceof Error)
                output = "에러 발생. 코드: " + error.name;
        }
        finally {
            if (output === undefined)
                output = "에러 발생";
        }
        return output;
    }
}
export default Question;
