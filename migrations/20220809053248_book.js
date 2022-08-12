/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('book', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('author', 255).notNullable();
            table.decimal('price').notNullable();
        })
    // .createTable('category', function (table) {
    //     table.increments('id');
    //     table.string('name', 255).notNullable();
    // });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('book');
};
