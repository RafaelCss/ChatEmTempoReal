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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Treatment {
    static addBank(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.cadastro
                .create({
                data: {
                    name,
                    email,
                    password,
                    updatedAt: new Date(),
                },
            })
                .then((user) => {
                if (!user === null) {
                    const cad = { data: user.email, status: 200 };
                    return cad;
                }
                else {
                    const cad = { data: user.email, status: 400 };
                    return cad;
                }
            })
                .catch((err) => {
                return err;
                // res.status(400).send(`Usuário já existe ou houve um erro`)
            });
        });
    }
    static loginConfirm(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.cadastro
                .findMany({
                where: {
                    email: email,
                    password: password,
                },
            })
                .then((user) => {
                if (user.length > 0) {
                    const data = {
                        name: user[0].name,
                        email: user[0].email,
                    };
                    return data;
                }
                else {
                    return false;
                }
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
}
exports.default = Treatment;
//# sourceMappingURL=Treatment.js.map