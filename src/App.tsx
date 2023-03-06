import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./containers/home/home"
import { Login } from "./containers/login/login"

import { AppWrapper } from "./components/AppWrapper"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route 
          path="/" 
          element={
            <AppWrapper>
              <Home />
            </AppWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
