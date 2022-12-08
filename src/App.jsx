import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Appbar from "./pages/global/Appbar";
import Dashboard from "./pages/Dashboard";
 import Warehouses from "./pages/Warehouses";
// import Employees from "./pages/Employees";
// import Products from "./pages/Products";
// import AddEmployee from "./pages/AddEmployee";
 import { Route, Routes } from "react-router-dom";


const App = () => {

  const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <div className="app">
              <Appbar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/warehouses" element={<Warehouses/>} />
                {/* <Route path="/employees" element={<Employees/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/add_employee" element={<AddEmployee/>} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      )
}

export default App

