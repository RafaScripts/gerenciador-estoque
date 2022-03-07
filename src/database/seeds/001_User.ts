import { Knex } from "knex";
import bcrypt from "bcrypt";


export async function seed(knex: Knex): Promise<void> {

    const password = '12345678';

    const password_hashh = await bcrypt.hash(password, 8);

    // Deletes ALL existing entries
    await knex("Users").del();

    // Inserts seed entries
    await knex("Users").insert([
        { username: "admin", email:"admin@admin.com", password_hash: password_hashh }
    ]);
};
