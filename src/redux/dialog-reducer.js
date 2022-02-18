const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "What's up!"},
        {id: 3, message: "Hello!"},
        {id: 4, message: "How are your doing?!"},
        {id: 5, message: "Where is my money, Lebowski ?!"},
    ],

    dialogsData: [
        {id: 1, name: "Olga"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Irina"},
        {id: 4, name: "John"},
        {id: 5, name: "Andrey"},
    ],
};

const dialogReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogReducer;
