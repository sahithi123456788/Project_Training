import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, createHttpLink, gql } = pkg;
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://jjik3xvja5e4hbizo53kjwgo2a.appsync-api.ap-southeast-2.amazonaws.com/graphql',
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});


const MyQuery = gql`
  query MyQuery {
    getEmpdetails(emp_id: 102) {
      age
      emp_id
      name
    }
  }
`;
client.query({
  query: MyQuery,
})
.then(result => {
  console.log('Employee:', result.data.getEmpdetails);
})
.catch(error => {
  console.error('Error fetching employee:', error);
});