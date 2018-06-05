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
