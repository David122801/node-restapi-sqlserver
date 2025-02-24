import { Router } from 'express'
import { createNewProduct, getProducts, getProductById, deleteProductById } from '../controllers/products.controller'
const router = Router()

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/:id",getProductById);

router.delete("/products/id", deleteProductById );

router.put("/products");

router.get("/products");



export default router