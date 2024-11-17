import React from "react";
import Header from "./components/Header";
import logo from './assets/header-logo.svg'

export const App = () => {
  return (
    <div>
      <Header logo={logo} />
    </div>
  );
};
