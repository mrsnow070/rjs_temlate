import React from "react";
import Navigator from "./navigation/Navigator";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigator />
      </div>
    </Provider>
  );
}

export default App;
