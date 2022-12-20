import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Appbar from "./pages/global/Appbar";
import Dashboard from "./pages/Dashboard";
import Warehouses from "./pages/Warehouses";
import Warehouse from "./pages/Warehouse";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Products from "./pages/Products";
import AddWarehouse from "./pages/AddWarehouse";
import UpdateWarehouse from "./pages/UpdateWarehouse";
import AddProduct from "./pages/AddProduct";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isloggedin, setIsloggedin] = useState(false);
  const [userConnected, setUserConnected] = useState({});

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {isloggedin ? (
          <div className="app">
            <Appbar userConnected={userConnected} />
            <main className="content">
              <Topbar isloggedin={isloggedin} setIsloggedin={setIsloggedin} userConnected={userConnected} />
              <Routes>
                {userConnected.role == 'Admin' ? (
                  <Route path="/" element={<Dashboard />} />
                ) : (
                  <Route path="/warehouses" element={<Warehouses userConnected={userConnected} />} />
                )}
                <Route path="/profile/:id" element={<Profile userConnected={userConnected} />} />
                <Route path="/warehouses" element={<Warehouses userConnected={userConnected} />} />
                <Route path="/warehouses/:id" element={<Warehouse userConnected={userConnected} />} />
                <Route
                  path="/warehouses/:id/update"
                  element={<UpdateWarehouse />}
                />
                <Route path="/add_warehouse" element={<AddWarehouse userConnected={userConnected} />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/warehouses/:id/add_product"
                  element={<AddProduct />}
                />
                <Route path="/add_employee" element={<AddEmployee />} />
              </Routes>
            </main>
          </div>
        ) : (
          <>
            <Topbar />
            <Routes>
              <Route
                path="/"
                index
                element={<Authentication setIsloggedin={setIsloggedin} setUserConnected={setUserConnected} />}
              />
            </Routes>
          </>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
