const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What's up!" },
    { id: 3, message: "Hello!" },
    { id: 4, message: "How are your doing?!" },
    { id: 5, message: "Where is my money, Lebowski ?!" },
  ],
  newMessageBody: "",

  dialogsData: [
    { id: 1, name: "Olga" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Irina" },
    { id: 4, name: "John" },
    { id: 5, name: "Andrey" },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogReducer;
