exports.seed = function(knex, Promise) {
    return knex('users').insert([
      {
        username: 'tommyc',
        password:'secret1',
      },
      {
        username: 'damianl',
        password:'secret2',
      },
      {
        username: 'benr',
        password:'secret3',
      },
      {
        username: 'marciem',
        password:'secret4',
      },
      {
        username: 'chriss',
        password:'secret5',
      },
    ]);
  };