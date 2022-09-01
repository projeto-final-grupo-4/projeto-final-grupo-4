import React from "react";
import "./App.css";
import MainRoutes from "./routes";
import GlobalStyle from "./styles";
import CommunityProvider from "./contexts/CommunityContext";

function App() {
  return (
      <CommunityProvider>
        <GlobalStyle />
        <MainRoutes />
      </CommunityProvider>
  );
}

export default App;
