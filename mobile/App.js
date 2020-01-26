import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import configureStore from "./src/store/configureStore";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
