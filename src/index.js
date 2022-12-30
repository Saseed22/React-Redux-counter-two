import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";

const statePrimary = {
  count: 0,
};
const store = legacy_createStore(reduser);

//reduser
function reduser(state = statePrimary, action) {
  switch (action.type) {
    case "INCEREMENT":
      return { count: state.count + action.num };
    case "DECEREMENT":
      return { count: state.count - action.num };
    default:
      return state;
  }
}
//end of reduser

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
