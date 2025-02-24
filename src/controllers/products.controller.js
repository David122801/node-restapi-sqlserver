import { getConnection, queries, sql } from '../database'


export const getProducts = async (req, res) => {
    try {

        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.senf(error.message);
    }
};


export const createNewProduct = async (req, res) => {

    const { name, description, } = req.body
    let { quantity } = req.body

    if (name == null || description == null) {
        return res.status(400).json({ msg: 'Bad request. por favore llena todos los campos' })
    }
    if (quantity == null) quantity = 0;

    try {
        const pool = await getConnection();

        await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(queries.addNewProduct)

        res.json({ name, description, quantity });
    } catch (error) {
        res.status(500);
        res.senf(error.message);
    }

};

export const getProductById = async (req, res) => {
    const { id } = req.params
    const pool = await getConnection();
    const result = await pool.request().input("Id", id).query(queries.getProductById);
    res.send(result.recordset[0]);
}


export const deleteProductById = async (req, res) => {

const {id} = req.params
const pool = await getConnection();
const result = await pool.request().input("Id" , id).query(queries.deleteProductById);
res.send(result.recordset[0]);

}