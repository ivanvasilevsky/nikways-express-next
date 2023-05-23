import { Router } from "express"
import portfolioController from "../controllers/portfolioController.js"

const router = Router()

router.post('/portfolio', portfolioController.create)
router.post('/portfolio_gallery', portfolioController.createGallery)
router.get('/portfolio', portfolioController.getAll)
router.get('/portfolio/:slug', portfolioController.getOne)
router.put('/portfolio', portfolioController.update)
router.delete('/portfolio/:id', portfolioController.delete)
router.delete('/portfolio_gallery/:id', portfolioController.deleteGallery)

export default router