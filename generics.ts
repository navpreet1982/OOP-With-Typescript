export class User<T>
{
    name: string;
    age: number;
    email: string;
    isMale: boolean;
    public classicUserData: any;

    
    public mergeClassicUser(params: T): void
    {
       const { name, isMale, age, email: string} = this;

       this.classicUserData = { name, isMale, age, email: string, ...params} ;
    }
}

interface ClassicUser {
    name: { first: string; last: string}
}

interface ClassicUser2 {
    name: { first: string; middle: string; last: string}
}


const user1 = new User<ClassicUser>();
user1.classicUserData({ name: { first: 'Navpreet', last: 'Singh'}});
console.log(user1.classicUserData.name.first);

const user2 = new User<ClassicUser2>();
user2.classicUserData({ name: { first: 'Navpreet', middle: 'Singh', last: 'Saini'}});
console.log(user2.classicUserData.name.middle);
