//import logo from './logo.svg';

import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Home from "./containers/Home/Home";

const queryClient = new QueryClient({});

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Home></Home>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
   </ChakraProvider>
    </div>
  );
}

export default App;
