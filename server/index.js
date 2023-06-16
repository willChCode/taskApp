import express from 'express';
import 'dotenv/config.js';
import { startApolloServer } from './config/apollo-config.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import { connectDB } from './config/mongo.js';

const app = express();
connectDB();

/**middleware */
app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to Graph and Node');
});

startApolloServer(app, typeDefs, resolvers);

// app.get('/', (req, res) => {
//   res.send('HOla mundillo');
// });

// app.listen(3000, () => {
//   console.log('Server on port 3000');
// });
