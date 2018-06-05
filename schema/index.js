//Import type helpers from graphql-js
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull
} = require('graphql');

const UserType = require('./types/user');

// The root query type is where in the data graph
// we can start asking questions
const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		me: {
			type: UserType,
			description: 'The current user identified by an API key',
			args: {
				key: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: (obj, args, { loaders }) => {
				// Get user from database
				return loaders.usersByApiKeys.load(args.key);
			}
		}
	}
});

const ncSchema = new GraphQLSchema({
	query: RootQueryType
});

module.exports = ncSchema;