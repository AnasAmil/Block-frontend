import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/Dashboard";
// import Employees from "./pages/Employees";
// import Warehouses from "./pages/Warehouses";
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
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                {/* <Route path="/employees" element={<Employees/>} />
                <Route path="/warehouses" element={<Warehouses/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/add_eployee" element={<AddEmployee/>} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      )
}

export default App

