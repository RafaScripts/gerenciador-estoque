import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Products', function(table){
        table.increments('id')

        table.text('name')

        table.integer('total').defaultTo(1);

        table.integer('Useges').defaultTo(1);

        table.integer('TotalAlert').defaultTo(10);

        table.integer('Vendor_id')
            .references('Vendors.id').defaultTo(null)

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Products');
}