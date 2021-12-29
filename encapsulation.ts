export class Animal
{

    //default public
    age: number;
    private legs: number;
    protected name: string;

    constructor(age: number, legs: number, name: string)
    {
        this.age = age;
        this.legs = legs;
        this.name = name;

    }

    public get ourLegs()
    {
       return this.legs;
    }
}

///Child 
export class Cat extends Animal
{
    lives: number = 9;

    constructor(age: number, legs: number, name: string)
    {
        super(age, legs, name);
    }

    public get ourName()
    {
       return this.name;
    }
}


const cat = new Cat(12, 4, 'Kitty');
cat.age;


//Not accessible
//cat.legs

//Not accessible
//cat.name


