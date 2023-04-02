export async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { tags: ['tag1', 'tag2', 'tag3'] }
  })
}
