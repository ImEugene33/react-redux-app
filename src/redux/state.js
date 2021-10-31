const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const addPost = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, that is my first post", likesCount: "♥ 10 " },
        { id: 2, message: "I was launch my spaceship", likesCount: "♥ 15 " },
        { id: 3, message: "Tesla is the best e-car", likesCount: "♥ 100 " },
      ],
      newPostText: "MurzakoiEvgenii",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: "♥ 0",
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "";
      this._state.messagesPage.messagesData.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: addPost });
export const updateNewPostTextActionCreator = (text) => ({
  type: updateNewPostText,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default store;
