import express from "express"
import userRoutes from './users.routes'
import rootRoutes from './root.routes'
import authRoutes from './auth.routes'

const router = express.Router()

router.use('/', rootRoutes)
router.use('/auth', authRoutes)
router.use('/users', userRoutes);

export default  router