import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { client } from "./middleware/apollo";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
