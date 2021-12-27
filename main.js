
//grouping
describe(`${Person.name} Class`, () => {

    it('exists', async () => {
        expect(Person).toBeDefined();
    });

    let model;
    let mockPersonService;

    //Runs before every test case in group
    beforeEach(() => 
    {

        const data = { 
            firstName: null,
            middleName: null,
            lastName: null,
         };

        model = new Person(data);

        console.log('Before each');

    });

    //it vs fit => focus
    //fdescribe('default values', () => 
    describe('default values', () => 
    {

        //Test 1
        
        //it vs fit => focus
        //fit('first name defaults to empty string', () => {
        it('first name defaults to empty string', () => {

            //arrange
            //const data = { firstName: null };

            //action 
            //const model = new Person(data);

            //assert
            expect(model.firstName).toBe('');

        });

        //Test 2
        it('middle name defaults to empty string', () => {

            //arrange
            //const data = { middleName: null };

            //action 
            //const model = new Person(data);

            //assert
            expect(model.middleName).toBe('');

        });

        //Test 3
        it('last name defaults to empty string', () => {

            //arrange
            //const data = { lastName: null };

            //action 
            //const model = new Person(data);

            //assert
            expect(model.lastName).toBe('');

        });
    });

    
    //x => disabled
    //xdescribe('full Name', () => 
    describe('full Name', () => 
    {

        beforeEach(() => {
    
            model = new Person({ 
                firstName: 'Navpreet',
                lastName: 'Saini',
             });
    
            console.log('Before each');
    
        });
    

         //Test 1
         //x => disabled
         //xit('middle initial when middle name is defined with first and last', () => {
            it('middle initial when middle name is defined with first and last', () => {

            model.middleName = 'Singh';

            const result = model.fullName;

            //audit
            const { firstName: fn , middleName: mn, lastName: ln } = model;

            //assert
            expect(result).toBe(`${fn} ${mn[0]} ${ln}`);

        });

        //Test 2
        it('when NO middle name is defined return first and last', () => {

            model.middleName = '';

            const result = model.fullName;

            //audit
            const { firstName: fn, lastName: ln } = model;

            //assert
            expect(result).toBe(`${fn} ${ln}`);            
        });

    });


    describe('say my name', () => 
    {

        beforeEach(() => {
    
            model = new Person({ 
                firstName: 'Navpreet',
                middleName: 'Singh',
                lastName: 'Saini',
             });
    
            console.log('Before each');
    
        });

        //Test 1
        it('when NO middle name is defined return first and last', () => {

            //spy on DOM
            spyOn(window, 'alert');

            model.sayMyName();

            //assert function
            //expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith(model.fullName);
        });

    });

    describe('get code name', () => 
    {

        beforeEach(() => {
    
            model = new Person({ 
                firstName: 'Navpreet',
                middleName: 'Singh',
                lastName: 'Saini',
             });
    
            console.log('Before each');
    
        });

        //Test 1
        it('testing god yes', () => {

            //spy on DOM
            spyOn(window, 'confirm').and.returnValue(true);

            //act
            const result = model.getCodeName();

            //assert function
            //expect(window.alert).toHaveBeenCalled();
            expect(result).toBe('TESTING GOD!');
        });

         //Test 2
         it('testing god no', () => {

            //spy on DOM
            spyOn(window, 'confirm').and.returnValue(false);

            //act
            const result = model.getCodeName();

            //assert function
            //expect(window.alert).toHaveBeenCalled();
            expect(result).toBe('NOT TESTING GOD!');
        });

    });

    describe('get mock data', () => {

        beforeEach(() => {

            const data = { 
                firstName: 'Navpreet',
                middleName: 'Singh',
                lastName: 'Saini',
                id: 1,
             };
    
            mockPersonService = {
                lastId: null,
                user: {},
                getUserById(id) {
                    this.lastId = id;
                    return this.user;  
                }
            };
            model = new Person(data, mockPersonService);
        });

        describe('getFullUserData', () => 
        {

            //Test 1
            it('gets User Data by id', async () => {

                //arrange
                mockPersonService.lastId = null;
                mockPersonService.user = { 
                    firstName: 'Navpreet',
                    middleName: 'Singh',
                    lastName: 'Saini',
                    id: 1,
                 };

                //act
                const result = await model.getFullUserData();

                //assert
                expect(mockPersonService.lastId).toBe(1);

            });

        });

    });


    describe('Additional Matchers', () => {

        it('gets full name pieces', () => {

            //arrange
            const firstName = 'navpreet';
            const middleName = 'Singh';
            const lastName = 'Saini';

            //act
            model = new Person({firstName, middleName, lastName });

            //assert
            expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);

        });

    });
});