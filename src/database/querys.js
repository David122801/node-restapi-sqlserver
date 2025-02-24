import { deleteProductById, getProductById } from "../controllers/products.controller";




export const queries = {

    getAllProducts: "SELECT * FROM Products",
    addNewProduct: "INSERT INTO Products (name, description, quantity) VALUES (@name,@description,@quantity)",
    getProductById: "SELECT  * FROM Products WHERE Id = @Id",
    deleteProductById: "DELETE FROM [webstore].[dbo].[Products] WHERE Id = @Id",
    getTotalProducts: "SELECT COUNT (*) FROM [webstore].[dbo].[Products]",
    updateProcuctsById: "UPDATE Products SET  Name = @name, Description= @description, Quantity = @quantity  WHERE Id = @Id",

}