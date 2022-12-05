

export const mockDataWarehouses = [
    {
        id: 1,
        name: "Bernoussi warehouse",
        location: "Street 34, N5, Bernoussi, Casablanca",
        phone_number: "+212 5 30 54 78 43",
        cells: 2000,

    },

    {
        id: 2,
        name: "Ain sbaa warehouse",
        location: "Street 179, N4, Ain sbaa, Casablanca",
        phone_number: "+212 5 22 56 83 99",
        cells: 5000,

    }
] 


export const mockDataTeam = [
    {
        id: 1,
        warehouse_id: 1,
        first_name: "Anas",
        last_name: "Amil",
        username: "Admin",
        email: "anasamaneellah1@gmail.com",
        phone_number: "+212 6 59 24 96 63",
        address: "Dar laman, block H150, N2, hay mohammadi, casablanca",
        salary: 15000,
        role: "admin"

    },

    {
        id: 2,
        warehouse_id: 1,
        first_name: "Mouhcine",
        last_name: "Dafiaa",
        username: "Mod",
        email: "mouhcinedafiaa1@gmail.com",
        phone_number: "+212 6 56 32 78 90",
        address: "El chelalate, 140, N4, Casablanca",
        salary: 4500,
        role: "employee"

    },

    {
        id: 3,
        warehouse_id: 1,
        first_name: "Rania",
        last_name: "Benlahcen",
        username: "Ran",
        email: "Raniabenlahcen1@gmail.com",
        phone_number: "+212 6 67 21 79 00",
        address: "Ain sbaa, 140, N2, Casablanca",
        salary: 4500,
        role: "employee"

    },
]

export const mockDataProduct = [
    {
        id: 1,
        warehouse_id: 1,
        product_name: "coce",
        quantity: 100,
        price: 10,
        mass: 250,
        date: "05-12-2022",
        cell_occupation: 1
    },
    {
        id: 2,
        warehouse_id: 2,
        product_name: "fanta",
        quantity: 200,
        price: 15,
        mass: 300,
        date: "04'-12-2022",
        cell_occupation: 2
    }
]