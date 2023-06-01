import { Router } from "express"
import serviceGroupeController from "../controllers/serviceGroupeController.js"

const router = Router()

router.post('/services_groupe', serviceGroupeController.create)
router.get('/services_groupe', serviceGroupeController.getAll)
router.put('/services_groupe', serviceGroupeController.update)
router.delete('/services_groupe/:id', serviceGroupeController.delete)

router.post('/services_item', serviceGroupeController.createItem)
router.put('/services_item', serviceGroupeController.updateItem)
router.delete('/services_item/:id', serviceGroupeController.deleteItem)

export default router