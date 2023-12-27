import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/tasks/:UserId" element={<TodoList />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
