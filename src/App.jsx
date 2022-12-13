import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Appbar from "./pages/global/Appbar";
import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouses";
import Warehouse from "./pages/Warehouse"
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Products from "./pages/Products";
import AddWarehouse from "./pages/AddWarehouse"
import UpdateWarehouse from "./pages/UpdateWarehouse";
import AddProduct from "./pages/AddProduct";
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
                <Route path="/warehouses/:id" element={<Warehouse/>} />
                <Route path="/warehouses/:id/update" element={<UpdateWarehouse />} />
                <Route path="/add_warehouse" element={<AddWarehouse/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/warehouses/:id/add_product" element={<AddProduct/>} />
                <Route path="/add_employee" element={<AddEmployee/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      )
}

export default App

