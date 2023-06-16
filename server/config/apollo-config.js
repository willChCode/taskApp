import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import http from 'http';

export const startApolloServer = async (app, typeDefs, resolvers) => {
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  /**midlewares */
  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  await new Promise(resolve =>
    httpServer.listen(
      {
        port: 4000
      },
      resolve
    )
  );
  console.log('Server on port 4000');
};
