
exports.seed = async function(knex, Promise) {
  
  await knex('greetings').del();
  await Promise.all (
    [
      knex('greetings').insert({greeting: 'Hello! Database connected.'})
    ]
  );

}