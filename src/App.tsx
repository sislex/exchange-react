import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Auth from "./rotes/Auth";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="auth" element={<Auth />} />
              <Route path="*" element={ <Navigate to="/auth" /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
