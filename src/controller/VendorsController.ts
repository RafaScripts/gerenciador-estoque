import Knex from '../database/index';

class VendorsController{
    async index(req: any, res: any){
        const response = await  Knex('Vendors')

        return res.json(response);
    }

    async create(req: any, res: any){
        const { name } = req.body

        await Knex('Vendors').insert({
            name
        });

        return res.status(201).json('Ok created');
    }

    async delete(req: any, res: any){
        const { id } = req.params

        await Knex('Vendors').del().where({id: id});

        return res.json('Ok vendor deleted')
    }
}


export default new VendorsController;