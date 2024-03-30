import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/HomePage";
import NewExpensePage from "./pages/NewExpensePage";
import {Container} from "@mui/material";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
      <Container style={{padding: "50px"}}>
          <Router>
              <Routes>
                  <Route path="/" Component={Home}></Route>
                  <Route path="/newExpense" Component={NewExpensePage}></Route>
                  <Route path="/dashboard" Component={DashboardPage}></Route>
              </Routes>
          </Router>
      </Container>
  )
}

export default App
