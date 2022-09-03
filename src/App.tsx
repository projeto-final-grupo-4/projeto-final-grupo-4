
import React from "react";
import "./App.css";
import DashboardProvider from "./context/dashboardContext";
import CommunityProvider from "./context/CommunityContext";
import MainRoutes from "./routes";
import GlobalStyle from "./styles";


function App() {
  return (
    <>

      <DashboardProvider>
        <CommunityProvider>
          <GlobalStyle />
          <MainRoutes />
        </CommunityProvider>
      </DashboardProvider>

    </>
  );
}

export default App;
