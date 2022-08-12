/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('book').del()
  await knex('book').insert([
    { id: 2, name: 'rowValue1', author: "Mike2", price: 120010 },
    { id: 1, name: 'rowValue2', author: "Mike3", price: 120020 },
    { id: 3, name: 'rowValue3', author: "Mike4", price: 120030 },
  ]);
};
