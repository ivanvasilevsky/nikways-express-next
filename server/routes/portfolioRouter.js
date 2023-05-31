import { Router } from "express"
import portfolioController from "../controllers/portfolioController.js"

const router = Router()

router.post('/project', portfolioController.create)
router.post('/portfolio_gallery', portfolioController.createGallery)
router.get('/project', portfolioController.getAll)
router.get('/project/:slug', portfolioController.getOne)
router.put('/project', portfolioController.update)
router.delete('/project/:id', portfolioController.delete)
router.delete('/portfolio_gallery/:id', portfolioController.deleteGallery)

export default router