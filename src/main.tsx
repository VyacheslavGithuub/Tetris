import React from 'react';
import ReactDOM from 'react-dom';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import MainLayout from "./mainLayout/MainLayout";

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById("root")
);
