import express from 'express'
 
import {  bookAccommodations, deleteAccommodations, userAccommodations,  updateUserAccommodation } from '../controllers/accommodationsController.js'
import { authenticate } from '../utils/authenticateUser.js'

const router = express.Router()

router.post('/', authenticate, bookAccommodations)
router.delete('/', authenticate, deleteAccommodations)

router.get('/myAccommodations', authenticate, userAccommodations) 
router.post('/myAccommodations', authenticate, updateUserAccommodation)

export default router