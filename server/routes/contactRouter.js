import { Router } from "express"
import contactController from "../controllers/contactController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.get('/contact', contactController.get)
router.put('/contact', authMiddleware, contactController.update)
// router.post('/contact', contactController.create)

export default router