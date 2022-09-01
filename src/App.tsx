
import React from "react";
import "./App.css";
import DashboardProvider from "./context/dashboardContext";
import MainRoutes from "./routes";
import GlobalStyle from "./styles";


function App() {
  return (
    <>

      <DashboardProvider>
        <GlobalStyle />
        <MainRoutes />
      </DashboardProvider>

    </>
  );
}

export default App;
