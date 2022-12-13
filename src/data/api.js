import axios from "axios";
import { useEffect, useState } from "react";

// Get Warehouses
export const getWarehouses = () => {
    
  

      axios.get('http://127.0.0.1:8001/apip/warehouses')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    
}
