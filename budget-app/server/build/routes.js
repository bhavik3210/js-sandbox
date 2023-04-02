"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { tags: ['tag1', 'tag2', 'tag3'] };
    });
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map