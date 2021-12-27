class Person {
    firstName;
    middleName;
    lastName;
    fullNamePieces;
    id;
    personService;

    constructor(data, personService)
    {
        this.firstName = data.firstName || '';
        this.middleName = data.middleName || '';
        this.lastName = data.lastName || '';
        this.id = data.id;
        this.personService = personService;
        this.fullNamePieces = [data.firstName, data.middleName, data.lastName];
    }

    get fullName()
    {
        if(this.middleName.length > 0)
        {
            return `${this.firstName} ${this.middleName[0]} ${this.lastName}`;
        }

        return `${this.firstName} ${this.lastName}`;
    }

    sayMyName()
    {
        window.alert(this.fullName);
    }

    getCodeName()
    {
        const isATestinhGod = confirm('Are you a testing god?');

        if(isATestinhGod)
        {
            return 'TESTING GOD!';
        }
        else
        {
            return 'NOT TESTING GOD!';
        }
    }

    async getFullUserData() {
        return this.personService.getUserById(this.id);
    }
}