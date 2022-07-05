export default class Footer {
    constructor(check_list) {
        this.state = {
            check_list: check_list,
        };
    }
    render() {
        let output = "";
        output += `<div class="back_panel">`;
        for (let i = 0; i < this.state.check_list.length; ++i) {
            output +=
                `<div class="display ${this.state.check_list[i] === true ? "clear" : "fail"}" id="q1_display">
                    <p>${this.state.check_list[i] === true ? "O" : "X"}</p>
                </div>`;
        }
        output += `</div>`;
        return output;
    }
}
