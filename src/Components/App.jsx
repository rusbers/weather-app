import React from "react"
import { WeatherPage } from "../Pages/WeatherPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout"
import { HelpPage } from '../Pages/HelpPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WeatherPage />} />
          <Route path='help-page' element={<HelpPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
