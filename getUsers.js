
// Returns a promise which returns all of the users in the database
module.exports = dbCredentials => {
  return new Promise((resolve, reject) => {
    dbCredentials.query("SELECT * FROM users", (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Note that all of the above could be replaced with the following but i've written it as above to be verbose
/*
const getGeneric = require("./getGeneric");
module.exports = dbCredentials => getGeneric(dbCredentials, "SELECT * FROM users");
*/
