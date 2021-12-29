export class User
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

}

class BaseUser  extends User
{
    protected role: string;

    public hasAllAccess(): boolean{

        return this.role === 'Admin';

    }

}

class SuperAdmin  extends BaseUser
{
    //overriding
    role = 'Admin'
    password: string;

    constructor(firstName: string, lastName: string, email: string)
    {
       super(firstName, lastName, email);

    }

    //override
    public hasAllAccess(): boolean{

        return true;

    }

    //overloading not possible in js or ts
    //public hasAllAccess(user: User): boolean{
    //    return true;
    //}
}