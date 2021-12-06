import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let renderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let stat = store.getState();
    renderEntireTree(stat);
});
