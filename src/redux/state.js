// три отдельных массива с объектами запаковали в один объект
let renderEntireTree = () => {};

let state = {
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
    dialogsData: [
      { id: 1, name: "Olga" },
      { id: 2, name: "Ivan" },
      { id: 3, name: "Irina" },
      { id: 4, name: "John" },
      { id: 5, name: "Andrey" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: "♥ 0",
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};
export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
