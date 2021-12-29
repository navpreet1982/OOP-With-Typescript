export class Animal
{
    age: number;
    legs: number;
    name: string;
    lives: number = 1;

    constructor(age: number, legs: number, name: string)
    {
        this.age = age;
        this.legs = legs;
        this.name = name;

    }

    meow(): string {
        return "MEOW";
    }


}

///Child 1
export class Dog extends Animal
{
    constructor(age: number, legs: number, name: string)
    {
        super(age, legs, name);
    }

    woff(): string {

        //overridden methods
        super.meow();

        return "WOFF!";
    }

}

const dog = new Dog(2, 4, 'Pony');
dog.age;
dog.woff();

///Child 2
export class Cat extends Animal
{
    lives: number = 9;

    constructor(age: number, legs: number, name: string)
    {
        super(age, legs, name);
    }

    meow(): string {
        return "MEOW";
    }

}

const cat = new Cat(12, 4, 'Kitty');
cat.age;
cat.meow();


///Implement => Shape mathcing
export class CatImp implements Animal
{
    // NOTE:need to define base propertied again => Shape mathcing
    age: number;
    legs: number;
    name: string;
    lives: number;

    meow(): string {
        return "MEOW";
    }

}