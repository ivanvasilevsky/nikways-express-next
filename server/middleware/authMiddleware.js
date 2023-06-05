import jwt from 'jsonwebtoken'

export default function (req, res, next) {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(402).json({ 'status': 0, 'message': 'Пользователь не авторизован!' })
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decodedData
    next()

  } catch (e) {
    console.log(e)
    return res.status(402).json({ 'status': 0, 'message': 'Пользователь не авторизован!' })
  }
}