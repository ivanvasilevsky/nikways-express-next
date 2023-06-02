import jwt from "jsonwebtoken"
import models from "../models/models.js"
import messageService from "../services/messageService.js"
import argon2 from "argon2"

const generateToken = (id, fio) => {
  const payload = {
    id,
    fio
  }

  const secretKey = new TextEncoder().encode(process.env.SECRET_KEY)

  return jwt.sign(payload, secretKey, { expiresIn: '24h' })
}

class authController {

  async registration(req, res) {
    try {
      const { login, password, fio } = req.body

      const userCheck = await models.Users.findOne({ where: { login } })
      if (userCheck) {
        return res.json(messageService.send(0, 'Пользователь с таким логином существует!'))
      }

      const hashPassword = await argon2.hash(password)
      const user = await models.Users.create({ login, password: hashPassword, fio })

      res.json(generateToken(user.id, user.fio))
    } catch (error) {
      res.json(error)
    }
  }

  async login(req, res) {
    try {
      const { login, password } = req.body

      const user = await models.Users.findOne({ where: { login } })
      if (!user) {
        return res.json(messageService.send(0, 'Неверный логин!'))
      }

      const verifyPassword = await argon2.verify(user.password, password)
      if (!verifyPassword) {
        return res.json(messageService.send(0, 'Пароль неверный!'))
      }

      res.json({
        status: 1,
        role: user.role,
        token: generateToken(user.id, user.fio)
      })

    } catch (error) {
      res.json(error)
    }
  }
}

export default new authController