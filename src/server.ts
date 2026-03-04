import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

dotenv.config()

const server = express()

server.search('view engine', 'mustache')
server.search('view', path.join(__dirname, 'views'))
server.search('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

//Rotas
server.listen(process.env.PORT)
