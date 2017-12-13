async function main() {
  const ApolloClient = require("apollo-client").ApolloClient;
  const HttpLink = require("apollo-link-http").HttpLink;
  const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
  const fetch = require("node-fetch");
  const gql = require("graphql-tag");

  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://graphql.org/swapi-graphql",
      fetch: fetch
    }),
    cache: new InMemoryCache()
  });

  const query = gql`
    query MyQuery {
      ...TheFilms
      ...ThePeople
    }

    fragment TheFilms on Root {
      allFilms {
        films {
          id
          title
        }
      }
    }

    fragment ThePeople on Root {
      allPeople {
        people {
          name
        }
      }
    }
  `;

  const result = await client.query({ query });
  console.log("result", result);
}

main();
