import { Router } from "express"
import categoryController from "../controllers/categoryController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/category', authMiddleware, categoryController.create)
router.get('/category_all', categoryController.getAll)
router.get('/category/:slug', categoryController.getOne)
router.put('/category', authMiddleware, categoryController.update)
router.delete('/category/:id', authMiddleware, categoryController.delete)

export default router