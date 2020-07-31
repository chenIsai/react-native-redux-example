import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import Counter from "./App";

import configureStore from "./Redux/store/store";

const store = configureStore();

const ReduxExample = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => ReduxExample);
