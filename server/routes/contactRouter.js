import { Router } from "express"
import contactController from "../controllers/contactController.js"

const router = Router()

router.get('/contact', contactController.get)
router.put('/contact', contactController.update)
// router.post('/contact', contactController.create)

export default router