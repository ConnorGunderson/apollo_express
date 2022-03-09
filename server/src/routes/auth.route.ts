import express = require('express')

export const authRouter = express.Router()

authRouter.get('/', (_, res) => {
  res.send('auth route')
})

authRouter.get('/hey', (_, res) => {
  res.send('auth route hey')
})
