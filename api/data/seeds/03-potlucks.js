exports.seed = function(knex, Promise) {
    return knex('potlucks').insert([
      {
        user_id: '1',
        potluck_name:'tommy BBQ',
        potluck_description: 'a really good time is about to happen',
        potluck_date: '03/28/2022',
        potluck_time: '04:00 pm',
        potluck_street: '123 main street',
        potluck_city: 'San Francisco',
        potluck_state: 'CA',
        potluck_country: 'USA',
        potluck_zip: '94222'
      },
      {
        user_id: '2',
        potluck_name:'damin pizza party',
        potluck_description: 'eat some pizza!',
        potluck_date: '09/15/2022',
        potluck_time: '07:00 pm',
        potluck_street: '129 E street',
        potluck_city: 'Austin',
        potluck_state: 'TX',
        potluck_country: 'USA',
        potluck_zip: '94255'
      },
      {
        user_id: '3',
        potluck_name:'Ben pasta party',
        potluck_description: 'lets eat all the pasta, woo!',
        potluck_date: '08/28/2023',
        potluck_time: '06:00 pm',
        potluck_street: '123 houston street',
        potluck_city: 'Miami',
        potluck_state: 'FL',
        potluck_country: 'USA',
        potluck_zip: '87522'
      },
      {
        user_id: '4',
        potluck_name:'Marcie chicken party',
        potluck_description: 'there is going to be so much chicken, its wild...',
        potluck_date: '03/25/2022',
        potluck_time: '02:00 pm',
        potluck_street: '123 random street',
        potluck_city: 'Kansas City',
        potluck_state: 'MI',
        potluck_country: 'USA',
        potluck_zip: '94299'
      },
      {
        user_id: '5',
        potluck_name:'chris pancake party',
        potluck_description: 'who doesnt like pancakes?',
        potluck_date: '01/28/2022',
        potluck_time: '09:00 pm',
        potluck_street: '123 larry street',
        potluck_city: 'Los Angeles',
        potluck_state: 'CA',
        potluck_country: 'USA',
        potluck_zip: '67522'
      },
    ]);
  };