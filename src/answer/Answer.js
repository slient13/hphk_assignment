// class Animal {}
class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    desc() {
        return `${this.name}(은/는) 개 입니다. 성별은 ${this.sex === 0 ? "수컷" : "암컷"}입니다.`;
    }

    cry() {
        return `${this.name}(이/가) "왈왈!"하고 짖었습니다.`;
    }

    smiling() {
        return `${this.name}(이/가) 신나서 헥헥거리며 당신을 쳐다보고 있습니다.`;
    }
}
// class Cat {}
// class Duck {}

export default class Answer {
    create(target, name, sex) {
        if (target === "Dog") return new Dog(name, sex);
        else if (target === "Cat") return new Cat(name, sex);
        else if (target === "Duck") return new Duck(name, sex);
        else if (target === "Animal") return new Animal(name, sex);
        else return undefined;
    }
}