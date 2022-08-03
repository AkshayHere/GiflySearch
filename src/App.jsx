import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={"/"} element={<MainPage />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
