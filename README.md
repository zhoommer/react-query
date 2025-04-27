# TanStack Query in React

## Overview
TanStack Query (formerly known as React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes **fetching**, **caching**, **synchronizing** and updating server state in your web applications a breeze.


## Installation
```
npm i @tanstack/react-query
```
## Before Starting
use QueryClientProvider and set QueryClient in App file.

```
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import PostList from "./components/post/PostList";


const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    </>
  )
}

export default App```
