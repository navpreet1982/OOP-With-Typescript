
export class Message {

    //could not override
    readonly id: string;
    title: string;
    message: string;
    isSent: boolean;

    constructor(id: string)
    {
        this.id = id;

    }
}

const message = new Message('111');

// not possible
//message.id = 'ddd'