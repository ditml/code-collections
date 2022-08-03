import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer />
        {/* <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer/>
        <NewCakeContainer />
        <ItemContainer />
        <ItemContainer cake/> */}
      </div>
    </Provider>
  );
}
