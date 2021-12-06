import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  // выносим постДата выше по иерархии и прокидываем их в пропсы в App
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/*<Route path="/dialogs" component={Dialogs} />*/}
          {/*<Route path="/profile" component={Profile} />*/}
          {/*меняем компонент на рендер, в рендер передается стрелочная функция*/}
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
                // dialogs={props.appState.messagesPage.dialogsData}-эти две строки конвертируем в одну
                // messages={props.appState.messagesPage.messagesData}-за счет общей папки messagesPage

                store={props.store}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
