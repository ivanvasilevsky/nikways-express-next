import { Router } from "express"
import serviceController from "../controllers/serviceController.js"

const router = Router()

router.post('/services', serviceController.create)
router.get('/services', serviceController.getAll)
router.put('/services', serviceController.update)
router.delete('/services/:id', serviceController.delete)

export default router