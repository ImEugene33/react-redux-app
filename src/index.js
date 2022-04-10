import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BlogJsApp from './App';

ReactDOM.render(
    <React.StrictMode>
        <BlogJsApp/>
    </React.StrictMode>,
    document.getElementById("root")
);

// renderEntireTree(store.getState());

// store.subscribe(() => {
//   let stat = store.getState();
//   renderEntireTree(stat);
// });
