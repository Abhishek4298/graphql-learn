const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const {
	GraphQLSchema, GraphQLObjectType, GraphQLString
} = require('graphql')
const app = express();


const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Helloworld",
		fields: () => ({
			message: {
				type: GraphQLString,
				resolve: () => "Hello world"
			}
		})
	})
})

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}))

// for output write : 

// query{
//   message
}

app.listen(5000, () => console.log('Server Running'))

