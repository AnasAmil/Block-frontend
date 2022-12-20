import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, useTheme } from "@mui/material";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { colorCodes } from "../../theme";

const Warehouse = ({ userConnected }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = colorCodes(theme.palette.mode);
  const { id } = useParams();
  const { pathname } = useLocation();
  const [warehouse, setWarehouse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8001/apip/warehouses/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          id: id,
        },
      })
      .then((res) => {
        setWarehouse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      field: "products",
      headerName: "Product Name",
      width: 150,
      renderCell: ({ row: products }) => (
        <Box>
          {products.map((product) => (
            <h1>{product}</h1>
          ))}
        </Box>
      ),
    },
  ];

  const rows = warehouse;

  const DeleteWarehouse = () => {
    axios
      .delete(`http://127.0.0.1:8001/apip/warehouses/${id}`)
      .then(() => navigate("/warehouses"));
  };

  return (
    <>
      <Box m="0 0 0 20px">
        <Header
          title={warehouse.warehouseName}
          subtitle="Warehouse informations"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: "20px",
          width: "90%",
        }}
      >
        <Button
          component={Link}
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: "bold",
            mb: "20px",
          }}
          to={`${pathname}/add_product`}
        >
          Add Product
        </Button>
      </Box>

      <Box
        sx={{
          width: "80%",
          height: 400,
          m: "0 auto",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnSelector
          disableSelectionOnClick
        />
      </Box>

      {userConnected.role == "Admin" && (
        <Box
          sx={{
            width: "80%",
            m: "30px auto 0px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            component={Link}
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
            }}
            to={`${pathname}/update`}
          >
            Edit Warehouse
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{
              fontWeight: "bold",
            }}
            onClick={DeleteWarehouse}
          >
            Delete Warehouse
          </Button>
        </Box>
      )}

      
    </>
  );
};

export default Warehouse;
