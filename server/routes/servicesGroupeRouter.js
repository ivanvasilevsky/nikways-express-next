import { Router } from "express"
import serviceGroupeController from "../controllers/serviceGroupeController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/services_groupe', authMiddleware, serviceGroupeController.create)
router.get('/services_groupe', serviceGroupeController.getAll)
router.put('/services_groupe', authMiddleware, serviceGroupeController.update)
router.delete('/services_groupe/:id', authMiddleware, serviceGroupeController.delete)

router.post('/services_item', authMiddleware, serviceGroupeController.createItem)
router.put('/services_item', authMiddleware, serviceGroupeController.updateItem)
router.delete('/services_item/:id', authMiddleware, serviceGroupeController.deleteItem)

export default router