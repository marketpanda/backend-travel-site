import jwt from 'jsonwebtoken'


const maxAge = 3 * 24 * 60 * 60
export const giveToken = (userId) => {
    return jwt.sign({ userId }, 'watatripSecretKey888', {
        expiresIn: maxAge
    })
}