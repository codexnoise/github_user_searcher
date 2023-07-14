import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

const GitHubUserSearcher = () => {
    return (
    <BrowserRouter >
        <Routes>
          <Route path="/github_user_searcher" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>)
}

ReactDOM.render(<GitHubUserSearcher/>, document.getElementById("app"));
