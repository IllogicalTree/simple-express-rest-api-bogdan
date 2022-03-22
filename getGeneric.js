// Returns a promise containing the result of any sql query
module.exports = (dbCredentials, query) => {
  // We are wrapping the query in a promise so that we can use async/await
  return new Promise((resolve, reject) => {
    dbCredentials.query(query, (error, results) => {
      // A ternary expression to avoid using an if statement
      error ? reject(error) : resolve(results);
    });
  });
};
