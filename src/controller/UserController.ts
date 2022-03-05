import Knex from '../database/index';
import yup from 'yup';
import bcrypt from 'bcrypt';

class UserController {
    async index(req: any, res: any){
        const response = await Knex('Users');

        return res.json(response);
    }

    async create(req: any, res: any){
        /*const schema = yup.object().shape({
            username: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().min(7).required()
        });*/

        const { username, email, password } = req.body

        /*if(!(await schema.isValid(req.body))){
            return res.status(400).json('Error: Username')
        }*/

        const password_hash = await bcrypt.hash(password, 8);

        await Knex('Users').insert({
            username, email, password_hash
        });

        return res.status(201).json('user created');
    }

    async update(req: any, res: any){
        const schema = yup.object().shape({
            email: yup.string().required(),
            oldPassword: yup.string().min(7).required(),
            newPassword: yup.string().min(7).required()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(401).json('error: update don`t auth');
        }

        const { id } = req.params

        const { email, oldPassword, newPassword } = req.body;

        const verify = await Knex('Users').first('*').where({id: id});

        const check = await bcrypt.compare(oldPassword, verify.password_hash);

        if(!check){
            return res.json('error: OldPassword does not match');
        }

        const password_hash = await bcrypt.hash(newPassword, 8);

        await Knex('Users').update({ password_hash: password_hash }).where({ id: id });

        return res.json('ok');

    }

    async delete(req: any, res: any){
        const { id } = req.params

        await Knex('Users').del().where({ id: id })

        return res.json(`Users ${id} deleted`);
    }


}

export default new UserController;