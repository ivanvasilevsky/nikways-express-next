import { Router } from "express"
import portfolioController from "../controllers/portfolioController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.post('/project', authMiddleware, portfolioController.create)
router.post('/portfolio_gallery', authMiddleware, portfolioController.createGallery)
router.get('/project', portfolioController.getAll)
router.get('/project/:slug', portfolioController.getOne)
router.put('/project', authMiddleware, portfolioController.update)
router.delete('/project/:id', authMiddleware, portfolioController.delete)
router.delete('/portfolio_gallery/:id', authMiddleware, portfolioController.deleteGallery)

export default router