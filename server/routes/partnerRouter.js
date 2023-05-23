import { Router } from "express"
import partnerController from "../controllers/partnerController.js"

const router = Router()

router.post('/partner', partnerController.create)
router.get('/partner', partnerController.getAll)
router.put('/partner', partnerController.update)
router.delete('/partner/:id', partnerController.delete)

export default router