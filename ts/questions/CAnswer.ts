abstract class Animal {
    name: string
    sex: number

    constructor(name: string, sex: number) {
        this.name = name;
        this.sex = sex;
    }

    abstract desc(): string;
    abstract cry(): string;
}

class Dog extends Animal {
    constructor(name: string, sex: number) { super(name, sex); }

    desc(): string {
        return `${this.name}(은/는) 개 입니다. 성별은 ${this.sex === 0 ? "수컷" : "암컷"}입니다.`;
    }

    cry(): string {
        return `${this.name}(이/가) "왈왈!"하고 짖었습니다.`;
    }

    smiling(): string {
        return `${this.name}(이/가) 신나서 헥헥거리며 당신을 쳐다보고 있습니다.`;
    }
}

class Cat extends Animal {
    constructor(name: string, sex: number) { super(name, sex); }

    desc(): string {
        return `${this.name}(은/는) 고양이 입니다. 성별은 ${this.sex === 0 ? "수컷" : "암컷"}입니다.`;
    }

    cry(): string {
        return `${this.name}(이/가) "야옹~" 하고 울었습니다.`;
    }

    kneading(): string {
        return `${this.name}(이/가) 꾹꾹이를 해줬습니다.`;
    }
}
class Duck extends Animal{
    constructor(name: string, sex: number) {super(name, sex);}

    desc(): string {
        return `${this.name}(은/는) 오리 입니다. 성별은 ${this.sex === 0 ? "수컷" : "암컷"}입니다.`;
    }

    cry(): string {
        return `${this.name}(이/가) "꽥꽥" 하고 울었습니다.`;
    }

    waddle(): string {
        return `${this.name}(이/가) 뒤뚱뒤뚱 걸어다닙니다.`;
    }
}

export default class Answer {
    create(target: string, name: string, sex: number): Dog | Cat | Duck | Animal | undefined {
        if (target === "Dog") return new Dog(name, sex);
        else if (target === "Cat") return new Cat(name, sex);
        else if (target === "Duck") return new Duck(name, sex);
        else if (target === "Animal") return undefined // new Animal(name, sex); // typescript 환경에서 컴파일이 거부되어 수정.
        else return undefined;
    }

    getType(target: string): typeof Dog | typeof Cat | typeof Duck | typeof Animal | undefined {
        if (target === "Dog") return Dog;
        else if (target === "Cat") return Cat;
        else if (target === "Duck") return Duck;
        else if (target === "Animal") return Animal;
        else return undefined;
    }
}