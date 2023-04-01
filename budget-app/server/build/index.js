"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const pino_1 = __importDefault(require("pino"));
const routes_1 = require("./routes");
const server = (0, fastify_1.fastify)({
    logger: (0, pino_1.default)({ level: 'info' }),
});
server.register(routes_1.routes);
const start = async () => {
    try {
        await server.listen({ port: 7000 });
        console.log('Server started successfully');
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map