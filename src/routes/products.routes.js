import { Router } from 'express'
import { createNewProduct, getProducts, getProductById } from '../controllers/products.controller'
const router = Router()

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/:id",getProductById);

router.delete("/products");

router.put("/products");

router.get("/products");



export default router