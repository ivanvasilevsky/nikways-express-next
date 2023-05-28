import { Router } from "express"
import sendMailController from "../controllers/sendMailController.js"

const router = Router()

router.post('/send_mini_form', sendMailController.sendMini)

export default router