import {FastifyReply, FastifyRequest} from "fastify"

class CartsController {
    async index(req: FastifyRequest, res: FastifyReply) {
        return { foo: 'bar' }
    }
}

export default new CartsController()
