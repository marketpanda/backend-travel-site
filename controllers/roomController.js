import Rooms from "../models/modelRoom.js"
import { createError } from "../utils/errors2.js"

export const getRooms = async(req, res, next) => {

   
    try {
        const rooms = await Rooms.findAll({
            where: {
                homeType: 'Apartment'
            }
        })
        res.status(200).json(rooms)
    } catch (error) {
        console.log(error)
    } 
    
}