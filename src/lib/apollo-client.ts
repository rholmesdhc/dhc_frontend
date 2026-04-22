import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://dhc-website-backend-fgb7dqhqezcpc0ck.centralus-01.azurewebsites.net/graphql",
      fetchOptions: { cache: "no-store" },
    }),
  });
});
