import {FastifyReply, FastifyRequest} from 'fastify'
import {z} from 'zod'

import {prisma} from '../lib/prisma'

class CartsController {
    async index(request: FastifyRequest, reply: FastifyReply) {
        const carts = prisma.cart.findMany()
        return {carts}
    }

    async create(request: FastifyRequest, reply: FastifyReply) {
        const createCartBody = z.object({
            code: z.string(),
            priceInCents: z.number(),
        })

        const {code, priceInCents} = createCartBody.parse(request.body)

        await prisma.cart.create({
            data: {
                code,
                priceInCents,
            },
        })

        return reply.status(201)
    }

    async update(request: FastifyRequest, reply: FastifyReply) {
        const getCartParams = z.object({
            id: z.string(),
        })

        const updateCartBody = z.object({
            code: z.string(),
            priceInCents: z.number(),
        })

        const {id} = getCartParams.parse(request.query)
        const {code, priceInCents} = updateCartBody.parse(request.body)

        await prisma.cart.update({
            where: {
                id,
            },
            data: {
                code,
                priceInCents
            }
        })

        return reply.status(200)
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const getCartParams = z.object({
            id: z.string(),
        })

        const {id} = getCartParams.parse(request.query)

        await prisma.cart.delete({
            where: {
                id
            }
        })

        return reply.status(200)
    }
}

export default new CartsController()
