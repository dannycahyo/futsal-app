import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "src/theme";
import "../theme/styles.css";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import setupMocks from "../mocks";
import { Provider } from "next-auth/client";

if (process.env.NODE_ENV === "development") {
  setupMocks();
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;
