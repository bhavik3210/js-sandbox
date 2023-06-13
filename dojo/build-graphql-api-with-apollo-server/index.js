import { ApolloServer } from "apollo-server";
import SessionAPI from "./datasources/sessions.js";
import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    sessions: [Session]
    sessionById(id: ID): Session
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
  }
`;

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions();
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4023 }).then(({ url }) => {
  console.log(`graphQLServer running at ${url}`);
});
