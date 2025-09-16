import data from "./data/data.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlertsContext, AlertsProvider } from "./context/AlertContext.jsx";
import AlertPage from "./components/AlertPage.jsx";


import { useContext } from "react";
import AlertDetailPage from "./components/AlertPageDetail.jsx";

const App = () => {
  
  return (
    <>
      <AlertsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/alerts" />}></Route>
            <Route path="/alerts" element={<AlertPage />}></Route>
            <Route path="alerts/:id" element={<AlertDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AlertsProvider>
    </>
  );
};

export default App;
