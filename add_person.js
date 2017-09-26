const knex = require("./knex");

var fName = process.argv[2];
var lName = process.argv[3];
var dob = process.argv[4];

var values = {
                last_name: lName,
                first_name: fName,
                birthdate: dob
              }

knex('famous_people').insert(values)
.asCallback(function(err, rows) {
  if (err) return console.error(err);
      console.log(rows);
      knex.destroy();
});

