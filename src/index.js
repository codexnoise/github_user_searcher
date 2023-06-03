import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter >
            <Routes>
                <Route path="/github_user_searcher" element={<App />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
        </Provider>
  </React.StrictMode>
);