"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../rotas/router"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:3000',
    options: 200
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(router_1.default); //rota  para o servidor 
app.set('view engine', 'html');
app.use(express_1.default.static('.'));
app.use(express_1.default.static('rotas'));
app.listen(process.env.PORT || 3333, () => {
    console.log("Server is running on port 3333");
});
//# sourceMappingURL=server.js.map