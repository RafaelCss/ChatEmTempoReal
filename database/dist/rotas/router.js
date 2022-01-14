"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient(); // Inicialização do cliente do prisma
router.get('/cadastro', (req, res) => {
    res.render('index.html');
});
router.post('/cadastro', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = JSON.parse(req.body);
    const user = yield prisma.cadastro.create({
        data: {
            name,
            email,
            password,
            updatedAt: new Date(),
        }
    }).then(user => {
        const data = {
            message: 'Usuário Criado com Sucesso',
            user: user.email,
            status: 200
        };
        res.send(data);
    }).catch(err => {
        const { meta } = err; // meta parametro prisma
        const erro = {
            message: meta.target,
            status: 400
        };
        if (meta.target === 'Cadastro_email_key') {
            res.send(erro);
            console.error(`===> Email já cadastrado na base erro code : ${meta.target}`);
        }
    });
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { email, password } = req.body;
    const user = yield prisma.cadastro.findMany({
        where: {
            email: email,
            password: password,
        }
    }).then(user => {
        if (user.length > 0) {
            const data = {
                name: user[0].name,
                email: user[0].email,
                user: user[0].user,
                status: 200
            };
            return res.send(data);
        }
        else {
            const erro = {
                message: `Usuário não encontrado, realize seu cadastro`,
                user: `Este email não exite `,
                status: 400
            };
            return res.send(erro);
        }
    }).catch(err => {
        console.log(err);
    });
}));
router.get('/chat/:user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = req.params;
    const userDados = prisma.cadastro.findMany({
        where: {
            user
        }
    }).then(resposta => {
        const data = {
            name: resposta[0].name,
            email: resposta[0].email
        };
        res.send(data);
    }).catch(err => {
        console.error(err);
    });
}));
router.post('/chat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { messageSend, img, email } = req.body;
    yield prisma.message.create({
        //criar uma com base na tabela vai ser criado um novo registro
        data: {
            messageSend,
            img,
            email,
        }
    }).then(resposta => {
        res.send(resposta);
    }).catch(err => {
        console.error(err);
    });
}));
router.get('/message/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const user = yield prisma.message.findMany({
        where: {
            email,
        }
    }).then(resposta => {
        res.send(resposta);
    });
}));
exports.default = router;
//# sourceMappingURL=router.js.map