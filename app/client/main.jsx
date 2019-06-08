import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Provider } from "react-redux";
import { render } from 'react-dom';
import Index from "./components/index";
import configureStore from "./store/configure_store";

const store = configureStore();

Meteor.startup(() => {
  console.log(configureStore)
  render(
    <Provider store={store}>
      <Index />
    </Provider>,
    document.getElementById('react-target')
  );
});
