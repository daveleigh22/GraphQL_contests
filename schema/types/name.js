const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const pgdb = require('../../database/pgdb');


module.exports = new GraphQLObjectType({
  name: 'Name',
  
  fields: () => {
    // We do this to avoid cyclic depedency problem
    const UserType = require('./user');
    return {
      id: { type: GraphQLID },
      label: { type: new GraphQLNonNull(GraphQLString)},
      description: { type: GraphQLString},
      createdAt: { type: new GraphQLNonNull(GraphQLString)},
      createdBy: { type: new GraphQLNonNull(UserType),
        resolve(obj, args, { loaders }) {
          // Will cache the object for duration of http request
          return loaders.usersByIds.load(obj.createdBy)
          //return pgdb(pgPool).getUserById(obj.createdBy)
        }
      }
    }
  } 
});