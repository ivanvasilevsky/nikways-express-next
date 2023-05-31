import { Router } from "express"
import categoryController from "../controllers/categoryController.js"

const router = Router()

router.post('/category', categoryController.create)
router.get('/category_all', categoryController.getAll)
router.get('/category/:slug', categoryController.getOne)
router.put('/category', categoryController.update)
router.delete('/category/:id', categoryController.delete)

export default router