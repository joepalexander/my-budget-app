
exports.up = function(knex, Promise) {
  return knex.schema.createTable('greetings', function (table) {
    table.increments('id').primary();
    table.string('greeting');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('greetings');
};
