import React from "react";
import LoginForm from "../components/LoginForm";

class LoginUI {
  DisplayLoginUI() {
    return <LoginForm />;
  }
}

// Using the class to render in a functional React component
const loginUI = new LoginUI();

const App = () => {
  return loginUI.DisplayLoginUI();
};

export default App;
