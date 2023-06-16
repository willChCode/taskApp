import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

/** import all components */
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  );
}

export default App;
