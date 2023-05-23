import { Router } from "express"

const router = Router()

import authController from "../controllers/authController.js"

router.post('/registration', authController.registration)
router.post('/login', authController.login)

export default router