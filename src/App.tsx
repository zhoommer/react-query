import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import PostList from "./modules/post/components/PostList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PostList />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  )
}

export default App
