import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { AppRoutes } from "./routes";
import { Header } from "./components/Header/Header";
import { useSelector } from "react-redux";

const App = () => {
  const selectedUser = useSelector(
    (state) => state.search.searchParams.selectedUserUrl
  );

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes selectedUser={Boolean(selectedUser)} />
    </>
  );
};

export default App;
