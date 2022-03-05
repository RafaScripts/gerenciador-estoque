import Knex from '../database/index';
import jwt from 'jsonwebtoken';
import authConfig from "../configs/auth";
import * as yup from "yup";
import bcrypt from "bcrypt";

class SessionController {
    async store(req: any, res: any){
        const schema = yup.object().shape({
            email: yup.string().required(),
            password: yup.string().required()
        });

        const { email, password } = req.body

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: "Validation fails" });
        }

        const user = await Knex('Users').first('*').where({ email });

        if(!user){
            return res.status(400).json("User not Found");
        }

        const valid = await  bcrypt.compare(password, user.password_hash);

        if(!valid){
            return res.status(400).json("Password does not match");
        }

        const { id, username, } = user;

        return res.json({
            user: {
                id,
                username,
                email,
            },
            token: jwt.sign({id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            }),
        });


    }
}

export default new SessionController;