abstract class Question {
    protected title: string;
    protected contents: string;
    protected C_target: any;    
    protected A_target: any;
    protected C_target_output: string | undefined;
    protected A_target_output: string | undefined;

    constructor(title: string, contents: string) {
        this.title = title;
        this.contents = contents;
        this.C_target = undefined;
        this.A_target = undefined;
        this.C_target_output = undefined;
        this.A_target_output = undefined;
    }

    get_title() : string {
        return this.title;
    }

    get_contents() : string {
        return this.contents;
    }

    check() : boolean {
        if (this.get_answer(true) === this.get_answer(false)) {
            return true;
        }
        else return false;
    }

    get_answer(isCorrectAnswer : boolean): string {
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

    output_answer(target: any): string {
        let output: string = "";
        try {
            output = this.action(target);
        } catch(error) {
            if (error instanceof Error)
                output = "에러 발생. 코드: " + error.name;
        } finally {
            if (output === undefined) output = "에러 발생";
        }
        return output;
    }

    abstract action(target: any): string;
}

export default Question;