import {FastifyInstance} from "fastify"
import CartsController from "../controllers/CartsController"

export async function cartRoutes(fastify: FastifyInstance) {
    fastify.get('/carts', CartsController.index)
}
