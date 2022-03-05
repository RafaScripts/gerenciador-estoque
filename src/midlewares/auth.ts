//importação das blibiotecas e configuração da secret JWT
import jwt from 'jsonwebtoken';
import authConfig from "../configs/auth";
import { promisify } from "util";

export default async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    // se o token não estiver sendo enviado retornar erro
    if(!authHeader){
        return res.status(401).json({ error: 'Token not provided' });
    }

    // separação do token
    const [, token] = authHeader.split(' ');

    try {

        // @ts-ignore
        // decodifica o token e compara para saber se bate com a secret
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        // @ts-ignore
        req.userId = decoded.id;

        return next();
    }catch (err) {
        // se o token não bater retorna um erro
        return res.status(401).json({ error: "token invalid!" });
    }
};