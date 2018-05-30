const settings = require('./settings.json');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});

var firstName = process.argv[2];
var lastName = process.argv[3];
var dateOfBirth = process.argv[4];

knex('famous_people').insert({first_name: firstName, last_name: lastName, birthdate: dateOfBirth}).asCallback((error, result) => {
  if (error) { console.error(error)}
  knex.destroy();

});



