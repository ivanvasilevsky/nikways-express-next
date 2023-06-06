import { Router } from "express"
import partnerController from "../controllers/partnerController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/partner', authMiddleware, partnerController.create)
router.get('/partner', partnerController.getAll)
router.get('/partner_all', partnerController.getAllAdmin)
router.get('/partner/:id', partnerController.getOne)
router.put('/partner', authMiddleware, partnerController.update)
router.delete('/partner/:id', authMiddleware, partnerController.delete)

export default router