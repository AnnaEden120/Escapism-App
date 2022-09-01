var pgAdmin = NodeRequire("@supabase/pg-admin-js");
var connection = {
  user: "postgres",
  password: "test",
  host: "localhost",
  port: 5432,
  database: "final-app"
};
pgAdmin
  .toJSON(connection, "public")
  .then(({ tables }) => {
    // handle json object
    console.log("user_sign", tables);
  })
  .catch(function (error) {
    // handle error
  });

export default connection;
