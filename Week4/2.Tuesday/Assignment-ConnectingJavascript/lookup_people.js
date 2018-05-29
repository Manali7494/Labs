const pg = require('pg');
const settings = require('./settings.json');
const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

function showResult(result, findPerson){
  console.log(`Found ${result.rows.length} person(s) by the name of '${findPerson}'`);
  result.rows.forEach((item, index) => {
    console.log(`- ${index + 1}: ${item.first_name} ${item.last_name} , born ` + (item.birthdate.toString().slice(0, 15)) );
  });
}

var findPerson = process.argv[2];
client.connect((err) => {
  if (err) { console.error(err); }
  console.log('Searching...');
  client.query("SELECT * FROM famous_people WHERE first_name=$1::text OR last_name=$1::text", [findPerson], (err, result) => {
    if (err) { console.error(err); }
    showResult(result, findPerson);
    client.end();
  });
});

