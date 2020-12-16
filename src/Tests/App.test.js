import { render } from "@testing-library/react";

//Store
import { createStore } from "redux";

//Provider
import { Provider } from "react-redux";

//Reducer
import AllReducers from "../Reducers";

//App
import App from "../App";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
