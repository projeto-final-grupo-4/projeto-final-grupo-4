import React from "react";
import "./App.css";
import DashboardProvider from "./context/dashboardContext";
import CommunityProvider from "./context/CommunityContext";
import MainRoutes from "./routes";
import GlobalStyle from "./styles";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <DashboardProvider>
        <CommunityProvider>
          <GlobalStyle />
          <MainRoutes />
          <ToastContainer />
        </CommunityProvider>
      </DashboardProvider>
    </>
  );
}

export default App;
