import Knex from '../database/index';

class ProductsController {
    async index(req: any, res: any){
        const response = await Knex('Products')

        return res.json(response);
    }

    async search(req: any, res: any){
        const {id} = req.params

        const response = await Knex('Products').where({id: id});

        return res.json(response);
    }

    async create(req: any, res: any){
        const { name, total, Useges, TotalAlert, Vendor_id } = req.body

        await Knex('Products').insert({
            name,
            total,
            Useges,
            TotalAlert,
            Vendor_id
        });

        return res.json('Ok Product add')
    }

    async update(req: any, res: any){
        const { id } = req.params
        const { name, total, Useges, TotalAlert, Vendor_id } = req.body

        await Knex('Products').update({name, total, Useges, TotalAlert,Vendor_id}).where({id: id})

        return res.json('ok product updated');
    }

    async delete(req: any, res: any){
        const { id } = req.params

        await Knex('Products').del().where({id:id});

        return res.json('ok product deleted');
    }

    async store(req: any, res: any){
        const { id } = req.params

        const usages = await Knex('Products').where({id:id});

        const uses = usages.map((val:any) => val.Useges);

        console.log(uses);

        const Useges = uses - 1;

        await Knex('Products').update({ Useges }).where({id: id})

        return res.json(Useges);
    }

    async remove(req: any, res: any){
        const { id } = req.params
        const { total } = req.body

        const AtualTotal = await Knex('Products').where({id:id});

        const atual = AtualTotal.map((val: any) => val.total);

        const reduct = atual - total;

        await Knex('Products').update({total: reduct}).where({id: id});

        return res.json(reduct);
    }
}

export default new ProductsController;