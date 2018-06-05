launch the docker containers and prime the databases with data. Can just run loadTestMongoData.js.
For postgres need to bash into the container and run the sql commands via psql test-pg-data.sql. These tables will be created into the default postgres database.


nodemon --exec node lib/index.js

http://159.65.61.122:3000/graphql

{
  me(key : "4242")
  {
    id,
    firstName,
    lastName,
    contests {
      code
      title
      status
    }
  }
}
