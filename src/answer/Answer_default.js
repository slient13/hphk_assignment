// class Animal {}
// class Dog {}
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