const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull,
	GraphQLID,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const ContestType = require('./contest');

module.exports = new GraphQLObjectType({
	name: 'UserType',

	fields: {
		id: { type: GraphQLID  },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    fullName : {
      type: GraphQLString,
      resolve: obj => `${obj.firstName} ${obj.lastName}`
    },
    createdAt: { type: GraphQLString },
		email: { type: new GraphQLNonNull(GraphQLString) },
    contests : {
      type: new GraphQLList(ContestType),
      resolve: (obj, args, { loaders }) => {
        return loaders.contestsForUserIds.load(obj.id);
			}
    },
    contestsCount: {
      type: GraphQLInt,
      resolve: (obj, args, { loaders }, { fieldName }) => { // obj is current execution object (the user)
				return loaders.mdb.usersByIds.load(obj.id)
        .then(res => res[fieldName]);
			}
    },
    namesCount: {
      type: GraphQLInt,
      resolve: (obj, args, { loaders }, { fieldName }) => { // obj is current execution object (the user)
				return loaders.mdb.usersByIds.load(obj.id)
        .then(res => res[fieldName]);
			}
    },
    votesCount: {
      type: GraphQLInt,
      resolve: (obj, args, { loaders }, { fieldName }) => { // obj is current execution object (the user)
				return loaders.mdb.usersByIds.load(obj.id)
        .then(res => res[fieldName]);
			}
    }
  }
});