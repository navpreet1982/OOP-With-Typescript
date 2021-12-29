export class user
{
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }

    get fullName(): string {
        return `${this.firstName} | ${this.lastName}`;
    }

    checkCurrentEmail(email: string): boolean
    {
        return this.email === email;
    }
}

const usr = new user('Navpreet', 'Singh', 'navpreet1982@gmail.com');

console.log(usr.fullName);

const res = usr.checkCurrentEmail('navpreet1982@gmail.com');

console.log(res);