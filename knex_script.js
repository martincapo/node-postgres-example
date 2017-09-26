
const knex = require("./knex");

var lname = process.argv[2];

knex.select('*').from('famous_people')
.where('last_name', '=', lname)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
      knex.destroy();
});
