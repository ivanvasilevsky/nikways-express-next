import { Router } from "express"
import partnerController from "../controllers/partnerController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/partner', authMiddleware, partnerController.create)
router.get('/partner', partnerController.getAll)
router.put('/partner', authMiddleware, partnerController.update)
router.delete('/partner/:id', authMiddleware, partnerController.delete)

export default router