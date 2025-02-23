import { getProductById } from "../controllers/products.controller";




export const queries = {

    getAllProduct: 'SELECT * FROM Products',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name,@description,@quantity)',
    getProductById: "SELECT  * FROM Products WHERE Id = @Id",

}