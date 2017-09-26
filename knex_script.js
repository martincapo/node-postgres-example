const pg = require("pg");
const settings = require("./settings"); // settings.json


var knex = require('knex')({
              client: 'pg',
              connection: {
                host : settings.hostname,
                user : settings.user,
                password : settings.password,
                database : settings.database
              }
            });


var lname = process.argv[2];

knex.select('*').from('famous_people')
.where('last_name', '=', lname)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
      knex.destroy();
});

