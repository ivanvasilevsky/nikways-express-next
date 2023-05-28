import { Router } from "express"
import sendMailController from "../controllers/sendMailController.js"

const router = Router()

router.post('/send_form', sendMailController.send)

export default router