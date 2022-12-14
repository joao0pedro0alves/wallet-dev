import Fastify from 'fastify'
import cors from '@fastify/cors'
import * as dotenv from 'dotenv'

import { cartRoutes } from './routes/cart'

dotenv.config()

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(cartRoutes)

    await fastify.listen({
        port: process.env.PORT,
        host: '0.0.0.0',
    })
}

bootstrap()
