import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import {StyledEngineProvider} from '@mui/material/styles';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <App/>
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// renderEntireTree(store.getState());

// store.subscribe(() => {
//   let stat = store.getState();
//   renderEntireTree(stat);
// });
