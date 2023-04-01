import Fastify, { fastify } from 'fastify'
import pino from 'pino'
import { routes } from './routes'

const server = fastify({
  logger: pino({ level: 'info' }),
})

server.register(routes)

const start = async () => {
  try {
    await server.listen({ port: 7000 })
    console.log('Server started successfully')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
