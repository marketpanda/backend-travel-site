import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/modelUser.js'
import {createError} from '../utils/errors2.js'
 

export const chat  = async(req, res, next) => {
    try {         
        res.status(200).send('chat controller')
    } catch (error) {
        next (err)
    }
}

export const profile  = async(req, res, next) => {
    try {
         
        res.status(200).send('profile controller')
    } catch (error) {
        next (err)
    }
}
 