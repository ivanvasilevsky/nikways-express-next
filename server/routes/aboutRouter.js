import { Router } from "express"
import aboutController from "../controllers/aboutController.js"

const router = Router()

router.get('/about', aboutController.get)
router.put('/about', aboutController.update)

export default router