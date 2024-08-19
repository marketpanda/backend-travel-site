import * as fs from 'fs'
// import Places from '../models/modelPlaces.js'
import { createError } from '../utils/errors2.js'
import cloudinary from '../utils/cloudinary.js' 
import { Sequelize } from 'sequelize'


export const searchPlaces = async (req, res, next) => {

    res.status(200).json({msg: 'In God we Trust'})

    
}
 