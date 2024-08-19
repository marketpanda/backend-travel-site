import express from 'express'
import { chat  } from '../controllers/chatController.js'

const router = express.Router()

router.get('/', chat)
 

export default router