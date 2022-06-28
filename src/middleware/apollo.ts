import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4s1t2vh1pgz01yxfdt4c6kb/master",
  cache: new InMemoryCache(),
});
