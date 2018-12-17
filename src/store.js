import { createStore, compose, } from "redux";

import rootReducer from "./reducers/index";

const enhancers = compose(
  window.devToolExtension ? window.devToolExtension() : f => f
)

const store = createStore(rootReducer, { }, enhancers);

if(module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
