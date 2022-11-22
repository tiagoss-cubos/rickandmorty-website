import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { RoutesComponent } from "./components/RoutesComponent";
import client from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <RoutesComponent />
    </ApolloProvider>
  );
}

export default App;
