import aboutRouter from "./routes/aboutRouter.js"
import authRouter from "./routes/authRouter.js"
import categoryRouter from "./routes/categoryRouter.js"
import contactRouter from "./routes/contactRouter.js"
import mailRouter from "./routes/mailRouter.js"
import partnerRouter from "./routes/partnerRouter.js"
import portfolioRouter from "./routes/portfolioRouter.js"
import servicesRouter from "./routes/servicesRouter.js"

export default [
  authRouter,
  contactRouter,
  aboutRouter,
  categoryRouter,
  portfolioRouter,
  servicesRouter,
  partnerRouter,
  mailRouter
]