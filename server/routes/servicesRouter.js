import { Router } from "express"
import serviceController from "../controllers/serviceController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/services', authMiddleware, serviceController.create)
router.get('/services', serviceController.getAll)
router.put('/services', authMiddleware, serviceController.update)
router.delete('/services/:id', authMiddleware, serviceController.delete)

export default router